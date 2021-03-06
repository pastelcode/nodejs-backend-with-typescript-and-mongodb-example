import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// app.get('/', (_req, res) => res.send('Hola a todos desde Heroku'))
app.use(express.static('public'))

export default app
