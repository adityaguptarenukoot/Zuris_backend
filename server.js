import express from 'express';
import connectDB from './config/connectDB.js';
import 'dotenv/config';
import cors from 'cors'
import formRouter from './routes/form.route.js';

const app = express();
const PORT = 4000;

// connectDB();


const allowedOrigins = ["http://localhost:4000", "https://zuris-backend.onrender.com"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());



app.use("/api/form/", formRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});