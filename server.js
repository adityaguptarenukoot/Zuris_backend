import express from 'express';
import 'dotenv/config';
import cors from 'cors'
import formRouter from './routes/form.route.js';

const app = express();
const PORT = 4000;


const allowedOrigins = [
  'http://localhost:3000',              
  'https://zuris-frontend.vercel.app',  
  'https://zurix.co.in',               
  'http://zurix.co.in',                
  'https://www.zurix.co.in'             
];

app.use(cors({
  origin: function(origin, callback) {
    
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'CORS policy does not allow access from this origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('API is running...');
})

app.use("/api/form/", formRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});