const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const authRouter = require("./routes/auth")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", authRouter)


mongoose.connect("mongodb+srv://Node:BFrfGKWiG1IocauG@cluster0.ldu39.mongodb.net/todo", () => {
    app.listen(process.env.PORT, () => console.log(`server is running on ${process.env.PORT} port`))
})
