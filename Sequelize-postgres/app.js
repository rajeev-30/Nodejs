const express = require('express');
const sequelize = require('./sequelize');
const Todo = require('./models/Todo');

const app = express();
const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log('Server running at 3000');
});



sequelize.authenticate().then(()=>{
    console.log( 'Connection has been established successfully.' );
    return sequelize.sync({alter: true});
}).then(()=>{
    console.log('All models were synchronized successfully.');
}).catch((error)=>{
    console.log('Unable to connect to server', error);
})

app.use(express.json());

app.get('/', (req, res) => {
    Todo.findAll().then((todos)=>{
        res.json(todos);
    }).catch((error)=>{
        res.status(500).json({error: 'Internal server error'}, error);
    })
})

app.post('/insert', (req, res)=>{
    const {title, completed} = req.body;
    Todo.create({title, completed}).then((todo)=>{
        res.status(201).json(todo);
    }).catch((error)=>{
        res.status(400).json({error: 'Bad request'}, error)
    })
})