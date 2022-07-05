import mongoose from 'mongoose';
import express from 'express';
import bodyParser from "body-parser";
import router from './src/router/customer.router';
const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://root:Password@cluster0.l1wd2.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('DB connected')
}).catch(err => {
    console.log('Error connecting to Mongo')
});

app.set('views','./src/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/customers',router);


app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
});