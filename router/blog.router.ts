import {Router} from 'express';
import {createBlog, getAllBlog} from '../controller/blog.controller'
const routerBlog = Router()


routerBlog.get('/', getAllBlog)
routerBlog.post('/', createBlog)


export default routerBlog