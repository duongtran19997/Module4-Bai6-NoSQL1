import express from 'express';

const router = express.Router();
import {User} from '../schema/customer.model'
import multer from 'multer';

const upload = multer();

router.get('/create', upload.none(), (req, res) => {
    res.render('create')
});
router.post('/create', upload.none(), (req, res) => {
    const {name, code, email, phoneNumber} = req.body;
    const user = new User({name, code, email, phoneNumber});
    user.save().then(() => {
        res.redirect('/customers/list')
    }).catch(err => {
        res.render('error')
    });
});

router.get('/list', (req, res) => {
    let customers = User.find().then((user) => {
        console.log(user);
        res.render('listCustomer', {users: user})
    }).catch((err) => {
        res.render('error')
    })
})

router.get('/delete', (req, res) => {
    let userId = req.query.id;
    console.log(userId);
    User.findOneAndRemove({_id:req.query.id}).then(() => {
        res.redirect('/customers/list')
    }).catch(err => {
        res.render('error')
    })
});

router.get('/update', (req, res) => {
    let userId = req.query.id;
    console.log(userId);
    User.findOne({_id:userId}).then((user) => {
        console.log(user);
        res.render('update',{user:user});
    }).catch((err) => {
        res.render('error')
    });
});

router.post('/update',upload.none(),(req, res) => {
    let  {_id,name,code,email,phoneNumber} = req.body;
    User.findOneAndUpdate({_id:_id},{name,code,email,phoneNumber}).then(() => {
        res.redirect('/customers/list')
    }).catch(() => {
        res.render('error')
    })
});

export default router;