exports.userIndex = (req, res) =>
    res.status(200).json({
        message: 'hello controller',
    });

exports.userCreate = (req, res) =>
    res.status(201).json({
        message: 'CREATED',
    });

exports.userUpdate = (req, res) =>
    res.status(201).json({
        message: 'CREATED',
    });
