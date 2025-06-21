import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import catalog from './catalog.js';
import { saveOrder, loadOrders } from './orders.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/catalog', (req, res) => {
  res.json(catalog);
});

app.post('/api/order', (req, res) => {
  console.log('Заказ получен:', req.body);
  saveOrder(req.body);
  res.json({ status: 'ok' });
});

app.get('/api/orders', (req, res) => {
  res.json(loadOrders());
});

app.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});