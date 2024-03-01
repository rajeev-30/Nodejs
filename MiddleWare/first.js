const express = require('express');
const app = express();
const d = new Date();

app.use((req, res, next) => {
    console.log('Time:', d)
    next();
})

app.get('/', (req, res) => {
    res.end("Hello world!");
})

const port = 4000;
app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});
