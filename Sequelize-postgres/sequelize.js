const express = require('express')
const  {Sequelize} = require('sequelize')

const sequelize = new Sequelize('todoss', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;




// const app = express()

// app.listen(3000, ()=>{
//     console.log('Server started at 30000');
// })