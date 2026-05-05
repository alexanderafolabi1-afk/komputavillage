import { Link } from 'react-router-dom'
import { MessageCircle, Mail, Instagram, Twitter, Facebook } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../data/products'

const shopLinks = [
  { to: '/shop?cat=iphones', label: 'iPhones' },
  { to: '/shop?cat=laptops', label: 'Laptops & MacBooks' },
  { to: '/shop?cat=consoles', label: 'Consoles' },
  { to: '/shop?cat=headsets', label: 'Headsets & Audio' },
  { to: '/shop?cat=laptop-parts', label: 'Laptop Parts' },
  { to: '/shop?cat=it-assets', label: 'IT Assets' },
]

const companyLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
  { to: '/shop', label: 'Browse All Stock' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border mt-auto">
      {/* WhatsApp CTA strip */}
      <div className="bg-[#128C7E]/10 border-b border-[#128C7E]/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-syne font-bold text-white text-lg">Ready to order?</p>
            <p className="font-dm text-gray-400 text-sm">Hit us on WhatsApp — we respond fast.</p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi KomputaVillage, I\'d like to place an order.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-dm font-semibold px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
          >
            <MessageCircle size={18} />
            WhatsApp Us Now
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-electric flex items-center justify-center">
                <span className="text-black font-syne font-black text-sm">KV</span>
              </div>
              <span className="font-syne font-bold text-lg">
                KOMPUTA<span className="text-electric">VILLAGE</span>
              </span>
            </Link>
            <p className="font-dm text-gray-500 text-sm leading-relaxed max-w-xs mb-4">
              Born from the Village. Built for Nigeria. We bring Grade A UK tech to your doorstep — iPhones, MacBooks, consoles and more.
            </p>
            <div className="flex items-center gap-2 text-sm font-dm text-gray-500">
              <Mail size={14} className="text-electric" />
              <span>hello@komputavillage.com</span>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-syne font-bold text-white text-sm mb-4 uppercase tracking-widest">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-dm text-gray-500 text-sm hover:text-electric transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-syne font-bold text-white text-sm mb-4 uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-2.5 mb-6">
              {companyLinks.map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-dm text-gray-500 text-sm hover:text-electric transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-electric transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter/X" className="text-gray-600 hover:text-electric transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-electric transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-dm text-gray-600 text-xs">
            © {new Date().getFullYear()} KomputaVillage. All rights reserved.
          </p>
          <p className="font-dm text-gray-600 text-xs text-center sm:text-right">
            Bank Transfer & Flutterwave accepted · Nationwide Nigeria Delivery
          </p>
        </div>
      </div>
    </footer>
  )
}
