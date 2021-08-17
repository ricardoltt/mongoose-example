require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const userRoutes = require('./src/features/users/user.routes');
const mongoose = require('mongoose');

app.use(express.json());

app.use('/users', userRoutes);

app.listen(port, async () => {

    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`Listening at http://localhost:${port}`);

    } catch (err) {
        console.error(err);
    }

});
