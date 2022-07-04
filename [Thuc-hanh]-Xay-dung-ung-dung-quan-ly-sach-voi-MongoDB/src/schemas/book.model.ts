
import {Schema, model} from "mongoose";

interface Ibook{
    title: string;
    description: string;
    author: string;
};

const bookSchema = new Schema<Ibook>({
    title:String,
    description:String,
    author:String,
})

const Book = model<Ibook>('Book',bookSchema);

export {Book}