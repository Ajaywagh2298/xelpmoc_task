const DBClient = require('./DBClient')
const {query} = require("express");
function postUser(request, response) {
    const full_name = request.body.full_name;
    const user_name = request.body.user_name;
    const password = request.body.password;
    const email = request.body.email;
    const mobile_number = request.body.mobile_number;

    const user = `INSERT INTO users (id, full_name, user_name, password, email, mobile_number) VALUES (null, '${full_name}', '${user_name}', '${password}', '${email}', '${mobile_number}')`;

    DBClient.query(`SELECT * FROM users WHERE user_name = '${user_name}' OR email = '${email}' OR mobile_number = '${mobile_number}'`, (err, result) => {
        if (err) {
            console.log(err, 'DB_Error')
        }
        if (result.length > 0) {
            response.send({
                status: false,
                message: 'User Already Exists'
            })
        } else {
            DBClient.query(user, (err, result) => {
                    if (err) {
                        console.log(err, 'DB_Error')
                    }
                    response.send({
                        status: true,
                        message: 'User Created Successfully',
                        body: result
                    })
                    console.log(user)
                }
            )
        }
    })
}

function getLoginUser(request, response) {
    const user_name = request.body.user_name;
    const password = request.body.password;

    const user = `SELECT * FROM users WHERE user_name = '${user_name}' AND password = '${password}'`;
console.log(user)
    DBClient.query(user, (err, result) => {
        if (err) {
            console.log(err, 'DB_Error')
        }
        if (result.length > 0) {
            response.send({
                status: true,
                message: 'User Login Successfully'
            })
            console.log(`User login successfully ${result}`)
        } else {
            response.send({
                status: false,
                message: 'User Not Found'
            })
        }
    })
}

function deleteUser(request, response) {
    const id = request.params.id;

    const user = `DELETE FROM users WHERE id = '${id}'`;

    DBClient.query(user, (err, result) => {
        if (err) {
            console.log(err, 'DB_Error')
        }
        response.send({
            status: true,
            message: 'User Deleted Successfully'
        })
    })
}

function updateUser(request, response) {
    const id = request.params.id;
    const user_name = request.body.user_name;
    const email = request.body.email;
    const mobile_number = request.body.mobile_number;

    const user = `UPDATE users SET user_name = '${user_name}', email = '${email}', mobile_number = '${mobile_number}' WHERE id = '${id}'`;

    DBClient.query(`SELECT * FROM users WHERE (user_name = '${user_name}' OR email = '${email}' OR mobile_number = '${mobile_number}') AND id != '${id}'`,(err, result) => {
        if (err) {
            console.log(err, 'DB_Error')
        }
        if (result.length > 0) {
            response.send({
                status: false,
                message: 'User Already Exists'
            })
        } else {
            DBClient.query(user, (err, result) => {
                if (err) {
                    console.log(err, 'DB_Error')
                }
                response.send({
                    status: true,
                    message: 'User Updated Successfully'
                })
            })
        }
    })
}
function changePassword(request, response) {
    const id = request.params.id;
    const password = request.body.password;

    const user = `UPDATE users SET password = '${password}' WHERE id = '${id}'`;
    DBClient.query(`SELECT * FROM users WHERE password='${password}' AND id= '${id}'`, (err, result) => {
        if (err) {
            console.log(err, 'DB_Error')
        }
        if (result.length > 0) {
            response.send({
                status: false,
                message: 'Old Password and New Password are Same'
            })
        } else {
            DBClient.query(user, (err, result) => {
                if (err) {
                    console.log(err, 'DB_Error')
                }
                response.send({
                    status: true,
                    message: 'Password Changed Successfully'
                })
            })
        }
    });
}
module.exports = { postUser , getLoginUser , deleteUser, updateUser , changePassword}