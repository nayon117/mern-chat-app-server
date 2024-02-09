import express from 'express';
import dotenv from 'dotenv'
const app = express()
import cookieParser from 'cookie-parser'
dotenv.config()
const port = process.env.PORT ||5000
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';


app.use(express.json());
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
    connectToMongoDB()
  console.log(`Example app listening on port ${port}`)
})