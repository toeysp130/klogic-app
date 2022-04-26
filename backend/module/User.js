const mongoose = require("mongoose");
const {check,validationResult} = require(' /check')
const UserSchema = new mongoose.Schema({
  name: {
    type: String, // กำหนดประเภทของข้อมูล
    required: true, // ใส่เพื่อรีเควสค่านั้น
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = User = mongoose.model("user", UserSchema);
