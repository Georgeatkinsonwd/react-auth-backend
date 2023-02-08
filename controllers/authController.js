const User = require('../models/User')
const bcrypt = require('bcryptjs')

const salt = bcrypt.genSaltSync(10);


module.exports = {
    registerUser: async (req,res) => {
        const {username,password} = req.body
        
        try {
            const userDoc = await User.create({
                username,
                password: bcrypt.hashSync(password,salt)
            });
            console.log('success')
            res.redirect('/')
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)
        }
    }
}