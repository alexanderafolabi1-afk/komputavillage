import { useState } from 'react'
import { MessageCircle, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../data/products'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Build WhatsApp message from form
    const msg = `Hi KomputaVillage, my name is ${form.name} (${form.email}).\n\n${form.message}`
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      '_blank'
    )
    setSent(true)
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
      {/* Header */}
      <div className="max-w-xl mb-12">
        <p className="text-electric text-xs font-dm font-semibold uppercase tracking-widest mb-4">
          Get In Touch
        </p>
        <h1 className="font-syne font-black text-4xl sm:text-5xl text-white leading-tight mb-4">
          Talk to the Village.
        </h1>
        <p className="font-dm text-gray-400 text-base leading-relaxed">
          Questions about an item? Want to source something specific? Need a bulk order? We're on WhatsApp — fastest response guaranteed.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact info */}
        <div className="space-y-6">
          {/* WhatsApp CTA — primary */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi KomputaVillage, I need help with an order.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#128C7E]/10 border border-[#128C7E]/30 rounded-2xl p-5 hover:border-[#25D366]/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
              <MessageCircle size={22} className="text-white" />
            </div>
            <div>
              <p className="font-syne font-bold text-white text-sm mb-0.5">
                WhatsApp (Fastest)
              </p>
              <p className="font-dm text-gray-400 text-xs">
                +44 7700 900000 · Usually responds within minutes
              </p>
            </div>
            <span className="ml-auto text-[#25D366] font-dm text-xs font-medium group-hover:underline">
              Message →
            </span>
          </a>

          {/* Email */}
          <div className="flex items-center gap-4 bg-dark-card border border-dark-border rounded-2xl p-5">
            <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0">
              <Mail size={20} className="text-electric" />
            </div>
            <div>
              <p className="font-syne font-bold text-white text-sm mb-0.5">Email</p>
              <p className="font-dm text-gray-400 text-xs">hello@komputavillage.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 bg-dark-card border border-dark-border rounded-2xl p-5">
            <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0">
              <MapPin size={20} className="text-electric" />
            </div>
            <div>
              <p className="font-syne font-bold text-white text-sm mb-0.5">Delivery</p>
              <p className="font-dm text-gray-400 text-xs">
                Nationwide Nigeria · West Africa on request
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-4 bg-dark-card border border-dark-border rounded-2xl p-5">
            <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0">
              <Clock size={20} className="text-electric" />
            </div>
            <div>
              <p className="font-syne font-bold text-white text-sm mb-0.5">WhatsApp Hours</p>
              <p className="font-dm text-gray-400 text-xs">
                Mon–Sat: 8am – 9pm WAT · Sun: 10am – 6pm WAT
              </p>
            </div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-2xl p-5">
            <h3 className="font-syne font-bold text-white text-sm mb-3">Payment Methods</h3>
            <ul className="space-y-1.5">
              {['Bank Transfer (Nigerian accounts)', 'Flutterwave (Card, USSD, Bank)', 'USDT on request for international'].map(
                (method) => (
                  <li key={method} className="flex items-center gap-2 text-xs font-dm text-gray-400">
                    <CheckCircle2 size={13} className="text-electric flex-shrink-0" />
                    {method}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-8">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-electric/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={28} className="text-electric" />
              </div>
              <h3 className="font-syne font-bold text-xl text-white mb-2">Message Sent!</h3>
              <p className="font-dm text-gray-500 text-sm">
                Your WhatsApp should have opened with your message. We'll reply shortly.
              </p>
            </div>
          ) : (
            <>
              <h2 className="font-syne font-bold text-xl text-white mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-dm font-medium text-gray-400 mb-1.5 uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Emeka Okafor"
                    className="w-full px-4 py-3 bg-dark-hover border border-dark-border rounded-xl text-sm font-dm text-white placeholder-gray-600 focus:outline-none focus:border-electric/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-dm font-medium text-gray-400 mb-1.5 uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-dark-hover border border-dark-border rounded-xl text-sm font-dm text-white placeholder-gray-600 focus:outline-none focus:border-electric/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-dm font-medium text-gray-400 mb-1.5 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you looking for? Any specific product, quantity, or questions..."
                    className="w-full px-4 py-3 bg-dark-hover border border-dark-border rounded-xl text-sm font-dm text-white placeholder-gray-600 focus:outline-none focus:border-electric/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-syne font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={17} />
                  Send via WhatsApp
                </button>
                <p className="text-xs font-dm text-gray-600 text-center">
                  This opens WhatsApp with your message pre-filled
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
