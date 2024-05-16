const express = require("express")
const morgan = require('morgan');
const app = express();

//parse requests of content type - application/json
app.use(express.json());
// Parse requests of content type- application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}));

//Log HTTP request to the console
app.use(morgan('dev'));

const Sequelize = require('sequelize');

// Connection to database
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

// Testing connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// simple route

app.get("/", (req,res) => {
    res.json({message: "Welcome to sequelize application."});
});

// Using routes and controllers
const articleRouter = require('./routes/article');
const authorRouter = require('./routes/authors');

// Mounting routers to specific base paths
app.use('/', articleRouter); // Mounting articleRouter to the base path
app.use('/author', authorRouter); // Mounting authorRouter to the '/author' path
app.use('/admin/articles', articleRouter); // Mounting articleRouter to the '/admin/articles' path


// listen requests
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});