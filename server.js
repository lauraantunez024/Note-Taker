const express = require("express");
const app = express();


const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')


const PORT = process.env.PORT || 3001; 

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));




app.use('/api', apiRoutes);

// HTML ROUTES
app.use('/', htmlRoutes);


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
