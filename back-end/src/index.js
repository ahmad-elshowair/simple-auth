import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import usersRoutes from './Routes/users.js'
import dashboardRoutes from './Routes/dashboard.js'

//environment variables config 
dotenv.config();


const { PORT } = process.env;

// port 
const port = PORT || 5000;

// an instance app of express
const app = express();

//middleware
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from the main root!')
})

app.use('/users', usersRoutes);
app.use('/dashboard', dashboardRoutes);

app.listen(port, () => {
  console.log(`the app runs on http://localhost:${port}`);
});

