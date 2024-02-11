const http = require("http");

const EventEmmiter = require("events");
const myEmmiter = new EventEmmiter();

  
// myEmmiter.on("firstevent", (arg1, arg2) => {
//     console.log("Event Occured: ", arg1, arg2);
// });

// myEmmiter.once("firstevent", (arg1, arg2) => {
//     console.log("Event will be executed only once: ", arg1, arg2);
// }); 

const eventHandler = (arg1,arg2) => {
    console.log("Event occured with arguments: ", arg1, arg2);
}


myEmmiter.on('firstevent', eventHandler);

myEmmiter.on('error', (error) => {
    console.error("Error occured: ", error);
})

// myEmmiter.emit('error', new error('This is an error'));

for(let i=0; i<5; i++) {
    if(i==2) {
        myEmmiter.removeListener('firstevent', eventHandler);
    }
    myEmmiter.emit("firstevent", "hello", "hii");
}


const dataObject = {
    name: "RK",
    age: 30
};

//Data object to jsonString
const jasonString = JSON.stringify(dataObject);
console.log("JSON Stringify Object: ", jasonString);


//Data jsonString to object
const jasonString2 = '{"name": "RK", "age": 30}';
const dataObject2 = JSON.parse(jasonString2);
console.log(dataObject2);


