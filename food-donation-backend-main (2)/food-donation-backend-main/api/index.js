import authRoutes from '../routes/auth.routes.js';
import foodDonationRoutes from '../routes/fooddonation.routes.js';
import allFoodRoutes from '../routes/allfood.routes.js';
import userRoutes from '../routes/user.routes.js';
import bodyParser from 'body-parser';
import connectDB from '../config/mongo.js';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/api', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', authRoutes);
app.use('/api', foodDonationRoutes);
app.use('/api', allFoodRoutes);
app.use('/api', userRoutes);

connectDB();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;