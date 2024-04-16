const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todoss',
    password: 'root',
    port: 5432,
});
app.use(express.json());

app.get('/', (req, res) => {
    pool.query('SELECT * FROM todos', (error, result) => {
        if (error) {
            console.error('Error fetching todos', error);
            res.status(500).json({ error: 'Internal server error' });
        }
        else {
            res.json(result.rows);
        }
    });
});

const server = app.listen(3000, () => {
    console.log('Server running at 3000');
});

app.post('/insert', (req, res) => {
    const { title, completed } = req.body;
    pool.query('INSERT INTO todos (title, completed) VALUES ($1,$2)',
        [title, completed], (error) => {
            if (error) {
                console.error('Error Inserting todos', error);
                res.status(500).json({
                    error: 'Internal server error'
                });
            }
            else {
                res.status(201).json({
                    message: 'Todo created sucessfully'
                });
            }
        });
});

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    pool.query('UPDATE todos SET title=$1, completed=$2 WHERE id = $3',
        [title, completed, id], (error) => {
            if (error) {
                console.error('Error Updating todos', error);
                res.status(500).json({
                    error: 'Internal server error'
                });
            }
            else {
                res.status(201).json({
                    message: 'Todo updated sucessfully'
                });
            }
        });
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    pool.query(`DELETE FROM todos WHERE id = ${id}`,
        (error) => {
            if (error) {
                console.error('Error Deleting todos', error);
                res.status(500).json({
                    error: 'Internal server error'
                });
            }
            else {
                res.status(201).json({
                    message: 'Todo Deleted sucessfully'
                });
            }
        });
})