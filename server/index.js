import express from 'express';
import logger  from 'morgan';
import assets  from './routes/assets';

const app = express();

if (app.get('env') !== 'test') {
  app.use(logger('dev'));
}

app.use('/', assets);
app.use(express.static('public'));

export default app;
