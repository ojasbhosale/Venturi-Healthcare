import Image from 'next/image';
import { Facebook, Linkedin, Instagram, Phone, MapPin, Heart, Users } from 'lucide-react';

export default function Footer() {
  const locations = [
    { name: 'Sandy Banks', phone: '01772 494 000' },
    { name: 'Burgess Manor', phone: '01704 544 242' },
    { name: 'Blair House', phone: '01704 500 123' },
    { name: 'Byron Court', phone: '0151 922 0398' },
    { name: 'Ash Grove', phone: '01282 416475' },
    { name: 'Mother Redcaps', phone: '0151 639 5886' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' }
  ];

  const quickLinks = [
    'About Us', 'Our Values', 'Care Services', 'Careers', 'Contact Us', 'Privacy Policy'
  ];

  return (
    <footer className="bg-gradient-to-br from-venturi-navy via-venturi-slate to-venturi-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo and Head Office */}
          <div className="lg:col-span-2 space-y-6">
            <div className="hover-lift inline-block">
              <Image
                src="/logo.png"
                alt="Venturi Healthcare"
                width={180}
                height={60}
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Heart className="h-5 w-5 text-venturi-coral" />
                <span className="font-semibold text-venturi-coral">The People Company</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Delivering compassionate, person-centred care that honours the lives and legacies 
                of our residents and their families.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-6 w-6 text-venturi-coral flex-shrink-0" />
                <h3 className="text-lg text-white font-bold">HEAD OFFICE</h3>
              </div>
              
              <div className="space-y-1 text-gray-300 mb-4">
                <p>Ground Floor, Unit 10,</p>
                <p>Sceptre Court, Sceptre Way,</p>
                <p>Bamber Bridge,</p>
                <p>Lancs, PR5 6AW</p>
              </div>
              
              <div className="flex items-center space-x-3 mb-6">
                <Phone className="h-5 w-5 text-venturi-coral" />
                <a href="tel:01772321480" className="text-xl font-bold hover:text-venturi-coral transition-colors duration-200">
                  01772 321480
                </a>
              </div>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-white font-bold mb-6 flex items-center">
              <Users className="h-5 w-5 text-venturi-coral mr-2" />
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-300 hover:text-venturi-coral transition-colors duration-200 people-focus"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* Our Locations */}
          <div>
            <h3 className="text-lg text-white font-bold mb-6 flex items-center">
              <MapPin className="h-5 w-5 text-venturi-coral mr-2" />
              Our Locations
            </h3>
            <div className="space-y-4">
              {locations.map((location, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover-lift"
                >
                  <p className="font-semibold text-white mb-1">{location.name}</p>
                  <a 
                    href={`tel:${location.phone.replace(/\s/g, '')}`}
                    className="text-gray-300 hover:text-venturi-coral transition-colors duration-200 text-sm flex items-center"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {location.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mb-12">
          <div className="bg-venturi-coral/10 backdrop-blur-sm rounded-2xl p-8 border border-venturi-coral/20 text-center">
            <h3 className="text-2xl text-white font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for updates on our care services, company news, and community stories.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-2 sm:px-4 py-3 rounded-l-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-venturi-coral focus:border-transparent"
              />
              <button className="bg-venturi-coral hover:bg-venturi-orange px-3 sm:px-6 py-3 rounded-r-xl font-medium transition-all duration-300 hover-lift">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-xl font-bold">VENTURI HEALTHCARE</p>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-venturi-coral" />
                <span className="text-sm text-gray-300">Putting People First Since Day One</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <p>© 2024 Venturi Healthcare. All rights reserved.</p>
              <a href="#" className="hover:text-venturi-coral transition-colors duration-200">
                Website by Kau Media Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}