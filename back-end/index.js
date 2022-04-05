const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { PASSWORD, SECRET } = require('./config')

//To use nodemailer go to the link https://myaccount.google.com/lesssecureapps and allow less secure apps
//Then go to the bottom of the file and Enter your google email and an email to receive the message
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: '', //Enter your google email
        pass: PASSWORD //Open config.js and enter your google password
    }
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vuejs_blog_task'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Connected to mysql database!');
})

const app = express();
app.use(cors({
    origin: '*'
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/blog', (req, res) => {    
    let sql = 'SELECT * FROM posts ORDER BY id DESC';    
    let query = db.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        res.send(result)
    })
});

app.get('/blog/post-details/:id', (req, res) => { 
    let data = req.params.id;   
    let sql = 'SELECT * FROM posts_content WHERE post_id = ?';
    let query = db.query(sql, data, (err, result) => {
        if(err){
            console.log(err);
        }
        res.send(result)
    })
});

app.post('/register', (req, res)=>{
    let newUser = {
        email: req.body.email,
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password, 10)
    }
    let sql = 'INSERT INTO users SET ?';
    let query = db.query(sql, newUser, (err, result) => {
        if(err){      
            return res.status(400).json({    
                message: 'Email is already in use'
              })
        }
        return res.status(200).json({
            message: 'Signup success'
          })
    })
});

app.post('/login', (req, res)=>{
    let user = {
        email: req.body.email,
        password: req.body.password
    }
    let sql = 'SELECT * FROM users WHERE email = ?';
    let query = db.query(sql, user.email, (err, result) => {
        if(err){
            return res.status(500).json({
                message: 'Server error'
              })
        }     
        let dbUser = result[0];
        if(!dbUser){
            return res.status(401).json({
                message: 'Invalid credentials'
              })
        }
        if (!bcrypt.compareSync(user.password, dbUser.password)) {
            return res.status(401).json({
                message: 'Invalid credentials'
            })
        }
        let token = jwt.sign({ userId: dbUser.id}, SECRET);
        return res.status(200).json({
            message: 'Login sucess',
            token: token,
            username: dbUser.name
        })
    })
});

app.get('/user', (req, res, next) => {
    let token = req.headers.token;
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {            
            return res.status(401).json({
                message: 'unauthorized'
            })
        }
        let sql = 'SELECT * FROM users WHERE id = ?';
        let query = db.query(sql, decoded.userId, (err, result) =>{
            if (err) {
                return console.log(err)
            }
            return res.status(200).json({
                user: {
                    username: result[0].name
                }
            })
        })
        
    })
})

app.post('/contact', (req, res) => {
    let mailOptionns = {
        from:'', //Enter your email
        to:'', //Enter an email to receive the message
        subject:'Sending email using node',
        text:`From: ${req.body.name} \n${req.body.message}`
    }
    if(!req.body.name || !req.body.message){
        res.send('Fields can not be empty')
        return
    }
    transporter.sendMail(mailOptionns, function(err, info){
        if(err){
            console.log(err);
            res.send(err.message);
        }
        else{
            console.log('Email send: ' + info.response);
            res.send('Created')
        }
    })    
});




app.listen('3000', () => {
    console.log('Server is listening on port 3000');
});
