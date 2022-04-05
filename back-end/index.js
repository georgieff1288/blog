const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { PASSWORD } = require('./config')

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

app.post('/contact', (req, res) => {
    let mailOptionns = {
        from:'', //Enter your email
        to:'', //Enter an email to receive the message
        subject:'Sending email using node',
        text:`From: ${req.body.name} \n${req.body.message}`
    }
    transporter.sendMail(mailOptionns, function(err, info){
        if(err){
            console.log(err);
            res.send(err);
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
