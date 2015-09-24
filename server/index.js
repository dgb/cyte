import express  from 'express';
import logger   from 'morgan';
import assets   from './routes/assets';
import database from './routes/database';

const app = express();

if (app.get('env') !== 'test') {
  app.use(logger('dev'));
}

app.use(assets);
app.use(express.static('public'));
app.use(database);

export default app;
