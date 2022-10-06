const users = [
    {
        _id: '62cb1e1ba94d5291db6a35d6',
        firstname: 'john',
        lastname: 'doe',
        birthdate: '1990-01-01T00:00:00.000Z',
        phone: '0600000000',
        email: 'johndoe@email.com',
        createdAt: '2022-07-10T18:44:43.328Z',
        updatedAt: '2022-07-10T18:44:43.328Z',
        __v: 0,
    },
];

const usersList = {
    tags: ['users'],
    summary: 'Get all users',

    responses: {
        200: {
            description: 'OK',
            schema: {
                type: 'object',
                example: {
                    count: 1,
                    results: users,
                },
            },
        },
        400: {
            description: 'invalid status value',
        },
    },
};

const createUser = {
    tags: ['users'],
    summary: 'Create a new user',
    consumes: ['application/json'],
    parameters: [
        {
            in: 'body',
            name: 'body',
            description: 'create user object',
            required: true,
            schema: {
                type: 'object',
                properties: {
                    firstname: {
                        type: 'string',
                        description: "user's firstname",
                    },
                    lastname: {
                        type: 'string',
                        description: "user's lastname",
                    },
                    birthdate: {
                        type: 'date-time',
                        pattern: '/([0-9]{4})-(?:[0-9]{2})-([0-9]{2})/',
                        example: '2019-05-17',
                    },
                    phone: {
                        type: 'string',
                        description: "user's phone number",
                    },
                },
            },
        },
    ],
    responses: {
        default: {
            description: 'success',
        },
    },
};

const usersDoc = {
    '/users': {
        get: usersList,
    },
    users: {
        post: createUser,
    },
};

module.exports = usersDoc;
