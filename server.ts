import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory data store for reservations and orders
interface Reservation {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  tableType: string;
  specialRequests?: string;
  createdAt: string;
  status: 'Confirmed' | 'Pending';
}

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  customerName: string;
  phone: string;
  address?: string;
  orderType: 'takeaway' | 'dine-in-preorder';
  items: OrderItem[];
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  specialNotes?: string;
  status: 'Received' | 'Preparing' | 'Ready';
  createdAt: string;
}

const reservations: Reservation[] = [
  {
    id: 'ZF-8214',
    name: 'তানভীর আহমেদ (Tanvir Ahmed)',
    phone: '+880 1711 000000',
    email: 'tanvir@example.com',
    date: '2026-11-12',
    time: '20:00',
    guests: 4,
    tableType: 'Private Booth (ব্যক্তিগত বুথ)',
    specialRequests: 'Anniversary celebration with flowers',
    createdAt: new Date().toISOString(),
    status: 'Confirmed'
  }
];

const orders: Order[] = [];

import { allMenuItems } from './src/data/menuData.ts';

const menuItems = allMenuItems;

// Restaurant Info API
app.get('/api/info', (_req: Request, res: Response) => {
  res.json({
    name: 'Zafran Fine Dining & Artisanal Lounge',
    nameBn: 'জাফরান ফাইন ডাইনিং অ্যান্ড রেস্তোরাঁ',
    tagline: 'A Symphony of Royal Flavors & Contemporary Elegance',
    taglineBn: 'ঐতিহ্যবাহী শাহী স্বাদ ও আধুনিক নান্দনিকতার নিখুঁত মেলবন্ধন',
    address: 'Plot 48, Road 11, Block D, Banani, Dhaka 1213, Bangladesh',
    addressBn: 'প্লট ৪৮, রোড ১১, ব্লক ডি, বনানী, ঢাকা ১২১৩',
    phone: '+880 1894 888 999',
    reservationLine: '+880 1711 777 666',
    email: 'reservations@zafranrestaurant.com',
    hours: {
      lunch: '12:30 PM – 03:45 PM',
      dinner: '06:30 PM – 11:30 PM',
      weekendHours: '12:00 PM – 12:00 AM'
    },
    tablesAvailableTotal: 24,
    seatingTypes: [
      { id: 'main-dining', label: 'Main Dining Hall (মূল হল)', desc: 'Warm chandeliers and ambient acoustics' },
      { id: 'private-booth', label: 'Royal Private Booth (প্রাইভেট বুথ)', desc: 'Intimate secluded seating for families or meetings' },
      { id: 'garden-patio', label: 'Open Garden Patio (খোলামেলা প্যাটিও)', desc: 'Breezy greenery with candlelit tables' },
      { id: 'rooftop-sky', label: 'Rooftop Lounge (রুফটপ ভিউ)', desc: 'City skyline panorama and star-lit dining' }
    ]
  });
});

// Menu Items API
app.get('/api/menu', (_req: Request, res: Response) => {
  res.json({
    status: 'success',
    items: menuItems
  });
});

// Reservations API
app.get('/api/reservations', (_req: Request, res: Response) => {
  res.json({
    status: 'success',
    count: reservations.length,
    reservations
  });
});

app.post('/api/reservations', (req: Request, res: Response) => {
  const { name, phone, email, date, time, guests, tableType, specialRequests } = req.body;

  if (!name || !phone || !date || !time || !guests) {
    return res.status(400).json({
      error: 'Missing required reservation fields (Name, Phone, Date, Time, Guests)'
    });
  }

  const newReservation: Reservation = {
    id: `ZF-${Math.floor(1000 + Math.random() * 9000)}`,
    name,
    phone,
    email: email || '',
    date,
    time,
    guests: Number(guests),
    tableType: tableType || 'Main Dining Hall',
    specialRequests: specialRequests || '',
    createdAt: new Date().toISOString(),
    status: 'Confirmed'
  };

  reservations.unshift(newReservation);

  res.status(201).json({
    status: 'success',
    message: 'Reservation confirmed successfully! / আপনার টেবিল বুকিং সফল হয়েছে!',
    reservation: newReservation
  });
});

// Orders API
app.post('/api/orders', (req: Request, res: Response) => {
  const { customerName, phone, address, orderType, items, specialNotes } = req.body;

  if (!customerName || !phone || !items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      error: 'Order must contain customer name, contact phone, and at least one item.'
    });
  }

  const subtotal = items.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const tax = Math.round(subtotal * 0.05); // 5% VAT
  const deliveryFee = orderType === 'takeaway' && address ? 80 : 0;
  const total = subtotal + tax + deliveryFee;

  const newOrder: Order = {
    id: `ZF-ORD-${Math.floor(1000 + Math.random() * 9000)}`,
    customerName,
    phone,
    address,
    orderType: orderType || 'takeaway',
    items,
    subtotal,
    tax,
    deliveryFee,
    total,
    specialNotes,
    status: 'Received',
    createdAt: new Date().toISOString()
  };

  orders.unshift(newOrder);

  res.status(201).json({
    status: 'success',
    message: 'Order placed successfully! / আপনার অর্ডারটি গ্রহণ করা হয়েছে!',
    order: newOrder
  });
});

// Direct project ZIP download route
app.get('/api/download-zip', (_req: Request, res: Response) => {
  const zipPath = path.resolve(__dirname, 'public', 'zafran-restaurant-project.zip');
  res.download(zipPath, 'zafran-restaurant-project.zip');
});

// Development vs Production serving
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Zafran Restaurant server running at http://localhost:${PORT}`);
  });
}

startServer();
