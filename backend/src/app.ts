import express from 'express';
import compression from 'compression';
import cors from 'cors';
import data from './data.json';

const bookArr = data as { id: number; title: string; author: string; coverImageUrl: string; description: string }[];

const app = express();
app.use(compression());
app.use(cors());
app.use((req, res, next) => {
  res.locals.user = {};
  next();
});

app.get('/', (req, res) => {
  res.json({ title: 'API Examples' }); //, v: version });
});

app.get('/book', (req, res) => {
  res.json(bookArr); //, v: version });
});

app.get('/book/:id', (req, res) => {
  const idStr = req.params['id'];
  const id = Number.parseFloat(idStr);
  if (!Number.isInteger(id)) return res.status(400).send('invalid book id');
  console.log({ id, param: req.params['id'] });
  const book = bookArr.find((b) => b.id === id);
  if (book == null) return res.status(404).send('no book found');
  return res.json(book);
});

export const getApp = async () => {
  // const route = await getJsonServerS3Router('sandbox-mimmie-data', 'data.json');
  // app.use('/json-server', route);
  return app;
};

export default app;
