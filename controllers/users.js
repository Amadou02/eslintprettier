// On import les utilisateurs
const bcrypt = require('bcrypt');
const saltRound = 10;

const User = require('./../models/users');

/**
 *
 * @param {Request} req
 * @param {Respanse} res
 */
exports.getAllUsers = async (req, res) => {
    const users = await User.find({}, { password: 0 });
    res.status(200).json(users);
};
/**
 *
 * @param {Request} req
 * @param {Respanse} res
 */
exports.getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({
                message: 'user not found',
            });
        }

        const userObject = JSON.parse(JSON.stringify(user));
        delete userObject.password;
        res.status(200).json(userObject);
    } catch (error) {
        res.status(500).json('user request fail');
    }
};

/**
 *
 * @param {Request} req
 * @param {Respanse} res
 */

exports.createUser = async (req, res) => {
    // on récupère les données envoyées
    const postData = req.body;
    // on chiffre le mot de passe de l'utilisateur
    try {
        const passwordhash = await bcrypt.hash(postData.password, saltRound);
        const user = new User({
            ...postData,
            password: passwordhash,
        });
        await user.save();
        // On converti l'objet mongo en objet JS
        const userObject = JSON.parse(JSON.stringify(user));
        // On supprime le mot de passe de l'objet à renvoyer au client
        delete userObject.password;
        res.status(201).json(req.body);
    } catch (error) {
        res.status(500).json({ message: 'register failed!' });
    }
};

/**
 *
 * @param {Request} req
 * @param {Respanse} res
 */

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            ...req.body,
        });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'register failed!' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'register failed!' });
    }
};
