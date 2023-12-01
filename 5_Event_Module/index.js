
//creat an event emitter instance
const EventEmitter = require("events")
const event = new EventEmitter;

// //1. register one call will execute only once
// event.on("sayHii",()=>console.log("Shivam"))

// //2. Register a couple of callback functions
// event.on("sayHii",()=>console.log("Shivam"))
// event.on("sayHii",()=>console.log("kumar"))
// event.on("sayHii",()=>console.log("shaw"))

// //event without parameter
// event.emit("sayHii")


//3. Register for the events for with callback para meters
event.on("sayHello",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit("sayHello",200,"ok")
