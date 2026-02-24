import express from 'express';
import routes from './routes.js';
import requestLogger from './middlewares/requestLogger.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// Routes
app.use('/api', routes);

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

// 404 Not Found middleware
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware (must be last)
app.use(errorHandler);

export default app;
