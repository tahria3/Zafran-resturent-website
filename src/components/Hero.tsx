import React from 'react';
import { ArrowDown, UtensilsCrossed, ShieldCheck, Flame, Sparkles, Clock } from 'lucide-react';

interface HeroProps {
  lang: 'bn' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Cinematic Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_ambiance.jpg"
          alt="Zafran Restaurant Fine Dining Ambiance"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-[#0c0d10]/75 to-[#0c0d10]/45 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0c0d10]/50 to-[#0c0d10]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
        {/* Subtle kicker text with diamond separator (No pill badge) */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59d5f] mb-4">
          <span>{lang === 'bn' ? 'বনানী, ঢাকা' : 'Banani, Dhaka'}</span>
          <span aria-hidden="true">·</span>
          <span>{lang === 'bn' ? 'রাজকীয় ফাইন ডাইনিং' : 'Royal Culinary Lounge'}</span>
          <span aria-hidden="true">·</span>
          <span>{lang === 'bn' ? 'প্রতিদিন দুপুর ও রাত' : 'Lunch & Dinner Daily'}</span>
        </div>

        {/* Display Headline */}
        <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold text-[#fbf9f5] leading-[1.15] tracking-tight mb-6 [text-wrap:balance]">
          {lang === 'bn' ? (
            <>
              ঐতিহ্যবাহী শাহী স্বাদ ও <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#deb473] via-[#edd29b] to-[#c59d5f]">
                আধুনিক আভিজাত্যের মেলবন্ধন
              </span>
            </>
          ) : (
            <>
              A Timeless Symphony of <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#deb473] via-[#edd29b] to-[#c59d5f]">
                Royal Heritage & Fine Dining
              </span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#cfc8bd] leading-relaxed mb-10 font-normal">
          {lang === 'bn'
            ? 'ধীর আঁচে মাটির পাত্রে সিদ্ধ খাঁটি দম বিরিয়ানি, কয়লায় সেঁকা রসালো স্মোকড কাবাব এবং সুবাসিত জাফরানী গ্রেভির এক অনুপম রসনা তৃপ্তি। বিশেষ দিন ও পারিবারিক আড্ডার জন্য বনানীর সেরা ঠিকানা।'
            : 'Experience slow-sealed clay pot Dum Biryanis, artisanal char-grilled kebabs, and aromatic royal gravies crafted with rare Kashmiri saffron and heirloom spices.'}
        </p>

        {/* Action CTAs */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#c59d5f] to-[#e4be79] text-black font-semibold text-sm rounded-lg hover:brightness-110 shadow-lg shadow-[#c59d5f]/25 transition-all whitespace-nowrap"
          >
            <UtensilsCrossed className="w-4 h-4 text-black" />
            <span>{lang === 'bn' ? 'মেনু ও দাম দেখুন' : 'Explore Full Menu'}</span>
          </a>
        </div>

        {/* Key Highlights Grid below the hero headline */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#232632]/80 text-left">
          <div className="p-3.5 rounded-lg bg-[#12141b]/80 border border-[#202330]">
            <div className="flex items-center gap-2 text-[#c59d5f] mb-1.5">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span className="text-xs font-semibold tracking-wide text-[#eae7e1]">
                {lang === 'bn' ? '১০০% হালাল মান' : '100% Halal Certified'}
              </span>
            </div>
            <p className="text-[11px] text-[#9b9589] leading-snug">
              {lang === 'bn' ? 'খাঁটি দেশি ও আমদানিকৃত উপাদান' : 'Hand-selected farm fresh meats & dairy'}
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-[#12141b]/80 border border-[#202330]">
            <div className="flex items-center gap-2 text-[#c59d5f] mb-1.5">
              <Flame className="w-4 h-4 shrink-0" />
              <span className="text-xs font-semibold tracking-wide text-[#eae7e1]">
                {lang === 'bn' ? 'কয়লার তাজা গ্রিল' : 'Live Charcoal Hearth'}
              </span>
            </div>
            <p className="text-[11px] text-[#9b9589] leading-snug">
              {lang === 'bn' ? 'কাঠকয়লার খাঁটি স্মোকি সুবাস' : 'Authentic clay tandoor & wood smoking'}
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-[#12141b]/80 border border-[#202330]">
            <div className="flex items-center gap-2 text-[#c59d5f] mb-1.5">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span className="text-xs font-semibold tracking-wide text-[#eae7e1]">
                {lang === 'bn' ? 'রাজকীয় পরিবেশ' : 'Intimate Ambiance'}
              </span>
            </div>
            <p className="text-[11px] text-[#9b9589] leading-snug">
              {lang === 'bn' ? 'প্রাইভেট বুথ ও খোলা প্যাটিও' : 'Private dining cabins & garden patio'}
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-[#12141b]/80 border border-[#202330]">
            <div className="flex items-center gap-2 text-[#c59d5f] mb-1.5">
              <Clock className="w-4 h-4 shrink-0" />
              <span className="text-xs font-semibold tracking-wide text-[#eae7e1]">
                {lang === 'bn' ? 'তাজা প্রস্তুতি' : 'Freshly Prepared'}
              </span>
            </div>
            <p className="text-[11px] text-[#9b9589] leading-snug">
              {lang === 'bn' ? 'কোনো কৃত্রিম রং বা প্রিজারভেটিভ নেই' : 'Zero artificial essence or MSG'}
            </p>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <a
        href="#menu"
        aria-label="Scroll to menu"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#a59f93] hover:text-[#c59d5f] transition-colors p-2"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
