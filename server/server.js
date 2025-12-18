import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { connectDb } from './config/database.js';
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes);

connectDb();


app.listen(process.env.PORT,()=> {
    console.log(`Server is running on port ${process.env.PORT}`);
});