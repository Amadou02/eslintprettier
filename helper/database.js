const mongoose = require('mongoose');

const getDbInstance = async () => {
    try {
        const db = await mongoose.connect(process.env.DB_DEV_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // console.log(`L'application est connectée à MongoDB Atlas`);
        return db;
    } catch (error) {
        // console.log(error.message);
        return false;
    }
};

module.exports = getDbInstance;
