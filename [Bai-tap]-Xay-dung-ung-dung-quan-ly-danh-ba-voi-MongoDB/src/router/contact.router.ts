import express from 'express';
const router = express.Router();
import multer from 'multer';
const upload = multer();
import {contact} from '../schemas/contact.model';

router.get('/create', upload.none(), (req, res) => {
    res.render('create')
});
router.post('/create', upload.none(), (req, res) => {
    const {name, phoneNumber} = req.body;
    const Contact = new contact({name, phoneNumber});
    Contact.save().then(() => {
        res.redirect('/contact/list')
    }).catch(err => {
        res.render('error')
    });
});

router.get('/list', (req, res) => {
    let customers = contact.find().then((user) => {
        console.log(user);
        res.render('contactList', {users: user})
    }).catch((err) => {
        res.render('error')
    })
})


export {router}