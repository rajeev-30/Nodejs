// const express = require('express');
import express from 'express'

const app = express();

app.get('/', (req,res)=> {
    res.send('Server is ready to serve');
});


//get a list of 5 jokes
app.get('/api/jokes',(req,res)=> {
    const jokes = [
        {
          id: 1,
          title: "The Programmer's Wife",
          content: "Why did the programmer's wife leave him? Because he didn't understand her needs. He was always null and void."
        },
        {
          id: 2,
          title: "Coffee",
          content: "Why do programmers prefer dark mode? Because light attracts bugs. Just like coffee attracts programmers."
        },
        {
          id: 3,
          title: "Infinite Loop",
          content: "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25."
        },
        {
          id: 4,
          title: "Debugging",
          content: "Why do programmers prefer dark mode? It's easier on the eyes when they're up all night debugging."
        },
        {
          id: 5,
          title: "Version Control",
          content: "Why do programmers always mix up Git and Mercurial? Because they both have branches, but Git makes them for different reasons."
        }
      ];
    res.send(jokes);
})

const port = process.eventNames.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});
