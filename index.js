const express = require('express');
const path = require('path');
const mongoose = require('mongoose')

const app = express();

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/portfolio';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.use(express.static(path.join(__dirname,'/public')));


app.get('/', (req, res)=>{
    res.render('home')
});

app.get('/web-develop-projects', (req, res)=>{
    res.render('dynamic/webdev')
});

app.get('/app-develop-projects', (req, res)=>{
    res.render('dynamic/webdev')
});
 
app.get('/seo-projects', (req, res)=>{
    res.render('dynamic/webdev')
});




app.listen(process.env.PORT || 5000);