import express, { urlencoded } from "express";
import cors from "cors";
import ContactRoutes from './routes/ContactRoutes.js';
import {mongoose} from "mongoose";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();


app.use(cors({
  origin: 'https://maxmeli.vercel.app/',
  credentials: true
}));

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}));

//database connection
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Database Connected Successfully'))
.catch((err)=> console.log('Database not Connected' , err))


const PORT=process.env.PORT;

app.use("/api/contact", ContactRoutes);

app.get("/api/test", (req, res) => {
  res.json({ message: "Test API is working 🚀" });
});


app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
