import express from 'express';
import connectDB from './config/connectDB.js';
import 'dotenv/config';
import cors from 'cors'
import formRouter from './routes/form.route.js';

const app = express();
const PORT = 4000;

// connectDB();

app.use(express.json());
app.use(cors());




app.use("/api/form/", formRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});