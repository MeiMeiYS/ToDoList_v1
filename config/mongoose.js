const mongoose = require('mongoose');

//mongoDB & mongoose
mongoose.connect('mongodb://localhost/toDoList', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', () => {
    console.log('There is an error with Mongodb connection!')
})
db.once('open', () => {
    console.log('Mongodb is connected!')
})

module.exports = db;