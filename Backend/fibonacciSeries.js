const DBClient = require('./DBClient')
const id = 1
function fibonacciSeries(req, res) {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let len = req.body.len;
    const first = num1;
    const second = num2;
    let result = [];
    let next = 0;
    console.log(num1, num2);
    for (let i = 0; i < len; i++) {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        result.push(next);
    }
    console.log(result);
    res.json(result);
}

module.exports = { fibonacciSeries };