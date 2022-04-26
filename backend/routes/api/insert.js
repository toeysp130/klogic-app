const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
    const errors = validationResult(req) // ตรวจค่าปัญหาที่ส่งมา
    if(!errors.isEmpty()){ //หากมีปัญหา
    return res.status(400).json({
    errors : errors.array() // แสดงค่าที่พบปัญหาทั้งหมดออกมา
    })
    }
    res.send('User router') // หากส่งค่าสำเร็จจะแสดงส่วนนี้
});
module.exports = router;
