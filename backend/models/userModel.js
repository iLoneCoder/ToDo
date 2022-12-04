const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true })

module.exports = model("user", userSchema)