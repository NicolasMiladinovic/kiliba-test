const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const userRoutes = require('./routes/user');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, HttpHeaders');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/post', userRoutes);

app.get("/test" ,(req, res) => {
    res.status(200).json({ success: true });
});

app.listen(1337, () => console.log("Listening on port 1337"));