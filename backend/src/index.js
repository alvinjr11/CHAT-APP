import express from "express"
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'



import authRouter from "./routes/authroute.js"
import messageRouter from './routes/messageRoutes.js'

import { connectDB } from "./lib/db.js"
import { app,server } from "./lib/socket.js"

dotenv.config()

const PORT=process.env.PORT
// const __dirname = path.resolve()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"https://chat-app-dusky-nine.vercel.app",
    credentials:true,
}))

app.use("/api/auth",authRouter)
app.use("/api/messages",messageRouter)

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
//     app.get("*", (req, res) => {
//       res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//     });
//   }

server.listen(PORT,()=>{
    console.log("server is running on the PORT :"+ PORT);
    connectDB()
})