import { CORS_CONFIG } from './config'
import rootRouter from './routers'
import { GlobalErrorHandler, NotFoundHandler } from './util/http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Application } from 'express'
import helmet from 'helmet'
import path from 'path'

// App initialization
const app: Application = express()

app.set('etag', false)
app.set('trust proxy', true)

// Middlewares
app.use(helmet())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors(CORS_CONFIG))
app.use(express.static(path.join(__dirname, '../', 'public')))

// Router and API versioning
app.use('/api/v1', rootRouter)

// Not found handler
app.use(NotFoundHandler)

// Global error handler
app.use(GlobalErrorHandler)

export default app
