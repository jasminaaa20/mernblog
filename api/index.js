const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const app = express();
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const secret = 'afafawrfwrggvfewefew';
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://mernblog:DNcgaa3tz0Fdgo21@cluster0.mkhosba.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try{
        const userDoc = await User.create({ 
            username, 
            password:bcrypt.hashSync(password, salt)
         });
        res.json(userDoc);
    } catch(e) {
        res.status(400).json(e);
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        //logged in
        jwt.sign({username, id:userDoc._id,}, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            });
        });
        // res.json();

    } else {
        res.status(400).json('Login failed');
    }
});

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok');
})

app.listen(4000);

// mongosh "mongodb+srv://cluster0.mkhosba.mongodb.net/" --apiVersion 1 --username mernblog
// DNcgaa3tz0Fdgo21
// mernblog
