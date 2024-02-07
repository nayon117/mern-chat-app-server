import express from 'express';
import dotenv from 'dotenv'
const app = express()

dotenv.config()
const port = process.env.PORT ||5000
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';


app.use(express.json());

app.use('/api/auth', authRoutes)


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
    connectToMongoDB()
  console.log(`Example app listening on port ${port}`)
})