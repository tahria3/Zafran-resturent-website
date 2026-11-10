# Zafran - Fine Dining, Artisanal Restaurant & 50+ Specialty Coffee Lounge

A full-stack, production-grade restaurant web application built with **React 19**, **Tailwind CSS v4**, **TypeScript**, and a **Node.js (Express)** backend.

---

## 🌟 Key Features

1. **Strict 3-Zone Clean Top Navigation**:
   - Brand Wordmark
   - 4 Unboxed Navigation Links: Menu (খাবার মেনু), Chef's Special (শেফের বিশেষ পদ), Our Story (আমাদের ঐতিহ্য), Hours & Location (সময় ও অবস্থান)
   - 1 Primary Action Button: "টেবিল বুকিং / Book a Table"
   - Language Switcher (বাংলা / English)
   - Interactive Order Bag (Cart) with real-time count badge

2. **Hero Ambiance**:
   - Atmospheric fine-dining interior photography
   - Compelling culinary headline and quick "Explore Full Menu" action
   - Trust highlights (100% Halal, Live Charcoal Hearth, Private Dining, Farm Fresh)

3. **Curated Food & 50+ Specialty Coffee Menu**:
   - 65+ total items including:
     - Royal Dum Biryanis & Clay Handi Kacchi
     - Charcoal Smoked Lamb Chops, Sizzling Kebab Platters, Seekh & Reshmi Kebabs
     - Royal Murgh Makhani Butter Chicken, Seafood Coconut Curry, Nalli Nihari
     - Starters, Tandoori Naan & Kulcha Baskets, Shahi Tukda Desserts
     - **52+ Specialty Coffees**: Espressos, Melbourne Flat White, Spanish Latte, Turkish Sand Coffee, Nitro Cold Brew, Kyoto 12h Drip, Chemex Geisha, Jamaican Blue Mountain, Affogatos, Frappes, and more!
   - 15 items displayed initially with a smooth "View More / আরও দেখুন" button
   - Dietary badges (Halal, Chef's Special, Vegetarian, Spicy Chili Scale)
   - 100% Real high-resolution culinary photography across every single card!

4. **Table Reservation System (অনলাইন টেবিল বুকিং)**:
   - Select guest count, date picker, lunch & dinner time slots
   - Table seating zones: Main Dining Hall, Royal Private Booth, Garden Patio, Rooftop Lounge
   - Connected to Express backend API (`POST /api/reservations`) with instant `ZF-XXXX` booking reference ticket generation!

5. **Slide-Over Takeaway Cart & Pre-Order Drawer**:
   - Real-time quantity adjustment (+/-)
   - Subtotal, 5% VAT, and delivery calculation
   - Takeaway or Dine-in pre-order option
   - Food thumbnails inside cart
   - Connected to backend API (`POST /api/orders`) with order tracking receipts

6. **Social Proof & Reviews**:
   - Verified guest testimonials and food critic quotes
   - Real statistics strip (4.9 rating, 1,850+ hosted dinners, 100% Halal)

7. **Location & Contact**:
   - Banani Road 11 address and hotline numbers
   - Operating hours (Lunch, Dinner, Weekend)
   - Complimentary valet parking and guest amenities
   - Styled interactive avenue map preview

---

## 🌐 How to Deploy on Netlify (১০০% ইমেজ সহ লাইভ করার নিয়ম)

### Method 1: Git Deployment (Recommended)
1. Push this project to your GitHub/GitLab repository.
2. In Netlify, click **"Add new site"** → **"Import an existing project"**.
3. Set the following build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy Site**.
   * `netlify.toml` and `public/_redirects` are already included, so all images (`/images/...`) and routes will work seamlessly on Netlify without any 404 error!

### Method 2: Manual Drag & Drop
1. In your local terminal, run:
   ```bash
   npm install
   npm run build
   ```
2. This generates the `dist` folder in your project.
3. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag-and-drop the `dist` folder. All images and pages will be live instantly!

---

## 🚀 How to Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or higher)
- npm (comes with Node.js) or yarn / pnpm / bun

### 1. Extract the Project
Extract `zafran-restaurant-project.zip` into your desired folder.

### 2. Install Dependencies
Open your terminal inside the project directory and run:
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
The application will launch at:
```
http://localhost:3000
```
Both the React frontend and the Node.js Express backend will be running simultaneously.

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
├── public/                 # Static assets and downloadable zip
├── src/
│   ├── assets/images/      # High-resolution generated culinary photography
│   ├── components/         # Modular React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── MenuSection.tsx
│   │   ├── ChefSection.tsx
│   │   ├── ReservationSection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CartDrawer.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── menuData.ts     # Complete food dishes & 52+ coffees database
│   ├── types/
│   │   └── restaurant.ts   # TypeScript interfaces
│   ├── App.tsx             # Root React application
│   ├── main.tsx            # DOM mounting
│   └── index.css           # Global Tailwind CSS v4 and typography
├── server.ts               # Express full-stack Node.js server
├── index.html              # HTML entry point with luxury fonts
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 📜 License
Apache-2.0
