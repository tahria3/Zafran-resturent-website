import React from 'react';

interface FooterProps {
  lang: 'bn' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-[#08090c] border-t border-[#181a22] text-[#8e897e] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#181a22]">
          {/* Col 1: Brand Wordmark (7 cols) */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#997334] to-[#e4be79] flex items-center justify-center text-black font-cinzel font-bold text-base">
                Z
              </span>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-wider text-[#f1ede6] block">
                  ZAFRAN
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#a59f93] uppercase font-sans">
                  {lang === 'bn' ? 'ফাইন ডাইনিং অ্যান্ড লাউঞ্জ' : 'Fine Dining & Lounge'}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#7e796e] max-w-md leading-relaxed mb-4">
              {lang === 'bn'
                ? 'ঐতিহ্যবাহী শাহী রন্ধনশিল্প, খাঁটি দম বিরিয়ানি, কাঠকয়লার স্মোকড কাবাব এবং বিশ্বমানের স্পেশালিটি কফির এক অতুলনীয় অভিজাত অভিজ্ঞতা।'
                : 'A timeless sanctuary of royal flavors, slow-pot clay sealed dum biryanis, live charcoal grills, and artisanal specialty coffee brews.'}
            </p>

            <div className="inline-flex items-center gap-2 text-[11px] text-[#c59d5f]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59d5f]" />
              <span>{lang === 'bn' ? '১০০% হালাল সনদপ্রাপ্ত ও তাজা উপকরণ' : '100% Halal Certified Meats & Premium Beans'}</span>
            </div>
          </div>

          {/* Col 2: Direct Contacts (5 cols) */}
          <div className="md:col-span-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#cfc8bd] mb-3 font-mono">
              {lang === 'bn' ? 'সরাসরি যোগাযোগ' : 'Direct Line'}
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="text-[#aea89c]">
                Plot 48, Road 11, Block D, Banani, Dhaka 1213
              </p>
              <p className="text-[#deb473] font-mono tabular-nums font-semibold text-sm">
                +880 1894 888 999
              </p>
              <p className="text-[#7e796e]">
                Lunch: 12:30 PM – 3:45 PM<br />
                Dinner: 6:30 PM – 11:30 PM (Weekend 12 AM)
              </p>
              <a
                href="/zafran-restaurant-project.zip"
                download="zafran-restaurant-project.zip"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 mt-2 bg-[#171a25] hover:bg-[#202535] text-[#deb473] text-xs font-mono rounded border border-[#282d3e] transition-colors"
                title="Download full functional project as ZIP"
              >
                <span>📦 {lang === 'bn' ? 'সম্পূর্ণ প্রজেক্ট ZIP ডাউনলোড করুন' : 'Download Complete Project (.ZIP)'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6a665d] gap-3">
          <div>
            © 2026 Zafran Fine Dining & Coffee Lounge. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>{lang === 'bn' ? 'প্রাইভেসি পলিসি' : 'Privacy Policy'}</span>
            <span>·</span>
            <span>{lang === 'bn' ? 'ডাইনিং নিয়মাবলী' : 'Dining Terms'}</span>
            <span>·</span>
            <span>{lang === 'bn' ? 'পরিচ্ছন্নতা নীতি' : 'Hygiene Standards'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
