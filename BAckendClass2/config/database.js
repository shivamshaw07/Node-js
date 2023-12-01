import mongoose from "mongoose"; //here we get the instance mongoose which will connect the database and our application
import {config as configDotenv } from "dotenv";
configDotenv()
//how the process object got feed env file?
/*
1: Security: Sensitive information like API keys, passwords, and database connection strings should not be hard-coded in your source code, as it can be a security risk if your code is exposed.

2: Configuration Management: It allows you to easily change the configuration of your application without modifying the code. You can have different .env files for development, testing, and production environments.

3: Collaboration: It makes it easier for teams to work on the same codebase without exposing their individual configurations.

4: Portability: You can share your code with others without exposing your personal configuration settings.

By using dotenv or a similar library to load environment variables from a .env file, you can
 manage your application's configuration in a more organized and secure way.*/ 

const dbconnect = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/shivadb',{
        useNewUrlParser:true,
        useUnifiedTopology:true // yaha pr hume ek promise return hoga
    }) // isiliye .then and .catch use karenge
    .then(()=> console.log("Dbconnected"))
    .catch((err) => {
        console.error('Error connecting to the database:', err);
        console.log('Error aya db mai');
        process.exit(1);
    });
}

export default dbconnect