import React, { useState } from 'react';
import { X, Layout, Sparkles, Navigation, DollarSign, Palette, CheckCircle, Shield, Phone, Calendar } from 'lucide-react';

interface DesignerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'bn' | 'en';
}

export const DesignerGuideModal: React.FC<DesignerGuideModalProps> = ({ isOpen, onClose, lang }) => {
  const [activeTab, setActiveTab] = useState<'sections' | 'navbar' | 'business' | 'tech'>('sections');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative w-full max-w-3xl transform overflow-hidden rounded-2xl bg-[#12141c] border border-[#c59d5f]/40 p-6 sm:p-8 text-left shadow-2xl transition-all">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#222534] mb-6">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-lg bg-[#c59d5f]/15 text-[#deb473]">
                <Sparkles className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-serif-luxury text-xl font-bold text-[#f1ede6]">
                  {lang === 'bn' ? 'প্রফেশনাল UI/UX ডিজাইনার গাইড ও স্ট্র্যাটেজি' : 'Professional Restaurant UI/UX Strategy'}
                </h3>
                <p className="text-xs text-[#8e897e]">
                  {lang === 'bn'
                    ? 'একটি লাভজনক রেস্তোরাঁ ওয়েবসাইটে কী কী থাকা আবশ্যক এবং এর নেপথ্যের ডিজাইন যুক্তি'
                    : 'A comprehensive blueprint for high-converting culinary digital storefronts'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#8e897e] hover:text-[#eae7e1] rounded-md hover:bg-[#1b1e2a]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mb-6 border-b border-[#202330] pb-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('sections')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-all ${
                activeTab === 'sections'
                  ? 'bg-[#c59d5f] text-black'
                  : 'text-[#8e897e] hover:text-[#eae7e1]'
              }`}
            >
              ১. আবশ্যক সেকশনসমূহ
            </button>
            <button
              onClick={() => setActiveTab('navbar')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-all ${
                activeTab === 'navbar'
                  ? 'bg-[#c59d5f] text-black'
                  : 'text-[#8e897e] hover:text-[#eae7e1]'
              }`}
            >
              ২. ৪টি মেনু ও ১টি বাটন
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-all ${
                activeTab === 'business'
                  ? 'bg-[#c59d5f] text-black'
                  : 'text-[#8e897e] hover:text-[#eae7e1]'
              }`}
            >
              ৩. বিজনেস ও সেলস বৃদ্ধি
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-all ${
                activeTab === 'tech'
                  ? 'bg-[#c59d5f] text-black'
                  : 'text-[#8e897e] hover:text-[#eae7e1]'
              }`}
            >
              ৪. টেক স্ট্যাক আর্কিটেকচার
            </button>
          </div>

          {/* Tab Content */}
          <div className="text-xs text-[#aba599] leading-relaxed space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {activeTab === 'sections' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#171a25] border border-[#242838]">
                  <h4 className="text-sm font-bold text-[#deb473] mb-1">
                    ১. হিরো সেকশন (Hero Banner & First Impression)
                  </h4>
                  <p>
                    ভিজিটর ওয়েবসাইটে প্রবেশের প্রথম ৩ সেকেন্ডের মধ্যে খাবারের উচ্চমানের ক্ষুধা-জাগানো ছবি ও রেস্তোরাঁর পরিবেশ দেখতে চায়। এখানে স্পষ্ট হেডলাইন, বনানী লোকেশন এবং দ্রুত 'টেবিল বুকিং' ও 'মেনু দেখুন' অ্যাকশন বাটন থাকা বাধ্যতামূলক।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#171a25] border border-[#242838]">
                  <h4 className="text-sm font-bold text-[#deb473] mb-1">
                    ২. ইন্টারঅ্যাক্টিভ ডিজিটাল ফুড মেনু (Digital Visual Menu)
                  </h4>
                  <p>
                    পিডিএফ মেনু মোবাইল ব্যবহারকারীদের জন্য অত্যন্ত বিরক্তিকর। আমাদের ইন্টারঅ্যাক্টিভ মেনুতে ক্যাটাগরি ফিল্টার (স্টার্টার, বিরিয়ানি, গ্রিল), ঝালের মাত্রা (🌶️ স্পাইস মিটার), দাম (টাকায়), শেফের সিগনেচার ট্যাগ এবং নিরামিষ অপশন রয়েছে। গ্রাহক সরাসরি এখান থেকে আইটেম ব্যাগে যোগ করতে পারেন।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#171a25] border border-[#242838]">
                  <h4 className="text-sm font-bold text-[#deb473] mb-1">
                    ৩. শেফের বিশেষ পদ ও রন্ধন দর্শন (Chef's Story & Hygiene)
                  </h4>
                  <p>
                    মানুষ গল্প পছন্দ করে। শেফের অভিজ্ঞতা, মাটির হাঁড়িতে দম রান্না, খাঁটি জাফরান ও মশলার ব্যবহার রেস্তোরাঁকে সাধারণ হোটেল থেকে প্রিমিয়াম ফাইন ডাইনিং ব্র্যান্ডে রূপান্তর করে।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#171a25] border border-[#242838]">
                  <h4 className="text-sm font-bold text-[#deb473] mb-1">
                    ৪. অনলাইন টেবিল বুকিং ইঞ্জিন (Zero Hassle Table Reservation)
                  </h4>
                  <p>
                    গ্রাহক যেন ব্যস্ত ফোন লাইনে অপেক্ষা না করে সরাসরি তারিখ, সময় স্লট, অতিথি সংখ্যা এবং পছন্দের আসন (মেইন হল, প্রাইভেট বুথ, রুফটপ) নির্বাচন করে তাৎক্ষণিক কনফার্মেশন কোড পায়।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#171a25] border border-[#242838]">
                  <h4 className="text-sm font-bold text-[#deb473] mb-1">
                    ৫. সামাজিক প্রমাণ ও ফুড রিভিউ (Social Proof & Reviews)
                  </h4>
                  <p>
                    ফুড ক্রিটিক ও নিয়মিত অতিথিদের বাস্তব রিভিউ এবং ৪.৯ রেটিং নতুন কাস্টমারকে দ্বিধাদ্বন্দ্ব ছাড়াই টেবিল বুক করতে প্ররোচিত করে।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#171a25] border border-[#242838]">
                  <h4 className="text-sm font-bold text-[#deb473] mb-1">
                    ৬. লোকেশন, ম্যাপ ও সুবিধা (Location & Amenities)
                  </h4>
                  <p>
                    দুপুর ও রাতের সময়সূচি, বনানী রোড ১১-এর স্পষ্ট ডিরেকশন, ভ্যালেট পার্কিং সুবিধা, ওয়াইফাই এবং নামাজের স্থানের তথ্য ডিনারের সিদ্ধান্তকে সহজ করে।
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'navbar' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#171a25] border border-[#242838]">
                  <h4 className="text-sm font-bold text-[#deb473] mb-2">
                    ন্যাভবারের ডিজাইন কৌশল (৪টি মেনু + ১টি অ্যাকশন বাটন):
                  </h4>
                  <p className="mb-3">
                    ব্যবহারকারীর অনুরোধ অনুযায়ী ন্যাভবারে অতিরিক্ত লিংকের ভিড় না করে সুনির্দিষ্ট ৪টি ন্যাভিগেশন লিংক এবং ১টি হাই-কনভার্সন প্রাইমারি বাটন রাখা হয়েছে:
                  </p>
                  <ul className="space-y-2 list-disc list-inside text-[#cfc8bd]">
                    <li><strong className="text-[#f1ede6]">মেনু ১ (খাবার মেনু / Menu):</strong> কাস্টমার প্রথমেই খাবার ও দাম দেখতে চায়।</li>
                    <li><strong className="text-[#f1ede6]">মেনু ২ (শেফের বিশেষ পদ / Chef Specials):</strong> রেস্তোরাঁর বেস্টসেলার সিগনেচার ডিশসমূহ।</li>
                    <li><strong className="text-[#f1ede6]">মেনু ৩ (আমাদের ঐতিহ্য / Our Story):</strong> ব্র্যান্ডের নির্ভরযোগ্যতা ও রন্ধনশিল্পীদের পরিচিতি।</li>
                    <li><strong className="text-[#f1ede6]">মেনু ৪ (সময় ও অবস্থান / Hours & Contact):</strong> ডাইনিং খোলার সময়, ভ্যালেট পার্কিং ও গুগল ম্যাপ।</li>
                    <li><strong className="text-[#e4be79]">১টি প্রধান অ্যাকশন বাটন ('টেবিল বুকিং' / 'Book a Table'):</strong> গোল্ডেন অ্যাকসেন্ট কালারে তৈরি, যাতে ভিজিটরের চোখ সাথে সাথে বাটনে পড়ে এবং সরাসরি বুকিং বৃদ্ধি পায়।</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'business' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#171a25] border border-[#242838]">
                  <h4 className="text-sm font-bold text-[#deb473] mb-2">
                    রেস্তোরাঁ ব্যবসায় বেশি বিক্রি ও বুকিং আনার ৩টি টিপস:
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-[#f1ede6] block">১. কালার সাইকোলজি (ডার্ক ও ওয়ার্ম গোল্ড থিম):</strong>
                      <p>
                        গবেষণায় দেখা গেছে, ডিপ চারকোল ও ওয়ার্ম অ্যাম্বার বা গোল্ডেন আলোর টোন মানুষের ক্ষুধা উদ্দীপিত করে এবং খাবারকে আরও সুস্বাদু ও বিলাসবহুল মনে করায়।
                      </p>
                    </div>
                    <div>
                      <strong className="text-[#f1ede6] block">২. ডিজিটাল টেকঅ্যাওয়ে ও প্রি-অর্ডার ঝুড়ি (AOV বৃদ্ধি):</strong>
                      <p>
                        টেবিল বুকিংয়ের পাশাপাশি কাস্টমার খাবার সিলেক্ট করে টেকঅ্যাওয়ে বা টেবিলে বসে অগ্রিম অর্ডার দিতে পারে। এতে রেস্তোরাঁর গড় অর্ডার মূল্য (Average Order Value) বৃদ্ধি পায়।
                      </p>
                    </div>
                    <div>
                      <strong className="text-[#f1ede6] block">৩. মোবাইল রেসপন্সিভনেস (Mobile-First Experience):</strong>
                      <p>
                        রেস্তোরাঁর শতকরা ৮৫ ভাগ কাস্টমার ফোন থেকে ব্রাউজ করে। তাই প্রতিটি বাটন, ম্যাপ ও মেনু বৃদ্ধাঙ্গুলি দিয়ে এক ক্লিকেই ব্যবহারযোগ্য।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tech' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#171a25] border border-[#242838]">
                  <h4 className="text-sm font-bold text-[#deb473] mb-2">
                    টেকনিক্যাল আর্কিটেকচার (আপনার চাওয়া অনুযায়ী):
                  </h4>
                  <div className="space-y-2">
                    <p><strong className="text-[#f1ede6]">ফ্রন্টএন্ড:</strong> React 19 + TypeScript + Tailwind CSS v4 + Lucide Icons + Motion (স্মুথ এনিমেশন ও ইন্টারঅ্যাকশন)।</p>
                    <p><strong className="text-[#f1ede6]">ব্যাকএন্ড:</strong> Node.js ও Express (<code>server.ts</code>) যেখানে রিয়েল টাইম রিজার্ভেশন ও অর্ডার এপিআই রুট তৈরি করা হয়েছে (<code>/api/menu</code>, <code>/api/reservations</code>, <code>/api/orders</code>)।</p>
                    <p><strong className="text-[#f1ede6]">ডাটা স্টোরেজ ও সিঙ্ক:</strong> বুকিং ও অর্ডারের জন্য মেমোরি স্টোর এবং ব্যাকএন্ড ভ্যালিডেশন যা প্রোডাকশনে সহজে যেকোনো ডাটাবেসের সাথে যুক্ত করা সম্ভব।</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer close */}
          <div className="mt-6 pt-4 border-t border-[#202330] flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#c59d5f] text-black font-semibold text-xs rounded-md hover:brightness-110"
            >
              {lang === 'bn' ? 'বুঝতে পেরেছি' : 'Got it'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
