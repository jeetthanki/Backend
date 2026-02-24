import dotenv from 'dotenv';
import { connectDB } from './config/db.config.js';
import seedProducts from './modules/seedProducts.js';
import app from './app.js';

dotenv.config();

const PORT = 3000;
    
if (process.env.MONGODB_URI) {
  connectDB().then(() => {
    console.log('Database connected successfully');
    try { seedProducts(); } catch (e) { console.error('Seeding error', e); }
  }).catch((error) => {
    console.error('Database connection failed:', error);
    console.error('Continuing without DB connection — routes that require the database will fail.');
  });
} else {
  console.warn('MONGODB_URI not set — skipping DB connection and seeding.');
}

  
 
  
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});