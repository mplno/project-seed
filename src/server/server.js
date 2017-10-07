import express from 'express'

let app = express()

import serveStatic  from 'serve-static'
import bodyParser from 'body-parser'
import path from 'path'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(serveStatic(path.join(__dirname, '../client')))

import asyncRoute from './utils/async-route.js'

import { fetch } from './routes/data'
app.get('/api/data', asyncRoute(fetch))

import { causeError } from './routes/sample-error'
app.get('/api/causeError', causeError)

app.all(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'index.html'))
})

app.use((err, req, res, next) => {
  res.status(500).send(err.message)
})

export default app
