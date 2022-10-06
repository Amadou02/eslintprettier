const usersDoc = require('./routes/users.doc');

const swaggerDoc = {
    openapi: '3.0.0',
    info: {
        version: '1.0.0',
        title: 'My User Project API',
        description: 'My user project api',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Local server',
        },
        {
            url: 'https://production',
            description: 'Production server',
        },
    ],
    paths: {
        ...usersDoc,
    },
};

module.exports = swaggerDoc;
