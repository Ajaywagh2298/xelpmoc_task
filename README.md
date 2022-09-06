# Back_End
All API Details

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install folder or Use follow command.

```bash
npm install express
```
```bash
npm install cors
```
```bash
npm install nodemon
```
```bash
npm install mysql2
```
```bash
npm install body-parser
```
```bash
npm install axios
```
## or
```bash
npm install
```
# Usage
##Run Backend Folder

```bash
node Server.js
```
OR
```bash
nodemon Server.js
```
#API TABLE
| Method | URL                                                     | Parameters                                            |
|--------|---------------------------------------------------------|-------------------------------------------------------|
| GET    | http://localhost:9000/login-user    | { bodyParams :{ user_name, password} } |
| POST   | http://localhost:9000/users                          | body: { full_name, user_name, password, email, mobile_number } }                                                  |
| GET  | localhost:9000/updateContact/id?data_store=:data_store  | { body : {num1, num2, len} } |


# Front_end
All API Details

## Installation

Use the package manager [npm](https://www.npmjs.com/) and [React js](https://reactjs.org/) to install folder or Use follow command.


```bash
npm install
```

Usage
##Run Backend Folder

```bash
npm start
```
OR
```bash
npm run
```
OR
```bash
npm run build
```
#API TABLE
| Method | URL                                                     | Description                                           |
|--------|---------------------------------------------------------|-------------------------------------------------------|
| GET    |  http://localhost:3000/  | Login Page API |
| POST   | http://localhost:3000/register                         |   Registration Page API                                           |
| GET  | http://localhost:3000/calculator  | Fibonacci Series API |
