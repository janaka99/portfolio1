const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.use(express.static(path.join(__dirname,'/public')));


app.get('/', (req, res)=>{
    res.render('home')
});

app.get('/web-develop-projects', (req, res)=>{
    res.render('dynamic/webdev')
})

app.get('/app-develop-projects', (req, res)=>{
    res.render('dynamic/webdev')
})


app.listen(process.env.PORT || 5000);