const gravatar = require('gravatar')
const bcrypt = require('bcryptjs') 
const mongoose = require("mongoose");
const db = "mongodb://admin:CPVeas58888@node31351-klogic-app.app.ruk-com.cloud:11338/?authMechanism=DEFAULT";
const connectDB = async () => {
    useCreateIndex: true 
  try {
    // ใส่ await เพื่อให้รอจนเสร็จก่อน
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // ถ้าเชื่อมต่อสำเร็จให้โชว์
    console.log("Mongodb connect successfully");
  } catch (err) {
    // ถ้า มีปัญหา
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
