const express = require("express");
// const req = require("express/lib/request");
// const router = require("express").Router();
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')


const app = express();
const PORT = process.env.PORT || 3001; 

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// API ROUTES
app.post('/api/notes', (req, res) => {
    res.json('post')

})

app.use('/api', apiRoutes);

// HTML ROUTES
app.use('/', htmlRoutes);


