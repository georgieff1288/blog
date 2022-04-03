const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

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




app.listen('3000', () => {
    console.log('Server is listening on port 3000');
});
