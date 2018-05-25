const fs = require('fs');

const mongoose = require('mongoose');
console.log(process.env.DATABASE_CONNECTION);
mongoose.connect(process.env.DATABASE_CONNECTION);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

const Doughnut = require('../models/doughnut');
const doughnuts = JSON.parse(fs.readFileSync(__dirname + '/doughnuts.json', 'utf-8'));

async function insertSampleData() {
    try {
        await Doughnut.insertMany(doughnuts);
        console.log('Inserted Doughnut sample data');
        process.exit();
    } catch(e) {
        console.log(e);
        process.exit();
    }
}

insertSampleData();