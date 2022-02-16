const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoastMeSchema = new Schema ({
    name: String,
    title: String,
    location: String,
});

module.exports = mongoose.model('RoastMe', RoastMeSchema);