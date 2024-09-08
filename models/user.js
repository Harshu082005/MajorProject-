const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// Define the schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
      
    }
});

// Apply the passport-local-mongoose plugin
userSchema.plugin(passportLocalMongoose);

// Create and export the model
const User = mongoose.model('User', userSchema);
module.exports = User;
