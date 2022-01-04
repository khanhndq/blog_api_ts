import {Schema, model} from 'mongoose'

export interface Blog {
    name: String;
    email: String;
    password: String;
}

const schema = new Schema<Blog>({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String
    }
});

const BlogModel = model<Blog>('Blog',schema) ;

export default BlogModel;