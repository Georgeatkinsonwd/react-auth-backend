const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const salt = bcrypt.genSaltSync(10);
secret = process.env.SECRET


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
    },
    loginUser: async(req,res) => {
        const {username,password} = req.body
        try {
            const userDoc = await User.findOne({username})
        const passwordCheck = bcrypt.compareSync(password, userDoc.password)
        
        if (passwordCheck){ 
            // logged in
            jwt.sign({username, id:userDoc._id}, secret, {}, (err,token) => {
                if(err) throw err
                res.cookie('token', token).json('ok')
            })
        }
        else {
            res.json('wrong password')
        }
        } catch (error) {
            console.error(error)
            
        }
        
    }
}