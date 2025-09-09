import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import app from "./app.js"; 




dotenv.config();





connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`connect ho gya bhai 👌 ${process.env.PORT}`)
        
        
    } )
})
.catch((err)=>{
    console.log("mongo db connection failed !! " , err);
})










// const connectDB(){}
// connectDB()




// best way for begnner



// import express from "express"

// const app = express()


// /*
// ( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error" , (error)=>{
//             console.log("error:", error)
//             throw error
//         })

//         app.listen(process.env.PORT) , ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         }
//     } catch (error) {
//         console.log("error:", error)
//         throw err
//     }
// })()
// 