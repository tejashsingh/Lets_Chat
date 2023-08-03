const express=require("express");
const { chats }=require("./data/data");
const dotenv=require("dotenv");
const connectDB = require("./config/db");
const colors= require("colors");
const userRoutes=require('./Routes/userRoutes')
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const PORT=process.env.PORT || 5000;
const app=express();

dotenv.config();
connectDB();


app.use(express.json());  //to accept json data





app.get("/",(req,res)=>{
    res.send("API is running Successfully");
})
app.use("/api/user",userRoutes)

// app.get("/api/chat",userRoutes)

app.get("/api/chat/:id",(req,res)=>{
    const singleChat= chats.find((c)=> c._id===req.params.id);
    res.send(singleChat);
})

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT,console.log(`Server running at port ${PORT}`.yellow.bold));
