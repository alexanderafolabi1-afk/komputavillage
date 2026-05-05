import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Menu, X, MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../data/products'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-dark-bg/95 backdrop-blur border-b border-dark-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <div className="w-8 h-8 rounded-lg bg-electric flex items-center justify-center">
            <span className="text-black font-syne font-black text-sm">KV</span>
          </div>
          <span className="font-syne font-bold text-lg tracking-tight">
            KOMPUTA<span className="text-electric">VILLAGE</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-dm font-medium transition-colors ${
                    isActive
                      ? 'text-electric bg-electric/10'
                      : 'text-gray-400 hover:text-white hover:bg-dark-hover'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi KomputaVillage, I need help finding a product.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-sm font-dm font-medium text-[#25D366] hover:text-[#20bd5a] transition-colors"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>

          <Link
            to="/shop"
            className="relative p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Shop"
          >
            <ShoppingCart size={20} />
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark-card border-b border-dark-border animate-fade-in">
          <ul className="px-4 py-3 space-y-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-md text-sm font-dm font-medium transition-colors ${
                      isActive
                        ? 'text-electric bg-electric/10'
                        : 'text-gray-400 hover:text-white hover:bg-dark-hover'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi KomputaVillage, I need help.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-dm font-medium text-[#25D366]"
              >
                <MessageCircle size={16} />
                WhatsApp Support
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
