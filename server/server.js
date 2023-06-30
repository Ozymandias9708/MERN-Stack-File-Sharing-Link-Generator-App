import express from 'express';


// dotenv.config();

const app = express();
import router from './routes/route.js';
import cors from 'cors';
import DBConnection from './database/mongoDatabase.js';

// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use('/', router);

const PORT = 8000;
app.use(cors());
app.use('/',router);



DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));