const users = [
    {
        id: 1,
        lastname: 'DOE',
        firstname: 'John',
        birthdate: '1970-01-01',
    },
    {
        id: 2,
        lastname: 'DOE',
        firstname: 'Jane',
        birthdate: '1970-01-01',
    },
    {
        id: 3,
        lastname: 'Loper',
        firstname: 'Dev',
        birthdate: '1970-01-01',
    },
];

exports.getAllUsers = (req, res) => {
    res.status(200).json(users);
};

exports.getOneUser = (req, res) => {
    const user = users.find((user) => user.id === Number(req.params.id));

    if (!user) {
        res.status(404).json({
            message: 'user not found',
        });
    }
    res.status(200).json(user);
};

exports.createUser = (req, res) => res.status(201).json(req.body);

exports.updateUser = (req, res) => {
    const user = users.find((user) => user.id === Number(req.params.id));

    const data = req.body;
    console.log(data)
    res.status(200).json({ ...user, ...data });
};

exports.deleteUser = (req, res) => {
    const newUsersList = users.filter(
        (user) => user.id !== Number(req.params.id)
    );

    res.status(200).json(newUsersList);
};
