import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

// cors and cookie are used after app is made

app.use(cors({
    // configuring cors with production level 
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({
    // we are not using body-parser because it is not required in newer version
    // we will be seeing middlewares such as multer 
    limit:"10kb"
}))

// configuration for url encoding
app.use(express.urlencoded({
    extended:true,
    limit:"10kb",
}))
// for public folder
app.use(express.static("public"))
// for accessing and setting cookies of user 
app.use(cookieParser())

export {app}