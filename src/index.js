import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import mongoose from 'mongoose'
import routes from './routes'

dotenv.config()

const app = express()

const { PORT } = process.env

mongoose.connect(process.env.DATABASE_KEY)

app.use(express.json())
app.use(cors())
app.use('/', routes)

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(PORT, console.log(`Api Rodando on PORT: ${PORT} `))

export default app
