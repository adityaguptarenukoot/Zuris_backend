import express from 'express';
import connectDB from './config/connectDB.js';
import 'dotenv/config';
import cors from 'cors'
import formRouter from './routes/form.route.js';

const app = express();
const PORT = 4000;

// connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000", credentials: true }));


app.get('/', (req, res) => {
  res.send('API is running...');
})

app.use("/api/form/", formRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});