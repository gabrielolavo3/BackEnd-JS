const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDatabse = require('./database/mongodb');
const authRouter = require('./routers/authRouter');

const app = express();

app.use(cors())
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDatabse()
    .then(() => {
        console.log('Database connected successfully 🍚');
    })
    .catch((err) => {
        console.error('Database connection failed:', err);
    });

app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.json({ message: 'Express API is running' });
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} 🍘`);
})