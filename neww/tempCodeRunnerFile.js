myEmmiter.once("firstevent", (arg1, arg2) => {
    console.log("Event will be executed only once: ", arg1, arg2);
});