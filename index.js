const express = require("express")
const app = express();

//parse requests of content type - application/json
app.use(express.json());
// Parse requests of content type- application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}));

// simple route

app.get("/", (req,res) => {
    res.json({message: "Welcome to sequelize application."});
});

// listen requests
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});