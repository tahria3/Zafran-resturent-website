import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { ChefSection } from './components/ChefSection';
import { ReservationSection } from './components/ReservationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { MenuItem, CartItem } from './types/restaurant';
import { allMenuItems } from './data/menuData';

export default function App() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(allMenuItems);

  // Sync menu from Node.js Express backend API
  useEffect(() => {
    fetch('/api/menu')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.items && Array.isArray(data.items) && data.items.length > 0) {
          setMenuItems(data.items);
        }
      })
      .catch((err) => {
        console.warn('Backend API note:', err);
      });
  }, []);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#eae7e1] font-sans selection:bg-[#c59d5f] selection:text-black">
      {/* Top Navigation Bar: Strict 3 Zones (Wordmark, 4 links, 1 action button) */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Culinary and Coffee Experience */}
      <main>
        {/* 1. Hero Ambiance */}
        <Hero lang={lang} />

        {/* 2. Interactive Menu with 50+ Coffees, 15 Initial Items & View More */}
        <MenuSection items={menuItems} lang={lang} onAddToCart={handleAddToCart} />

        {/* 3. Chef's Special & Masterpieces Spotlight */}
        <ChefSection lang={lang} />

        {/* 4. Table Reservation Engine (Online Table Booking) */}
        <ReservationSection lang={lang} />

        {/* 5. Food Critic & Guest Reviews */}
        <ReviewsSection lang={lang} />

        {/* 6. Hours, Location Map & Inquiries */}
        <ContactSection lang={lang} />
      </main>

      {/* Slide-over Cart & Takeaway Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        lang={lang}
      />

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
