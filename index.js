require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const userRoutes = require('./src/api/routes/users');
const gameRoutes = require('./src/api/routes/games');
const consoleRoutes = require('./src/api/routes/consoles');


const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/users', userRoutes);

app.use('/api/v1/games', gameRoutes);

app.use('/api/v1/consoles', consoleRoutes);


app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found 🛑')
});

app.listen(3000, () => {
  console.log('The server is running at http://localhost:3000 ✅');
});