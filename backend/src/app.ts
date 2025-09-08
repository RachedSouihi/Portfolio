import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contact';

const app = express();

// Middleware
app.use(express.json());

const allowedOrigins = [
  'http://localhost:5173', // local dev
  'https://rachedsouihi.github.io', // The GitHub Pages site
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  credentials: false, // No cookies or credentials needed
}));

// Routes
app.use('/contact', contactRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});