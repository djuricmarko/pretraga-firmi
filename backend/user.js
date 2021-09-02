const mongoose = require("mongoose")
const { Schema } = mongoose

const user = new Schema({
    username: String,
    password: String,
})

module.exports = mongoose.model("User", user)
