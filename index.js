// Es Module
import express from 'express'
import path from 'path'
import {config} from 'dotenv'
config()
const app = express()
const port = +process.env.PORT || 4000
app.use(express.static('./static')) //specification of app.use() allows the server to support a static file / include middelware 

app.get('/', (req, res) => {
    res.status(200).sendFile(
        path.resolve('./static/index.html'))
}) 
app.get('/about', (req, res) => {
    res.status(200).sendFile(
        path.resolve('./static/about.html')) // path. resolve is used to resolve a sequence of path segments to an absolute path. 
})
app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
}) 
