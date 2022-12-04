const express = require("express")
const router = express.Router()
const authControllers = require("../controllers/auth")

router.post("/register", authControllers.createUser)
router.get("/user-exists/:username", authControllers.findUser)
module.exports = router