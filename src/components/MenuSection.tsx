import React, { useState, useMemo } from 'react';
import { MenuItem } from '../types/restaurant';
import { Search, Plus, Check, Flame, Leaf, Award, Clock, Coffee, ChevronDown, Sparkles } from 'lucide-react';

interface MenuSectionProps {
  items: MenuItem[];
  lang: 'bn' | 'en';
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ items, lang, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyChefSpecial, setOnlyChefSpecial] = useState<boolean>(false);
  const [onlyVegetarian, setOnlyVegetarian] = useState<boolean>(false);
  const [addedItemId, setAddedItemId] = useState<string | null>(null);
  
  // Show 15 items initially as explicitly requested by user
  const INITIAL_VISIBLE_COUNT = 15;
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT);

  const categories = [
    { id: 'all', labelBn: 'সকল পদ', labelEn: 'All Items' },
    { id: 'Coffee & Brews', labelBn: '☕ কফি লাউঞ্জ (৫০+)', labelEn: '☕ Coffee & Brews (50+)' },
    { id: 'Mains & Biryani', labelBn: 'প্রধান পদ ও বিরিয়ানি', labelEn: 'Mains & Biryani' },
    { id: 'Grills & Kebabs', labelBn: 'গ্রিল ও কাবাব', labelEn: 'Grills & Kebabs' },
    { id: 'Starters', labelBn: 'স্টার্টার ও রুটি', labelEn: 'Starters' },
    { id: 'Desserts & Drinks', labelBn: 'মিষ্টান্ন ও ডেজার্ট', labelEn: 'Desserts & Sweets' }
  ];

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setVisibleCount(INITIAL_VISIBLE_COUNT); // reset pagination when category changes
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Chef special toggle
      if (onlyChefSpecial && !item.isChefSpecial) {
        return false;
      }
      // Vegetarian toggle
      if (onlyVegetarian && !item.isVegetarian) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query) || item.nameBn.includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query) || item.descriptionBn.includes(query);
        return matchesName || matchesDesc;
      }
      return true;
    });
  }, [items, selectedCategory, onlyChefSpecial, onlyVegetarian, searchQuery]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemId(item.id);
    setTimeout(() => {
      setAddedItemId(null);
    }, 1200);
  };

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 15);
  };

  const handleShowAll = () => {
    setVisibleCount(filteredItems.length);
  };

  return (
    <section id="menu" className="py-24 bg-[#0e1015] border-t border-[#1f222c] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c59d5f] mb-2 font-medium">
            <span>{lang === 'bn' ? 'খাবার ও ৫০+ কফি' : 'Food & 50+ Specialty Coffees'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'bn' ? 'সম্পূর্ণ খাদ্যতালিকা' : 'Curated Menu'}</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#fbf9f5] mb-4">
            {lang === 'bn' ? 'আমাদের বিশেষ খাদ্য ও কফি তালিকা' : 'Our Artisanal Repertoire'}
          </h2>
          <p className="text-sm text-[#9b9589] leading-relaxed">
            {lang === 'bn'
              ? 'শাহী দম বিরিয়ানি, কয়লায় সেঁকা রসালো কাবাব এবং বিশ্বসেরা বিন থেকে প্রস্তুত ৫০টিরও বেশি স্পেশালিটি কফির এক অতুলনীয় সংগ্রহ।'
              : 'From slow-dum sealed biryanis and clay oven grills to over 50 single-origin and handcrafted artisanal coffee brews.'}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-[#202330]">
          {/* Category Tabs (Segmented Buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#151720] rounded-lg border border-[#252834] overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#c59d5f] text-black shadow-sm font-semibold'
                    : 'text-[#a59f93] hover:text-[#eae7e1] hover:bg-[#1f222e]'
                }`}
              >
                {lang === 'bn' ? cat.labelBn : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Quick Dietary toggles + Search */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-end flex-wrap">
            {/* Chef Special Filter */}
            <button
              onClick={() => {
                setOnlyChefSpecial(!onlyChefSpecial);
                setVisibleCount(INITIAL_VISIBLE_COUNT);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border transition-all cursor-pointer ${
                onlyChefSpecial
                  ? 'bg-[#c59d5f]/15 border-[#c59d5f] text-[#deb473]'
                  : 'bg-[#151720] border-[#252834] text-[#8e897e] hover:text-[#eae7e1]'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-[#c59d5f]" />
              <span>{lang === 'bn' ? 'শেফস স্পেশাল' : "Chef's Pick"}</span>
            </button>

            {/* Vegetarian Filter */}
            <button
              onClick={() => {
                setOnlyVegetarian(!onlyVegetarian);
                setVisibleCount(INITIAL_VISIBLE_COUNT);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border transition-all cursor-pointer ${
                onlyVegetarian
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-400'
                  : 'bg-[#151720] border-[#252834] text-[#8e897e] hover:text-[#eae7e1]'
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-500" />
              <span>{lang === 'bn' ? 'নিরামিষ (Veg)' : 'Vegetarian'}</span>
            </button>

            {/* Search Input */}
            <div className="relative min-w-[200px] flex-1 sm:flex-initial">
              <Search className="w-3.5 h-3.5 text-[#736e65] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={lang === 'bn' ? 'খাবার বা কফি খুঁজুন...' : 'Search food or coffee...'}
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full bg-[#151720] border border-[#252834] rounded-md pl-8 pr-3 py-1.5 text-xs text-[#eae7e1] placeholder-[#66625a] focus:outline-none focus:border-[#c59d5f]/60"
              />
            </div>
          </div>
        </div>

        {/* Counter Info Banner */}
        <div className="flex items-center justify-between text-xs text-[#8e897e] mb-6 px-1 font-mono tabular-nums">
          <div>
            {lang === 'bn' ? (
              <span>
                বর্তমানে <strong className="text-[#deb473]">{displayedItems.length}</strong>টি পদ প্রদর্শিত হচ্ছে (মোট <strong className="text-[#f1ede6]">{filteredItems.length}</strong>টির মধ্যে)
              </span>
            ) : (
              <span>
                Showing <strong className="text-[#deb473]">{displayedItems.length}</strong> of <strong className="text-[#f1ede6]">{filteredItems.length}</strong> items
              </span>
            )}
          </div>
          {selectedCategory === 'Coffee & Brews' && (
            <span className="text-[#c59d5f] flex items-center gap-1">
              <Coffee className="w-3.5 h-3.5" />
              {lang === 'bn' ? 'স্পেশালিটি কফি বার' : 'Artisanal Coffee Bar'}
            </span>
          )}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-[#232634] rounded-xl">
            <p className="text-sm text-[#9b9589]">
              {lang === 'bn'
                ? 'দুঃখিত, আপনার অনুসন্ধানের সাথে কোনো পদ মেলেনি।'
                : 'No dishes or coffees found matching your filter criteria.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setOnlyChefSpecial(false);
                setOnlyVegetarian(false);
                setVisibleCount(INITIAL_VISIBLE_COUNT);
              }}
              className="mt-4 px-4 py-2 text-xs text-[#c59d5f] hover:underline"
            >
              {lang === 'bn' ? 'ফিল্টার রিসেট করুন' : 'Reset all filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col bg-[#13151c] rounded-xl border border-[#222530] hover:border-[#c59d5f]/40 transition-all duration-300 overflow-hidden shadow-lg shadow-black/40 hover:-translate-y-1"
              >
                {/* Dish Image or Culinary/Coffee Graphic */}
                <div className="relative h-44 w-full bg-[#181a24] overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/hero_ambiance.jpg';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1c26] to-[#12131a] p-4 text-center">
                      <div className="w-11 h-11 rounded-full bg-[#252836] flex items-center justify-center text-[#c59d5f] mb-2 group-hover:scale-110 transition-transform">
                        {item.category === 'Coffee & Brews' ? (
                          <Coffee className="w-5 h-5 text-[#deb473]" />
                        ) : item.isVegetarian ? (
                          <Leaf className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <Flame className="w-5 h-5 text-amber-500" />
                        )}
                      </div>
                      <span className="text-[11px] text-[#7d776d] font-mono tracking-wider uppercase">
                        {lang === 'bn' ? item.categoryBn : item.category}
                      </span>
                    </div>
                  )}

                  {/* Top Corner Indicators */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    {item.isChefSpecial && (
                      <span className="bg-black/85 backdrop-blur-md text-[#deb473] text-[10px] font-semibold px-2 py-0.5 rounded border border-[#c59d5f]/30 flex items-center gap-1 shadow-sm">
                        <Award className="w-3 h-3 text-[#c59d5f]" />
                        <span>{lang === 'bn' ? 'স্পেশাল' : "Signature"}</span>
                      </span>
                    )}
                    {item.category === 'Coffee & Brews' && (
                      <span className="bg-black/85 backdrop-blur-md text-[#c59d5f] text-[10px] font-mono px-2 py-0.5 rounded border border-[#c59d5f]/20">
                        Artisan Roast
                      </span>
                    )}
                    {item.isVegetarian && item.category !== 'Coffee & Brews' && (
                      <span className="bg-black/85 backdrop-blur-md text-emerald-400 text-[10px] font-medium px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                        <Leaf className="w-3 h-3" />
                        <span>Veg</span>
                      </span>
                    )}
                  </div>

                  {/* Price Tag Overlay bottom-right */}
                  <div className="absolute bottom-2.5 right-2.5 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded border border-[#2e3240] text-right">
                    <span className="text-sm font-bold text-[#f3eee5] font-mono tabular-nums">
                      ৳ {item.price}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata row */}
                    <div className="flex items-center gap-2 text-[11px] text-[#8e897e] mb-2 font-mono tabular-nums">
                      <span className="flex items-center gap-1 text-[#deb473]">
                        ★ {item.rating} <span className="text-[#68645c]">({item.reviews})</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#7d776d]" /> {item.prepTime}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{item.calories}</span>
                    </div>

                    {/* Dish/Coffee Title */}
                    <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-[#f1ede6] group-hover:text-[#c59d5f] transition-colors leading-tight mb-1">
                      {lang === 'bn' ? item.nameBn : item.name}
                    </h3>

                    {/* English subtitle if in Bengali mode */}
                    {lang === 'bn' && (
                      <p className="text-[11px] text-[#7e796e] font-sans italic mb-2">
                        {item.name}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-xs text-[#a59f93] leading-relaxed line-clamp-2 mb-4">
                      {lang === 'bn' ? item.descriptionBn : item.description}
                    </p>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-3 border-t border-[#1e202b] flex items-center justify-between">
                    {/* Dietary / Spice or Roast note */}
                    <div className="flex items-center gap-1">
                      {item.spicyLevel > 0 ? (
                        <>
                          <span className="text-[10px] text-[#7d776d] mr-1">
                            {lang === 'bn' ? 'ঝাল:' : 'Spicy:'}
                          </span>
                          {Array.from({ length: 3 }).map((_, i) => (
                            <span
                              key={i}
                              className={`text-xs ${
                                i < item.spicyLevel ? 'text-amber-500' : 'text-[#2e3240]'
                              }`}
                            >
                              🌶
                            </span>
                          ))}
                        </>
                      ) : item.category === 'Coffee & Brews' ? (
                        <span className="text-[10px] text-[#deb473]/90 font-mono">
                          100% Arabica
                        </span>
                      ) : (
                        <span className="text-[10px] text-emerald-500/80">
                          {lang === 'bn' ? 'মৃদু স্বাদ' : 'Mild & Delicate'}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart / Order CTA */}
                    <button
                      onClick={() => handleAdd(item)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
                        addedItemId === item.id
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#1e212b] hover:bg-[#c59d5f] text-[#deb473] hover:text-black border border-[#2e3343] hover:border-transparent'
                      }`}
                    >
                      {addedItemId === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{lang === 'bn' ? 'যুক্ত হয়েছে' : 'Added'}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>{lang === 'bn' ? 'অর্ডার করুন' : 'Add to Order'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View More / বাকিগুলো দেখুন Controls (15 items initially shown) */}
        {filteredItems.length > visibleCount && (
          <div className="mt-12 text-center flex flex-col items-center justify-center gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleViewMore}
                className="px-8 py-3.5 bg-gradient-to-r from-[#c59d5f] to-[#deb473] text-black font-semibold text-xs tracking-wider rounded-lg shadow-lg hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>
                  {lang === 'bn'
                    ? `আরও ১৫টি পদ দেখুন (বাকি ${filteredItems.length - visibleCount}টি)`
                    : `View More (+15 Items, ${filteredItems.length - visibleCount} remaining)`}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <button
                onClick={handleShowAll}
                className="px-6 py-3.5 bg-[#171a25] hover:bg-[#202434] text-[#cfc8bd] hover:text-white border border-[#262a3b] text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                {lang === 'bn' ? `সবগুলো দেখুন (${filteredItems.length}টি)` : `Show All (${filteredItems.length})`}
              </button>
            </div>

            <p className="text-[11px] text-[#736e65]">
              {lang === 'bn'
                ? `প্রথমে ১৫টি পদ দেখানো হয়েছে; বাকি পদগুলো দেখার জন্য উপরের বাটনে ক্লিক করুন।`
                : `Initially showing 15 items; click above to explore the remaining handcrafted creations.`}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
