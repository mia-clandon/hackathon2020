const {Schema, model} = require('mongoose')

const schema = new Schema({
    category: {type: String, required: true},
    under_category: {type: String, required: true, unique: true}
});

module.exports = model('UnderCategory', schema);
