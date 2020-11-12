const {Schema, model} = require('mongoose')

const schema = new Schema({
    category: {type: String},
    under_category: {type: String, required: true},
    lesson: {type: String, required: true}
});

module.exports = model('UnderCategory', schema);
