const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    id_sub:{
        type:String
    },
    name:{
        type:String
    },
    credit:{
        type:String
    },
    section:{
        type:String
    }
} , {
    collection:'subject'
});

module.exports = mongoose.model("Subject" , subjectSchema);