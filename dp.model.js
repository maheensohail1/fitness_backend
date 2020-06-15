const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DP = new Schema({
    uid: {
        type: String
    },
    name: {
        type: String
    },
    about: {
        type: String
    },
    duration: {
        type: String
    },
    slevel: {
        type: String
    },
    whattoeat: {
        type: String
    },
    whattoavoid: {
        type: String
    },
    images: {
        type: Array,
        default: []
    }
    
    
});

module.exports = mongoose.model('DP', DP);