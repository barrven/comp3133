const express = require('express');
const mongoose = require('mongoose');

const restaurantRouter = require('./routes/restaurantRouter.js');
const app = express();
app.use(express.json()); // Make sure it comes back as json

const DB_URL = 'mongodb+srv://comp3133_prof:tQ3S5Xyckqi5eyq2@cluster0.rpou1.mongodb.net/gbc_fullstack?retryWrites=true&w=majority'

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
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