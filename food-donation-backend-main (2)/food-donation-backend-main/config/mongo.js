import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://cs23b1079:dZcVWznq52LNGLvn@dbms.k5ltojg.mongodb.net/?retryWrites=true&w=majority&appName=DBMS';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

export default connectDB;
