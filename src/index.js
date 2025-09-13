
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import customerRoutes from './routes/customer-routes.js';
import staffRoutes from './routes/staff-routes.js';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api', (req, res)=>{
    res.status(200).json({
        success: true,
        message: 'API is running...'
    })
});

app.use('/api/customer',customerRoutes );
app.use('/api/staff', staffRoutes);

app.listen(PORT, ()=>console.log(`server is listening on port: ${PORT}`));