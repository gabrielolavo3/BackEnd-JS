const mongoose = require('mongoose');

async function connectDatabse() {
    await mongoose.connect(process.env.MONGODB_URI)
}

module.exports = connectDatabse