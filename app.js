const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const routes = require('./routes');
require('./config/mongoose')


const app = express();


app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended:true }))
//static files
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(routes)


app.listen(3000, () =>{
    console.log('Server is now running on http://localhost:3000 ...')
})


