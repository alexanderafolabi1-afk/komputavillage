import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Truck, MessageCircle, BadgeCheck, Wrench } from 'lucide-react'

const trustItems = [
  { icon: Shield, label: 'UK End-of-Life Stock' },
  { icon: BadgeCheck, label: 'Tested Before Dispatch' },
  { icon: MessageCircle, label: 'WhatsApp Support' },
  { icon: Truck, label: 'Nationwide Delivery' },
  { icon: Wrench, label: 'Builder & Repair Friendly' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark-bg">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#00FF6A 1px, transparent 1px), linear-gradient(90deg, #00FF6A 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-village/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 sm:pt-28 sm:pb-16">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-electric/10 border border-electric/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
          <span className="text-electric text-xs font-dm font-semibold tracking-widest uppercase">
            UK End-of-Life Stock · Deconstructed & Graded
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-syne font-black text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight mb-4">
          Every Part.{' '}
          <br className="hidden sm:block" />
          <span className="text-electric">Every Build.</span>
        </h1>

        <p className="font-dm text-gray-400 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed">
          UK-Sourced Components for Nigeria's Builders and Repair Pros. CPUs, GPUs, screens, phone parts, server kit — tested, graded, ready.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-14">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 bg-electric text-black font-syne font-bold px-7 py-3.5 rounded-xl hover:bg-electric/90 transition-all active:scale-95 text-base"
          >
            Browse Components
            <ArrowRight size={18} />
          </Link>
          <a
            href="https://wa.me/447700900000?text=Hi%20KomputaVillage%2C%20I%20need%20help%20finding%20a%20part."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-dark-card border border-dark-border text-white font-dm font-medium px-7 py-3.5 rounded-xl hover:border-[#25D366]/50 hover:text-[#25D366] transition-all active:scale-95 text-base"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
        </div>

        {/* Trust bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 border-t border-dark-border pt-8">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm font-dm text-gray-400">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center">
                <Icon size={16} className="text-electric" />
              </div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
