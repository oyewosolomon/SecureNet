import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Lock } from 'lucide-react';

type MenuItem = {
  label: string;
  submenu?: string[];
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuItem[] = [
    {
      label: 'Solutions',
      submenu: ['AI Surveillance', 'Access Control', 'Threat Detection', 'Integration Services']
    },
    {
      label: 'Industries',
      submenu: ['Retail', 'Banking', 'Healthcare', 'Government', 'Education']
    },
    { label: 'Products' },
    { label: 'Resources' },
    { label: 'Company' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Lock className={`w-8 h-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              SecureNet
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className={`flex items-center space-x-1 py-2 ${
                    isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
                  }`}
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.label}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {item.submenu && activeDropdown === item.label && (
                  <div 
                    className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 transform opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-2 group-hover:translate-y-0"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className={`px-4 py-2 rounded-lg transition-all ${
              isScrolled 
                ? 'text-gray-600 hover:text-gray-900' 
                : 'text-white hover:text-gray-200'
            }`}>
              Login
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen 
              ? <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              : <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            }
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4">
            {menuItems.map((item, index) => (
              <div key={index}>
                <button className="w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900">
                  {item.label}
                </button>
                {item.submenu && (
                  <div className="pl-8 space-y-2 mt-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block py-1 text-gray-500 hover:text-blue-600"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="space-y-2 pt-4 border-t">
              <button className="w-full px-4 py-2 text-gray-600 hover:text-gray-900">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;