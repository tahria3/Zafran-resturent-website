import React from 'react';
import { MapPin, Phone, Clock, Mail, Car, Wifi, ShieldCheck, Compass, Navigation } from 'lucide-react';

interface ContactSectionProps {
  lang: 'bn' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  return (
    <section id="contact" className="py-24 bg-[#0e1016] border-t border-[#1e212c] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c59d5f] mb-2 font-medium">
            <span>{lang === 'bn' ? 'ঠিকানা ও সময়' : 'Visit & Inquiries'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'bn' ? 'বনানী, ঢাকা' : 'Banani Avenue'}</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#fbf9f5] mb-4">
            {lang === 'bn' ? 'আমাদের অবস্থান ও যোগাযোগের তথ্য' : 'Location, Hours & Reservations'}
          </h2>
          <p className="text-sm text-[#9b9589] leading-relaxed">
            {lang === 'bn'
              ? 'যেকোনো অনুসন্ধান বা সরাসরি টেবিল বুকিংয়ের জন্য আমাদের সাথে যোগাযোগ করতে পারেন।'
              : 'Conveniently nestled in Banani Road 11 with complimentary valet parking.'}
          </p>
        </div>

        {/* 2-Column Grid: Info Cards Left, Interactive Map Preview Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Hours Card */}
            <div className="p-6 rounded-2xl bg-[#13151e] border border-[#232736]">
              <div className="flex items-center gap-2.5 text-[#c59d5f] mb-4">
                <Clock className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#f1ede6]">
                  {lang === 'bn' ? 'খোলার সময়সূচি' : 'Operating Hours'}
                </h3>
              </div>

              <div className="space-y-3 text-xs text-[#aba599] font-mono tabular-nums">
                <div className="flex justify-between items-center pb-2 border-b border-[#1f2230]">
                  <span>{lang === 'bn' ? 'দুপুরের খাবার (Lunch)' : 'Lunch Service'}</span>
                  <span className="text-[#eae7e1] font-semibold">12:30 PM – 03:45 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#1f2230]">
                  <span>{lang === 'bn' ? 'রাতের খাবার (Dinner)' : 'Dinner Service'}</span>
                  <span className="text-[#eae7e1] font-semibold">06:30 PM – 11:30 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>{lang === 'bn' ? 'শুক্রবার ও শনিবার (Weekends)' : 'Weekend Special Hours'}</span>
                  <span className="text-[#deb473] font-semibold">12:00 PM – 12:00 AM (Non-stop)</span>
                </div>
              </div>
            </div>

            {/* Address & Hotline Card */}
            <div className="p-6 rounded-2xl bg-[#13151e] border border-[#232736]">
              <div className="flex items-center gap-2.5 text-[#c59d5f] mb-4">
                <MapPin className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#f1ede6]">
                  {lang === 'bn' ? 'ঠিকানা ও হটলাইন' : 'Address & Hotlines'}
                </h3>
              </div>

              <div className="space-y-3.5 text-xs text-[#aba599]">
                <div>
                  <span className="text-[11px] text-[#7d776d] block mb-0.5">
                    {lang === 'bn' ? 'রেস্তোরাঁর অবস্থান:' : 'Physical Address:'}
                  </span>
                  <p className="text-[#eae7e1] font-medium leading-relaxed">
                    {lang === 'bn'
                      ? 'প্লট ৪৮, রোড ১১, ব্লক ডি, বনানী (স্টার কাবাব এর বিপরীতে), ঢাকা ১২১৩'
                      : 'Plot 48, Road 11, Block D, Banani (Opposite Kemal Ataturk Ave), Dhaka 1213'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#1f2230]">
                  <div>
                    <span className="text-[11px] text-[#7d776d] block mb-0.5">
                      {lang === 'bn' ? 'হটলাইন কল:' : 'Direct Hotline:'}
                    </span>
                    <a
                      href="tel:+8801894888999"
                      className="text-sm font-bold text-[#deb473] font-mono hover:underline"
                    >
                      +880 1894 888 999
                    </a>
                  </div>

                  <div>
                    <span className="text-[11px] text-[#7d776d] block mb-0.5">
                      {lang === 'bn' ? 'ইমেইল অনুসন্ধান:' : 'Inquiries Email:'}
                    </span>
                    <a
                      href="mailto:reservations@zafranrestaurant.com"
                      className="text-xs text-[#eae7e1] hover:underline"
                    >
                      reservations@zafranrestaurant.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#13151e] border border-[#232736] text-center">
                <Car className="w-4 h-4 text-[#c59d5f] mx-auto mb-1.5" />
                <span className="text-[11px] font-semibold text-[#eae7e1] block">
                  {lang === 'bn' ? 'ভ্যালেট পার্কিং' : 'Valet Parking'}
                </span>
                <span className="text-[10px] text-[#7d776d]">
                  {lang === 'bn' ? 'কমপ্লিমেন্টারি' : 'Complimentary'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#13151e] border border-[#232736] text-center">
                <Wifi className="w-4 h-4 text-[#c59d5f] mx-auto mb-1.5" />
                <span className="text-[11px] font-semibold text-[#eae7e1] block">
                  {lang === 'bn' ? 'হাই-স্পিড ওয়াইফাই' : 'Fast Wi-Fi'}
                </span>
                <span className="text-[10px] text-[#7d776d]">
                  {lang === 'bn' ? 'ফ্রি গেস্ট অ্যাক্সেস' : 'Guest access'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#13151e] border border-[#232736] text-center">
                <ShieldCheck className="w-4 h-4 text-[#c59d5f] mx-auto mb-1.5" />
                <span className="text-[11px] font-semibold text-[#eae7e1] block">
                  {lang === 'bn' ? 'নামাজের স্থান' : 'Prayer Space'}
                </span>
                <span className="text-[10px] text-[#7d776d]">
                  {lang === 'bn' ? 'নারী ও পুরুষ পৃথক' : 'Separate rooms'}
                </span>
              </div>
            </div>
          </div>

          {/* Map Preview & Directions (6 cols) */}
          <div className="lg:col-span-6 flex flex-col rounded-2xl bg-[#13151e] border border-[#232736] overflow-hidden">
            {/* Styled Map Graphic Container */}
            <div className="relative flex-1 min-h-[300px] bg-[#1a1c26] flex items-center justify-center p-6 text-center overflow-hidden">
              {/* Stylized Grid Lines representing City Map Avenue */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#c59d5f 1px, transparent 1px), linear-gradient(to right, #252838 1px, transparent 1px), linear-gradient(to bottom, #252838 1px, transparent 1px)`,
                  backgroundSize: '24px 24px, 48px 48px, 48px 48px'
                }}
              />

              {/* Road lines simulation */}
              <div className="absolute top-1/2 left-0 right-0 h-10 -translate-y-1/2 bg-[#12131b] border-y border-[#2a2e40] flex items-center justify-around text-[10px] text-[#6d675c] font-mono tracking-widest uppercase">
                <span>← Kemal Ataturk Ave</span>
                <span className="text-[#c59d5f] font-bold">Banani Road 11</span>
                <span>Gulshan-2 →</span>
              </div>

              {/* Pin Callout Box */}
              <div className="relative z-10 p-5 rounded-xl bg-[#0c0d12]/95 border border-[#c59d5f]/60 shadow-2xl max-w-sm text-left">
                <div className="flex items-center gap-2 mb-2 text-[#c59d5f]">
                  <span className="w-3 h-3 rounded-full bg-[#c59d5f] animate-ping" />
                  <span className="text-xs font-bold font-cinzel tracking-wider">ZAFRAN RESTAURANT</span>
                </div>
                <p className="text-xs text-[#eae7e1] font-medium leading-relaxed mb-3">
                  Plot 48, Road 11, Block D, Banani, Dhaka
                </p>
                <div className="flex items-center justify-between text-[11px] text-[#8e897e] pt-2 border-t border-[#222533]">
                  <span>{lang === 'bn' ? 'বনানী ব্রিজের কাছে' : 'Near Banani 11 Bridge'}</span>
                  <span className="text-emerald-400 font-mono">Open Now</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-5 bg-[#10121a] border-t border-[#1f2230] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-[#8e897e]">
                {lang === 'bn'
                  ? 'গুগল ম্যাপে "Zafran Restaurant Banani" লিখেও সহজে পাওয়া যাবে।'
                  : 'Search "Zafran Restaurant Banani" directly on Google Maps.'}
              </div>

              <a
                href="https://maps.google.com/?q=Banani+Road+11+Dhaka"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-[#c59d5f] hover:brightness-110 rounded-md transition-all whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'ম্যাপে ডিরেকশন দেখুন' : 'Get Directions'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
