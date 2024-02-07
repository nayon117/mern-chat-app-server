import express from 'express';
import dotenv from 'dotenv'
const app = express()

dotenv.config()
const port = process.env.PORT ||5000
import authRoutes from './routes/auth.routes.js'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

 app.use('/api/auth', authRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})