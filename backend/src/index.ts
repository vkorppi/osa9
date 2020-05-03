import express from 'express';
import diagnosesRoute from './routes/diagnosesRoute'; 
import patientsRoute from './routes/patientsRoute'; 
import cors from 'cors';

const exp = express();

exp.use(cors());
exp.use(express.json());
exp.use('/api/diagnoses', diagnosesRoute);
exp.use('/api/patients', patientsRoute);

exp.get('/api/ping', (_req, res) => {
    res.send('PONG');
  });

  
exp.listen(3001);