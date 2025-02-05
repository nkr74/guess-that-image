const mongoose = require('mongoose') 
const Schema = mongoose.Schema

// schema for image urls in db
const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true
    },
    quizIDs: {
        type: Array,
        required: true
    }
}, {collection: 'Categories'})

module.exports = mongoose.model('Category', categorySchema)