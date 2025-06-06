import mongoose from 'mongoose';

async function connectDatabase() {
    await mongoose.connect("mongodb+srv://dbDev:OkMYwUtewBtvpseT@clusterunity.wfwcgkr.mongodb.net/?retryWrites=true&w=majority&appName=ClusterUnity");
}

export default connectDatabase;