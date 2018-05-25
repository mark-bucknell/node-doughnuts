const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const doughnutSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a tasty doughnut name'
    },
    description: {
        type: String,
        trim: true
    },
    created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Doughnut', doughnutSchema);
