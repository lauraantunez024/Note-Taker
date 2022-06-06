const express = require("express");
const htmlRoutes = require('./routes/htmlRoutes')
const app = express();
const PORT = process.env.PORT || 3001; 

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// API ROUTES


// HTML ROUTES
app.use('/', htmlRoutes);


