const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URI,
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
            },
            () => {
                console.log('MongoDB connection established');
            }
        );
    } catch (error) {
        console.error('MongoDB not connected =>', error);
    }
};

module.exports = { connectDb };
