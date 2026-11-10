import React from 'react';
import { Star, Quote, Award } from 'lucide-react';

interface ReviewsSectionProps {
  lang: 'bn' | 'en';
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  const reviews = [
    {
      id: 'rev-1',
      name: 'আবরার জাহিদ (Abrar Zahid)',
      role: 'ফুড ব্লগার ও সমালোচক (Food Critic)',
      rating: 5,
      date: 'গত সপ্তাহে',
      occasionBn: 'বিবাহবার্ষিকী ডিনার',
      occasionEn: 'Anniversary Dinner',
      quoteBn: 'বনানীতে এত নিখুঁত শাহী দম বিরিয়ানি এবং স্মোকড ল্যাম্ব চপস আমি আগে পাইনি। জাফরানের সুবাস এবং মাংসের নরম ভাব এককথায় অসাধারণ। পরিবেশ অত্যন্ত পরিপাটি ও মার্জিত।',
      quoteEn: 'Hands down the most authentic Dum Biryani and tender charcoal lamb chops in Dhaka. The fragrance of genuine saffron and the warm lighting make it extraordinary.'
    },
    {
      id: 'rev-2',
      name: 'ড. সামিয়া রহমান (Dr. Samia Rahman)',
      role: 'নিয়মিত অতিথি (Verified Guest)',
      rating: 5,
      date: '২ সপ্তাহ আগে',
      occasionBn: 'পারিবারিক পুনর্মিলনী',
      occasionEn: 'Family Gathering',
      quoteBn: 'আমাদের পুরো পরিবারের ৮ জনের টেবিল বুকিং দিয়েছিলাম। সার্ভিস অত্যন্ত দ্রুত এবং বিনয়ী ছিল। বিশেষ করে নারকেল চিংড়ি কারি এবং জাফরানি কাওহা সবার মন জয় করেছে।',
      quoteEn: 'Reserved a private booth for 8 family members. The hospitality was prompt and courteous. The coconut king prawn curry paired with warm garlic naan was phenomenal.'
    },
    {
      id: 'rev-3',
      name: 'মুহিবুল হাসান (Muhibul Hasan)',
      role: 'করপোরেট ডাইনিং ক্লায়েন্ট',
      rating: 5,
      date: '৩ সপ্তাহ আগে',
      occasionBn: 'ব্যবসায়িক ডিনার',
      occasionEn: 'Business Meeting',
      quoteBn: 'বিদেশি মেহমানদের নিয়ে আসার জন্য এটি একটি আদর্শ স্থান। পরিচ্ছন্নতা, নান্দনিক রুফটপ ভিউ এবং খাবারের স্বাদ সবকিছুই আন্তর্জাতিক মানের।',
      quoteEn: 'An absolute benchmark for entertaining international business guests. The pristine open kitchen standards, quiet acoustics, and rich cuisine never fail.'
    }
  ];

  return (
    <section className="py-24 bg-[#0a0b0f] border-t border-[#1a1c25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c59d5f] mb-2 font-medium">
            <span>{lang === 'bn' ? 'অতিথিদের অভিজ্ঞতা' : 'Guest Testimonials'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'bn' ? '৪.৯ ★ রেটিং' : '4.9 Star Rating'}</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#fbf9f5] mb-4">
            {lang === 'bn' ? 'আমাদের মেহমানদের আন্তরিক মূল্যায়ন' : 'Beloved by Discerning Diners'}
          </h2>
          <p className="text-sm text-[#9b9589] leading-relaxed">
            {lang === 'bn'
              ? 'প্রতিটি ভোজনরসিকের সন্তুষ্টিই আমাদের সবচেয়ে বড় প্রাপ্তি। বনানীর খাদ্যপ্রেমীদের প্রিয় ঠিকানা।'
              : 'Over 1,850+ memorable dining stories hosted with genuine warmth and culinary passion.'}
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#12141c] border border-[#202330] flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Top Rating & Occasion */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#e4be79]">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#7d776d] font-mono">
                    {lang === 'bn' ? rev.occasionBn : rev.occasionEn}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#cfc8bd] leading-relaxed mb-6 italic">
                  "{lang === 'bn' ? rev.quoteBn : rev.quoteEn}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#1c1e28] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#f1ede6]">{rev.name}</h4>
                  <p className="text-[11px] text-[#7d776d]">{rev.role}</p>
                </div>
                <Quote className="w-5 h-5 text-[#2a2d3b]" />
              </div>
            </div>
          ))}
        </div>

        {/* Quantified Rigor Banner */}
        <div className="mt-12 p-6 rounded-xl bg-[#13151f] border border-[#232634] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-[#e4be79] font-mono tabular-nums">৪.৯ / ৫.০</div>
            <div className="text-xs text-[#8e897e] mt-1">{lang === 'bn' ? 'গড় গ্রাহক রেটিং' : 'Average Google Rating'}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#e4be79] font-mono tabular-nums">১,৮৫০+</div>
            <div className="text-xs text-[#8e897e] mt-1">{lang === 'bn' ? 'সফল পারিবারিক ডাইনিং' : 'Hosted Gatherings'}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#e4be79] font-mono tabular-nums">১০০%</div>
            <div className="text-xs text-[#8e897e] mt-1">{lang === 'bn' ? 'খাঁটি হালাল উপকরণ' : 'Certified Halal Meats'}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
