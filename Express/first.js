const express = require('express')
const app = express();

app.get('/', (req,res)=> {
    res.send('Server is ready to serve');
});

app.get('/about', (req,res)=> {
    res.send('This is about page');
});

const port = 3000;

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});
