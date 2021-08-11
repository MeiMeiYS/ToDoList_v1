const express = require('express');
const router = express.Router();
const Todo = require('../../models/todo');

router.get('/', (req, res) =>{
    //get ALL todo data from backend
    Todo.find()
    .lean()
    .sort({ _id:'desc' })
    //asc排序 desc反序
    .then(todos => res.render('index', { todos: todos }))
    .catch(error => console.error(error))
})

module.exports = router;