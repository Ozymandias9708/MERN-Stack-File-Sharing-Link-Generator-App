import dotenv from 'dotenv'
dotenv.config()
import express from 'express';



const app = express();
import router from './routes/route.js';
import cors from 'cors';
import DBConnection from './database/mongoDatabase.js';


const PORT =process.env.PORT || 8000;
app.use(cors());
app.use('/',router);



DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));