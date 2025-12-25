import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import formRoutes from './routes/formRoutes.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// CORS Configuration for multiple domains
const allowedOrigins = [
  'https://viconai.com',
  'https://www.viconai.com',
  'https://zuris-frontend.vercel.app',
  'http://localhost:3000',
  'http://localhost:5173'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/form', formRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: 'ViconAI Backend Server is running!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Root route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to ViconAI Backend API',
    endpoints: {
      health: 'GET /health',
      submitForm: 'POST /api/form/submit'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Export for Vercel serverless
export default app;

// Start server for local development only
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 8000;
  const server = app.listen(PORT, () => {
    console.log(`\n🚀 ViconAI Backend Server running on port ${PORT}`);
    console.log(`📧 Email service: ${process.env.SMTP_HOST}`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`\n✅ Server is ready to accept requests`);
    console.log(`   Health: http://localhost:${PORT}/health`);
    console.log(`   API: http://localhost:${PORT}/api/form/submit\n`);
  });

  // Handle server errors
  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`❌ Port ${PORT} is already in use`);
      process.exit(1);
    } else {
      console.error('❌ Server error:', error);
    }
  });

  // Graceful shutdown
  process.on('SIGTERM', () => {
    console.log('👋 SIGTERM received, shutting down gracefully');
    server.close(() => {
      console.log('✅ Server closed');
      process.exit(0);
    });
  });
}
