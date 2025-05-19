import cookieParser from 'cookie-parser';
import express from 'express'
import cors from 'cors'
const app = express();

const port = process.env.PORT || 4000;

// Allow multiple orgins
const  allowedOrigins= ['http://localhost:5173']

//Middlewar configuration

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}))

app.get('/', (req, res)=> res.send("API is Working"))

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})