const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/restaurantRouter.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://barri:test@cluster0.rpou1.mongodb.net/gbc_fullstack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server")
})
.catch(err => {
    console.log('Could not connect to the database. Exiting now...', err)
    process.exit()
})

app.use(restaurantRouter)

const PORT = 3000
app.listen(PORT, () => { console.log(`Server is running at http://localhost:${PORT}`) })