import mongoose from 'mongoose';

async function connectDatabase() {
    await mongoose.connect(process.env.MONGO_URI);
}

export default connectDatabase;