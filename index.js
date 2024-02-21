import express from 'express';
import dotenv from 'dotenv'
import { app } from './socket/socket.js';
import cookieParser from 'cookie-parser'
dotenv.config()
const port = process.env.PORT ||5000
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';


app.use(express.json());
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
    connectToMongoDB()
  console.log(`Example app listening on port ${port}`)
})