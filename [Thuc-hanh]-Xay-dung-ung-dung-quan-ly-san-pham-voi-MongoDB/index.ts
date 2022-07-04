import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
import productRoutes from './src/router/product.router';
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views','./src/views');
const DB_URL = 'mongodb+srv://root:Password@cluster0.l1wd2.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB_URL).then(()=>{
    console.log('DB connected')
}).catch(err =>{
    console.log('Error connecting',err.message)});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/product', productRoutes);


app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
});