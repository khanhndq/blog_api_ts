import express,{Express, Request, Response, } from 'express'
import connect from './database/connectDB'
import router from './router/blog.router'

const PORT = 3000;
const URI_DB = 'mongodb+srv://sa:1@blog.0tqju.mongodb.net/Blog?retryWrites=true&w=majority'
const app: Express = express();
app.use(express.json())
connect(URI_DB)
app.use('/api/blog', router)

app.listen(PORT, () => {
    console.log(`Run port ${PORT}`)
})
