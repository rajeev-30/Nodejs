//Q3 -  implement a bsic login page using htmk for web applications and
// serve this login page using expreq on the /login route
// create a middleware finctin for authentication in express which validates uer credentials against hardcode database
// define a protected route '/profile' that require authentication to access if aithenticated isTypedArray, it should display a personalized welcomd MessageChannel
// Additionally, set up a public route '/' that doesn't require authentication, displaying a generic welcome message
// ensure that the authentication middleware restricts access to the /profile route based on the provided credentials.
const express = require('express')
const fs = require('fs')
const app = express();

app.use(express.urlencoded({extended: true}));
app.use('profile',(req,res,next)=>{

});


app.get('/login', (req,res)=> {
    const readStream = fs.createReadStream('MiddleWare/form2.html');
    readStream.pipe(res);
})

app.post('/submit',(req,res)=>{
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    fs.writeFile('example.txt', name,email, (err) => {
        if (err) {
            console.error(err);
            res.send("check console");
        } else {
            res.send("data added successfully");
        }
    }); 
});  

const port = 4000;

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});



