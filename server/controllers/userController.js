


import UserModel from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

//Register Use : /api/user/register
export const register = async (req, res)=>{
    try{
        const {name, email, password}= req.body;

        if(!name || !email || !password){
            return res.json({success: false, message: 'Missing Details'})
        }

        const existingUser = await UserModel.findOne({email})

        if(existingUser)
            return res.json({success:false, message: 'User Already Exist'})

        const hasedPassword = await bcrypt.hash(password, 10)
        const user = UserModel.create({name, email, password:hasedPassword})

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:'7d'})

        res.cookie('token', token, {
            httpOnly: true, // Prevent JavaScript to access cookie
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite:process.env.NODE_ENV === 'production' ? 'none': 'strict', // CSRF production
            maxAge: 7 * 24 * 60 * 1000, // Cookie expriation time 
        })

        return res.json({success: true, user: {email:user.email, name: user.name}})

    }catch(error){
        console.log(error.message);
        res.json({success:false, message:error.message})
    }
}

// Login User : /api/user/login

export const login = async (req, res) =>{
    try{
        const {email, password}= req.body;
        if(!email || !password)
            return res.json({success:false, message:'Email and password are required'})
        const user = await UserModel.findOne({email})

        if(!user){
            return res.json({success: false, message:'Invalid email or password'}) 
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch)
             return res.json({success: false, message:'Invalid email or password'}) 

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:'7d'})

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite:process.env.NODE_ENV === 'production' ? 'none': 'strict', 
            maxAge: 7 * 24 * 60 * 1000, 
        }) 
        return res.json({success: true, user: {email:user.email, name: user.name}})
    }catch(error){
        console.log(error.message);
        res.json({success:false, message:error.message})
    }
}

// Check Auth : /api/user/is-auth

export const isAuth = async(req, res)=>{
    try{
        const {userId} = req.body;
        const user = await UserModel.findById(userId).select("-passward")

        return res.json({success:true, user})

    }catch(error){
        console.log(error.message);
        res.json({success:false, message:error.message})
    }
}

// Logout User : /api/user/logout

export const logout = async (req, res)=>{
    try{
        res.cookie("token",{
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production'? 'none': 'strict',
        })
        return res.json({success:true, message:"Logged Out"})
    }catch(error){
        onsole.log(error.message);
        res.json({success:false, message:error.message})
    }
}