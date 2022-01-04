import BlogModel from '../model/blog.model';
import * as express from 'express'

export function createBlog(request: express.Request, response: express.Response) {
    const newBlog = new BlogModel(request.body);
    newBlog.save().then((doc) => {
        response.status(200).json({
            message : "Success",
            data : doc
        })
    })
    .catch((err) => {
        response.status(400).json({
            message : "Fail",
            data : null
        })
    });
}

export async function getAllBlog(req:express.Request, res:express.Response) {
    const allBlog = await BlogModel.find({})
    if(!allBlog){
        res.status(400).json({
            message : "Fail",
            data : null
        })
    }
    res.status(200).json({
        message : "Success",
        data : allBlog
    })
}