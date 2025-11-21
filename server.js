import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import formRoutes from './routes/form.route.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/form', formRoutes);

app.get('/', (req, res) => {
  res.send('ViconAI backend running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
