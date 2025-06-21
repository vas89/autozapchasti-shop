import fs from 'fs';

const FILE = 'orders.json';

export function saveOrder(order) {
  const orders = loadOrders();
  orders.push(order);
  fs.writeFileSync(FILE, JSON.stringify(orders, null, 2));
}

export function loadOrders() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE));
}