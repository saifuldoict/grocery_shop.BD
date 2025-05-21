


import UserModel from "../models/user";
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