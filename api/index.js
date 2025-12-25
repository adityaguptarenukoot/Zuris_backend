import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import formRoutes from '../routes/formRoutes.js';

dotenv.config();

const app = express();

// CORS for production
const allowedOrigins = [
  'https://viconai.com',
  'https://www.viconai.com',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    return callback(new Error('CORS not allowed'), false);
  },
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/form', formRoutes);

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to ViconAI Backend API',
    endpoints: {
      health: '/health',
      submitForm: 'POST /api/form/submit'
    }
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: 'ViconAI Backend is running!',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// Export for Vercel serverless
export default app;
