const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');

const app = express();
const APP_PORT = 8080;

nunjucks.configure(path.resolve(__dirname, '../views'), {
    autoescape: true,
    express: app
});
app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/about', (req, res) => {
    res.render('about/about.html');
});

app.listen(APP_PORT, () => {
    console.log(`App is running on ${APP_PORT} port.`)
})
