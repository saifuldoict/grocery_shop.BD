import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './config/Cloudinary.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/orderRoute.js';



// app config
 const port =process.env.PORT || 3000;
const app = express();

await connectDB()
await connectCloudinary()
// Allowed Multiple Origin
const allowedOrigins= ['http://localhost:5173']
// Middlewar configuration
app.use(express.json());

app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials:true}))



// api endpoint
app.get('/', (req, res) => {
    res.send('Database connected now!')
})

app.use('/api/user', userRouter);
app.use('/api/seller', sellerRouter)

app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)

app.use('/api/address', addressRouter)
app.use('/api/order', orderRouter)


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})