'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search,
  MapPin,
  ChevronDown,
  EllipsisVertical,
  X,
  ChevronRight,
} from 'lucide-react';
import { CartIcon } from './CartIcon';
import { searchProducts, getProductBySlug, getAllProductSlugs } from '@/lib/productData'; // <-- adjust path if needed

export default function Navbar() {
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<null | number>(null);

  // Search state
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Mobile e-bikes accordion
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Dynamic categories from products
  const [categories, setCategories] = useState<any[]>([]);

  // Refs to detect outside click for search dropdown (desktop + mobile)
  const desktopSearchRef = useRef<HTMLDivElement | null>(null);
  const mobileSearchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch categories from products
  useEffect(() => {
    try {
      const slugs = getAllProductSlugs();
      const categoryMap = new Map();

      slugs.forEach((slug) => {
        const product = getProductBySlug(slug);
        if (product && product.category && Array.isArray(product.category)) {
          product.category.forEach((cat: string) => {
            if (!categoryMap.has(cat)) {
              categoryMap.set(cat, {
                name: formatCategoryName(cat),
                slug: cat,
                tagline: getCategoryTagline(cat),
                image: product.image || '/images/placeholder.png',
                description: '',
              });
            }
          });
        }
      });

      setCategories(Array.from(categoryMap.values()));
    } catch (err) {
      console.error('Error loading categories:', err);
    }
  }, []);

  // Helper function to format category names
  const formatCategoryName = (category: string): string => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Helper function to get category taglines
  const getCategoryTagline = (category: string): string => {
    const taglines: { [key: string]: string } = {
      'dyu': 'Smart Compact Mobility',
      'jobo': 'Adventure with Power',
      'lightweight': 'Easy to Carry & Ride',
      'commuter-ebike': 'Urban Mobility Enjoyment',
      'step-through': 'Comfort Inclusivity Safety',
      'folding': 'Fold Ride Conquer',
      'fat-tire': 'Stable Off-road All-Terrain',
      'cargo': 'More Power When Carrying Loads',
      'mtb': 'Power Technique Outstand',
    };
    return taglines[category] || 'Explore our collection';
  };

  // Debounced search: wait 250ms after user stops typing
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setShowResults(false);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const id = setTimeout(() => {
      try {
        const found = searchProducts(query);
        setResults(found || []);
        setShowResults(true);
      } catch (err) {
        console.error('searchProducts error', err);
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 250);

    return () => clearTimeout(id);
  }, [query]);

  // Close search dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideDesktop = desktopSearchRef.current?.contains(target);
      const insideMobile = mobileSearchRef.current?.contains(target);
      if (!insideDesktop && !insideMobile) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard: Escape closes results, Enter performs a full search page redirect
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setShowResults(false);
    } else if (e.key === 'Enter') {
      // Go to search page with query
      if (query.trim()) {
        router.push(`/search?query=${encodeURIComponent(query.trim())}`);
        setShowResults(false);
      }
    }
  };

  const navItems = [
    { name: 'E-Bikes', href: '/', dropdown: true },
    { name: 'Accessories', href: '/accessorie' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const moreMenuItems = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const toggleDropdown = (index: number) =>
    setActiveDropdown(activeDropdown === index ? null : index);

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const toggleMobileDropdown = () =>
    setMobileDropdownOpen((s) => !s);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white'
        }`}
      >
        {/* MOBILE */}
        <div className="md:hidden bg-white">
          {/* Mobile Header - Compact and Clean */}
          <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-100">
            <Link href="/" className="flex-shrink-0">
              <img src="/images/logo.jpg" alt="Logo" className="h-12 w-auto" />
            </Link>

            <div className="flex items-center space-x-3">
              <Link href="/cart" className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <CartIcon className="text-gray-700 w-5 h-5" />
              </Link>

              <button
                id="more-menu-button"
                onClick={toggleMoreMenu}
                className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
                aria-label="More menu"
              >
                <EllipsisVertical className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Mobile Search - Sleek Design */}
          <div className="px-3 py-3 bg-gray-50" ref={mobileSearchRef}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => { if (results.length) setShowResults(true); }}
                type="text"
                placeholder="Søk etter produkter..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#58c0c2] focus:ring-2 focus:ring-[#58c0c2]/20 transition-all"
              />

              {/* Mobile search results */}
              {showResults && results.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-72 overflow-y-auto z-50">
                  {results.slice(0, 8).map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      className="flex items-center justify-between px-3 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      onClick={() => {
                        setShowResults(false);
                        setQuery('');
                      }}
                    >
                      <div className="text-left flex-1 min-w-0 pr-3">
                        <div className="text-sm font-medium text-black truncate">{product.name}</div>
                        {product.price !== undefined && (
                          <div className="text-xs text-gray-500 mt-0.5">
                            {typeof product.price === 'number' ? `${product.price} kr` : product.price}
                          </div>
                        )}
                      </div>
                      <img
                        src={product.image || '/images/placeholder.png'}
                        alt={product.name}
                        className="w-14 h-14 object-contain rounded-md border border-gray-200 flex-shrink-0"
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation - Modern Card Style */}
          <div className="px-3 py-3 bg-white space-y-2">
            {/* E-Bikes Dropdown */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                onClick={toggleMobileDropdown}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
              >
                <span className="text-sm">E-Bikes</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
                    mobileDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileDropdownOpen && (
                <div className="px-2 pb-2 space-y-2 bg-white">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/category/${cat.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all group border border-gray-100"
                      onClick={() => setMobileDropdownOpen(false)}
                    >
                      <div className="flex-1 min-w-0 pr-3">
                        <div className="flex items-center gap-1.5">
                          <p className="text-sm font-semibold text-gray-900 truncate">{cat.name}</p>
                          <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#58c0c2] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 truncate">{cat.tagline}</p>
                      </div>
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-14 h-14 object-contain rounded-md border border-gray-200 flex-shrink-0"
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Navigation Items */}
            {navItems
              .filter((i) => i.name !== 'E-Bikes')
              .map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/">
                <img src="/images/logo.jpg" alt="Logo" className="w-36" />
              </Link>

              {/* Desktop Search (with results dropdown) */}
              <div className="hidden md:flex flex-1 max-w-lg mx-8 relative" ref={desktopSearchRef}>
                <div className="relative w-full">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => { if (results.length) setShowResults(true); }}
                    type="text"
                    placeholder="Hva leter du etter?"
                    className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-[#58c0c2] focus:ring-1 focus:ring-[#58c0c2]"
                  />
                  <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>

                {/* Desktop results dropdown */}
                {showResults && results.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200 z-50 max-h-72 overflow-y-auto">
                    {results.slice(0, 8).map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          setShowResults(false);
                          setQuery('');
                        }}
                      >
                        <div className="text-left">
                          <div className="text-sm font-medium text-black">{product.name}</div>
                          {product.price !== undefined && (
                            <div className="text-xs text-gray-500 mt-1">
                              {typeof product.price === 'number' ? `${product.price} kr` : product.price}
                            </div>
                          )}
                        </div>

                        <img
                          src={product.image || '/images/placeholder.png'}
                          alt={product.name}
                          className="w-12 h-12 object-contain rounded-md border border-gray-200 ml-2"
                        />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Right side icons */}
              <div className="flex items-center space-x-4 relative">
                <Link href="/" className="text-black hover:text-[#58c0c2] transition-colors flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Norge
                </Link>
                <Link href="/cart">
                  <CartIcon className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-black transition-colors" />
                </Link>

                {/* More menu button */}
                <button onClick={toggleMoreMenu} className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors p-2">
                  <EllipsisVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Desktop nav: hover dropdown for E-Bikes */}
            <div className="relative">
              <div className="flex space-x-8 py-4 text-lg">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => item.dropdown && toggleDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown ? (
                      <button
                        className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors duration-200 cursor-pointer"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                      </Link>
                    )}

                    {/* Dropdown for E-Bikes on desktop - JOBOBIKE Style */}
                    {item.dropdown && activeDropdown === index && (
                      <div className="absolute left-0 top-full mt-2 bg-white shadow-2xl rounded-xl border border-gray-100 z-50 min-w-[700px] max-h-[500px] overflow-hidden flex flex-col">
                        {/* Title Section - Fixed */}
                        <div className="px-8 pt-8 pb-4 border-b border-gray-200 flex-shrink-0">
                          <h3 className="text-2xl font-bold text-gray-900">Browse by Category</h3>
                          <p className="text-sm text-gray-600 mt-1">Explore our complete e-bike collection</p>
                        </div>

                        {/* Categories Grid - Scrollable with custom scrollbar */}
                        <div className="overflow-y-auto flex-1 px-8 py-6 custom-scrollbar">
                          <div className="grid grid-cols-3 gap-6">
                            {categories.map((cat) => (
                              <Link
                                key={cat.slug}
                                href={`/category/${cat.slug}`}
                                className="group flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
                              >
                                {/* Image Container */}
                                <div className="w-full h-32 mb-4 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden group-hover:bg-white transition-colors">
                                  <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                                  />
                                </div>

                                {/* Category Info */}
                                <div className="w-full">
                                  <div className="flex items-center justify-center gap-1 mb-2">
                                    <h4 className="text-base font-bold text-gray-900 group-hover:text-[#58c0c2] transition-colors">
                                      {cat.name}
                                    </h4>
                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#58c0c2] group-hover:translate-x-1 transition-all" />
                                  </div>
                                  <p className="text-xs text-gray-500 leading-relaxed">
                                    {cat.tagline}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* View All Link - Fixed */}
                        <div className="px-8 py-4 border-t border-gray-200 text-center flex-shrink-0">
                          <Link
                            href="/cycle"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#58c0c2] hover:text-[#45a0a2] transition-colors"
                          >
                            View All E-Bikes
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>

                        {/* Custom Scrollbar Styles */}
                        <style jsx>{`
                          .custom-scrollbar::-webkit-scrollbar {
                            width: 6px;
                          }
                          .custom-scrollbar::-webkit-scrollbar-track {
                            background: #f1f1f1;
                            border-radius: 10px;
                          }
                          .custom-scrollbar::-webkit-scrollbar-thumb {
                            background: #58c0c2;
                            border-radius: 10px;
                          }
                          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                            background: #45a0a2;
                          }
                          .custom-scrollbar {
                            scrollbar-width: thin;
                            scrollbar-color: #58c0c2 #f1f1f1;
                          }
                        `}</style>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Right-side drawer for More Menu */}
      {isMoreMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-30">
          <div className="w-80 bg-white h-full shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-700">More Options</h2>
              <button onClick={toggleMoreMenu}>
                <X className="w-5 h-5 text-gray-600 hover:text-black" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {moreMenuItems.map((item) => (
                <Link key={item.name} href={item.href} className="block text-gray-700 hover:text-black" onClick={toggleMoreMenu}>
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="absolute bottom-0 w-full p-4 border-t text-center text-sm text-gray-500">Need help? Contact our support team</div>
          </div>
        </div>
      )}
    </>
  );
}