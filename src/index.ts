import express from 'express';
import routes from './routes';
import { createThumbDir } from './util/fileUtil';

const app = express();
const port = 3000;

app.use('/api/images', routes);

//display images statically
app.use(express.static('assets'));

app.listen(port, (): void => {
  //create thumb dir on start if does not exist
  createThumbDir();

  console.log(`server started at localhost:${port}`);
});

export default app;
