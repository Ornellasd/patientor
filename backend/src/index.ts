import express from 'express';
import cors from 'cors';

import diagnosesRouter from './routes/diagnoses';
import patientRouter from './routes/patients';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use(cors());

app.use('/api/diagnoses', diagnosesRouter);
app.use('/api/patients', patientRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
