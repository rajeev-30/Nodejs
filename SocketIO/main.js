const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const { disconnect } = require('process');
const app = express();

const server = app.listen(3000, ()=>{
    console.log('Server started');
});

const io = socketIO(server);

app.use(express.static(path.join(__dirname)));

io.on('connection', (socket)=>{
    console.log("A user has connected");
    socket.on('chat msg',(msg, username)=>{
        io.emit('chat msg', msg, username);
    })

    socket.on('login',(username)=>{
        io.emit('login', username);
    })

    //Listen for join event when a user is logged in
    socket.on('join', username=>{
        socket.username = username;
        io.emit('join',{type: 'notification', message:`${username} has joined the chat`});
    })
    
    socket.on('disconnect', ()=>{
        console.log("A user has disconnected");
        if(socket.username){
            io.emit('join',{type: 'notification', message:`${username} has left the chat`});
        }
    })

})
