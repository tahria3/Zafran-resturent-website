import React from 'react';
import { Award, Flame, Heart, Compass, CheckCircle2 } from 'lucide-react';

interface ChefSectionProps {
  lang: 'bn' | 'en';
}

export const ChefSection: React.FC<ChefSectionProps> = ({ lang }) => {
  return (
    <section id="specials" className="py-24 bg-[#0a0b0e] border-t border-[#1a1c24] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c59d5f] mb-2 font-medium">
            <span>{lang === 'bn' ? 'শেফের বিশেষত্ব' : 'Culinary Masterpieces'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'bn' ? 'স্বাক্ষর পদ' : 'Signature Craft'}</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#fbf9f5] mb-4">
            {lang === 'bn' ? 'রন্ধনশিল্পী ও আমাদের ঐতিহ্য' : 'The Culinary Philosophy'}
          </h2>
          <p className="text-sm text-[#9b9589] leading-relaxed">
            {lang === 'bn'
              ? 'আমাদের প্রতিটি পদ শুধু খাবার নয়, একটি শিল্প—যেখানে মিশে থাকে শতবর্ষের রন্ধন সংস্কৃতি এবং নিখুঁত আধুনিক উপস্থাপনা।'
              : 'Beyond just fine food, we craft an immersive dining memory honoring historic culinary heritage and seasonal mastery.'}
          </p>
        </div>

        {/* 2-Column Split: Chef Story Left, Chef Portrait Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          {/* Chef Story and Values (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[#12141c] border border-[#202330]">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#c59d5f] font-mono mb-4 tracking-wider uppercase">
                <Award className="w-4 h-4" />
                <span>{lang === 'bn' ? 'প্রধান নির্বাহী শেফ' : 'Executive Head Chef'}</span>
              </div>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f1ede6] mb-4">
                {lang === 'bn'
                  ? 'শেফ ফারহান চৌধুরী ও রন্ধন দল'
                  : 'Chef Julian Dubois & Master Team'}
              </h3>

              <p className="text-sm text-[#aba599] leading-relaxed mb-6 font-normal">
                {lang === 'bn'
                  ? '১৮ বছরের আন্তর্জাতিক রন্ধন অভিজ্ঞতায় সমৃদ্ধ আমাদের প্রধান শেফ প্রাচীন শাহী রন্ধনপ্রণালী এবং সমকালীন আন্তর্জাতিক ফাইন ডাইনিং টেকনিকের মেলবন্ধন ঘটিয়েছেন। প্রতিটি মশলা সরাসরি উৎপাদকদের কাছ থেকে সংগ্রহ করে নিজস্ব ফর্মুলায় হাতে গুঁড়ো করা হয়।'
                  : 'With over 18 years of fine dining leadership across luxury culinary capitals, our team harmonizes heritage slow-pot roasting with refined contemporary plating. Every whole spice is micro-batched and toasted fresh daily.'}
              </p>

              {/* Chef Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#c59d5f] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#eae7e1] mb-0.5">
                      {lang === 'bn' ? 'ধীর আঁচে মাটির পাত্রে দম' : 'Traditional Slow Dum Sealing'}
                    </h4>
                    <p className="text-[11px] text-[#7d776d]">
                      {lang === 'bn' ? 'স্বাদ ও সুবাস অক্ষুণ্ণ রাখতে আটার সিলিং' : 'Dough sealed pots preserving essential juices'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#c59d5f] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#eae7e1] mb-0.5">
                      {lang === 'bn' ? 'খাঁটি জাফরান ও মশলার নির্যাস' : 'Kashmiri Mongra Saffron'}
                    </h4>
                    <p className="text-[11px] text-[#7d776d]">
                      {lang === 'bn' ? 'কোনো রাসায়নিক ফুড কালার ছাড়া প্রাকৃতিক রঙ' : 'No synthetic color or artificial aroma'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#c59d5f] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#eae7e1] mb-0.5">
                      {lang === 'bn' ? 'লাইভ চারকোল কাবাব বার' : 'Artisanal Clay Tandoor'}
                    </h4>
                    <p className="text-[11px] text-[#7d776d]">
                      {lang === 'bn' ? 'কাঠকয়লার স্বাভাবিক ধোঁয়ায় রসালো রান্না' : 'Char-grilling for delicate smoky caramelization'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#c59d5f] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#eae7e1] mb-0.5">
                      {lang === 'bn' ? 'পরিচ্ছন্নতা ও স্বাস্থ্য সুরক্ষা' : 'Pristine Hygiene Standard'}
                    </h4>
                    <p className="text-[11px] text-[#7d776d]">
                      {lang === 'bn' ? 'ওপেন কিচেন পরিচ্ছন্নতার আন্তর্জাতিক মানদণ্ড' : 'Temperature controlled open glass kitchen'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1e212c] flex items-center justify-between">
              <div className="text-xs text-[#8e897e]">
                <span className="text-[#f1ede6] font-semibold">{lang === 'bn' ? 'খোলা রান্নাঘর' : 'Open Kitchen'}</span>
                <span className="mx-2">·</span>
                <span>{lang === 'bn' ? 'প্রতিদিন দুপুর ১২:৩০ - রাত ১১:৩০' : 'Daily 12:30 PM - 11:30 PM'}</span>
              </div>
              <a
                href="#reservation"
                className="text-xs text-[#c59d5f] hover:text-[#e4be79] font-medium flex items-center gap-1"
              >
                <span>{lang === 'bn' ? 'টেবিল বুক করুন →' : 'Book a visit →'}</span>
              </a>
            </div>
          </div>

          {/* Chef Image Right (5 cols) */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#202330] min-h-[380px] group shadow-xl">
            <img
              src="/images/chef_portrait.jpg"
              alt="Executive Chef Plating Artisanal Dish"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-[#c59d5f] font-mono">
                {lang === 'bn' ? 'রন্ধন শিল্পের পরম যত্ন' : 'Craft & Dedication'}
              </span>
              <p className="text-sm font-serif-luxury text-[#f1ede6] italic mt-1">
                {lang === 'bn'
                  ? '"খাবার যখন ভালোবাসা ও বিশুদ্ধতায় পরিবেশিত হয়, তা আত্মাকে তৃপ্তি দেয়।"'
                  : '"Great culinary art is not about complexity; it is about respecting honest ingredients with patient fire."'}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Masterpiece Dishes Spotlight Grid */}
        <div id="story" className="scroll-mt-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#f1ede6]">
              {lang === 'bn' ? 'শীর্ষ ৪টি ক্লাসিক সিগনেচার ডিশ' : 'Top 4 Signature Masterpieces'}
            </h3>
            <p className="text-xs text-[#8e897e] mt-1">
              {lang === 'bn' ? 'যা আমাদের অতিথিগণ সবচেয়ে বেশি পছন্দ করেন' : 'Most celebrated creations by our patrons'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Dish 1: Shahi Biryani */}
            <div className="bg-[#12141c] rounded-xl border border-[#202330] overflow-hidden flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/images/royal_biryani.jpg"
                  alt="Nawabi Shahi Dum Biryani"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-[#deb473] font-mono">
                  #1 Best Seller
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif-luxury text-sm font-bold text-[#f1ede6]">
                      {lang === 'bn' ? 'শাহী দম বিরিয়ানি' : 'Shahi Dum Biryani'}
                    </h4>
                    <span className="text-xs font-bold text-[#deb473] font-mono tabular-nums">৳ 850</span>
                  </div>
                  <p className="text-[11px] text-[#8e897e] leading-relaxed mb-3">
                    {lang === 'bn'
                      ? 'খাসির নরম মাংস ও খাঁটি জাফরানি বাসমতীর শাহী সমাহার।'
                      : 'Slow-pot sealed mutton with aged basmati rice.'}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#1c1e28] flex items-center justify-between text-[11px] text-[#7d776d]">
                  <span>{lang === 'bn' ? '১-২ জন' : 'Serves 1-2'}</span>
                  <a href="#menu" className="text-[#c59d5f] hover:underline font-medium">
                    {lang === 'bn' ? 'অর্ডার করুন' : 'Order Now'}
                  </a>
                </div>
              </div>
            </div>

            {/* Dish 2: Kacchi Biryani Handi */}
            <div className="bg-[#12141c] rounded-xl border border-[#202330] overflow-hidden flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/images/kacchi_biryani.jpg"
                  alt="Dhakai Kacchi Biryani Handi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-[#deb473] font-mono">
                  Clay Handi
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif-luxury text-sm font-bold text-[#f1ede6]">
                      {lang === 'bn' ? 'কাচ্চি বিরিয়ানি হাঁড়ি' : 'Kacchi Handi'}
                    </h4>
                    <span className="text-xs font-bold text-[#deb473] font-mono tabular-nums">৳ 890</span>
                  </div>
                  <p className="text-[11px] text-[#8e897e] leading-relaxed mb-3">
                    {lang === 'bn'
                      ? 'মাটির হাঁড়িতে সেদ্ধ খাসির নরম মাংস ও ভাজা গোল আলু।'
                      : 'Tender mutton shank and roasted golden potatoes.'}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#1c1e28] flex items-center justify-between text-[11px] text-[#7d776d]">
                  <span>{lang === 'bn' ? '১-২ জন' : 'Serves 1-2'}</span>
                  <a href="#menu" className="text-[#c59d5f] hover:underline font-medium">
                    {lang === 'bn' ? 'অর্ডার করুন' : 'Order Now'}
                  </a>
                </div>
              </div>
            </div>

            {/* Dish 3: Sizzling Kebab Platter */}
            <div className="bg-[#12141c] rounded-xl border border-[#202330] overflow-hidden flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/images/kebab_platter.jpg"
                  alt="Sizzling Royal Tandoori Platter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-[#deb473] font-mono">
                  Chef Special
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif-luxury text-sm font-bold text-[#f1ede6]">
                      {lang === 'bn' ? 'সিজলিং কাবাব প্ল্যাটার' : 'Kebab Sizzler'}
                    </h4>
                    <span className="text-xs font-bold text-[#deb473] font-mono tabular-nums">৳ 1,450</span>
                  </div>
                  <p className="text-[11px] text-[#8e897e] leading-relaxed mb-3">
                    {lang === 'bn'
                      ? 'শিক কাবাব, রেশমি টিক্কা ও বটি কাবাবের গরম সিজলিং।'
                      : 'Assortment of mutton seekh, chicken tikka, and boti.'}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#1c1e28] flex items-center justify-between text-[11px] text-[#7d776d]">
                  <span>{lang === 'bn' ? '২-৩ জন' : 'Serves 2-3'}</span>
                  <a href="#menu" className="text-[#c59d5f] hover:underline font-medium">
                    {lang === 'bn' ? 'অর্ডার করুন' : 'Order Now'}
                  </a>
                </div>
              </div>
            </div>

            {/* Dish 4: Butter Chicken Karahi */}
            <div className="bg-[#12141c] rounded-xl border border-[#202330] overflow-hidden flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/images/butter_chicken.jpg"
                  alt="Royal Murgh Makhani Butter Chicken"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-[#deb473] font-mono">
                  Royal Karahi
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif-luxury text-sm font-bold text-[#f1ede6]">
                      {lang === 'bn' ? 'বাটার চিকেন মাখানি' : 'Butter Chicken'}
                    </h4>
                    <span className="text-xs font-bold text-[#deb473] font-mono tabular-nums">৳ 740</span>
                  </div>
                  <p className="text-[11px] text-[#8e897e] leading-relaxed mb-3">
                    {lang === 'bn'
                      ? 'ঘন টমেটো-কাজুবাদাম গ্রেভিতে মাখন ও তন্দুরি চিকেন।'
                      : 'Velvety spiced tomato cream gravy with butter naan.'}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#1c1e28] flex items-center justify-between text-[11px] text-[#7d776d]">
                  <span>{lang === 'bn' ? '১-২ জন' : 'Serves 1-2'}</span>
                  <a href="#menu" className="text-[#c59d5f] hover:underline font-medium">
                    {lang === 'bn' ? 'অর্ডার করুন' : 'Order Now'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
