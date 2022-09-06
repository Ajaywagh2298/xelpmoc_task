const express = require('express');
const DBClient = require('./DBClient');
const cors = require('cors')
const bodyparser = require('body-parser')
const { postUser, getLoginUser, deleteUser, updateUser, changePassword }  = require("./API");
const { fibonacciSeries, getFibonacciSeries } = require('./fibonacciSeries');
const app = express();

app.use(cors())
app.use(bodyparser.json())
const port = 9000;


app.post('/users', (req, res) => {
    postUser(req, res);
})

app.post('/login-user', (req, res) => {
    getLoginUser(req, res);
})

app.delete('/delete-user/:id', (req, res) => {
    deleteUser(req, res);
})

app.put('/update-user/:id', (req, res) => {
    updateUser(req, res);
});

app.put('/change-password/:id', (req, res) => {
    changePassword(req, res);
});

app.post('/fibonacci-series', (req, res) => {
    fibonacciSeries(req, res);
});

app.listen(port, () => {
    console.log(`Server is Running .... http://localhost:${port}`)
});