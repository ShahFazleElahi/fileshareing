import express from 'express';
import router from './routes/routes.js';
import cors from 'cors'
import DbConnection from '../clint/src/services/database/db.js';


const app = express();

app.use(cors());
app . use ('/', router)

const PORT = 8000;

DbConnection();

app.listen(PORT, () => console.log('server is runnig on PORT $(PORT)'));
