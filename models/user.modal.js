const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id_user:{
        type:String
    },
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    img:{
        type:String
    },
    subject:{
        type:Array,
        default:[]
    }
} , {
    collection:'users'
});
module.exports = mongoose.model("Users" , userSchema);
