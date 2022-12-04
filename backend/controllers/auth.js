const bcrypt = require('bcrypt')
const User = require("../models/userModel")

const errorHandle = (res, errorMessage) => {
    const errorStatus = res.statusCode !== 200 ? res.statusCode : 500

    res.status(errorStatus).json({ message: errorMessage })
}

exports.findUser = async (req, res) => {
    const { username } = req.params
    try {
        if (!username) {
            res.status(400)
            throw new Error("Username is required")
        }

        const user = await User.findOne({ username })

        if(user) {
            res.status(403)
            throw new Error("User with this name already exists!")
        }
        
        res.status(200).json({ userExists: false })
    } catch (error) {
        errorHandle(res, error.message)
    }
}

exports.createUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            res.status(400)
            throw new Error("Username or password are required")
        }



        const user = await User.create({
            username,
            password: await bcrypt.hash(password, 10)
        })

        res.json({
            success: true,
            userId: user._id,
            user: user.username
        })
    } catch (error) {
        // const statusCode = res.statusCode
        errorHandle(res, error.message)
    }

}