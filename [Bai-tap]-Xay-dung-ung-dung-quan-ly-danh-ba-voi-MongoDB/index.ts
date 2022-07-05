import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app = express();
const PORT = 3000;
import {router} from './src/router/contact.router'

mongoose.connect('mongodb+srv://root:Password@cluster0.l1wd2.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('DB Connection');
}).catch((err)=>{
    console.log('Error connecting');
});

app.set('views','./src/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/contact',router);

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
});