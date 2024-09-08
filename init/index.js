// initDB.js
const mongoose = require('mongoose');
const Listing = require('../models/listing.js');
const initData = require('./data.js');
const User = require('../models/user.js');
const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';


async function initDB() {
    try {
        await Listing.deleteMany();
        console.log('Old data deleted');
        console.log('Inserting new data...');
        
        // Convert owner field to ObjectId
        const ObjectId = mongoose.Types.ObjectId;
        initData.data = initData.data.map((obj) => ({
            ...obj,
            owner: new ObjectId("66dafed2f2d5ec1a0adbcd80") // Convert string to ObjectId
        }));
        console.log("Mapped data:", initData.data);

        await Listing.insertMany(initData.data);
        console.log('Data was initialized');
    } catch (err) {
        console.error('Error initializing data:', err);
    }
}
async function main() {
    try {
        await mongoose.connect(MONGO_URL); // No need for deprecated options
        console.log('Connected to DB');
    } catch (err) {
        console.error('Error connecting to DB:', err);
    }
}


main().then(() => {
    initDB();
});
