import { Link } from 'react-router-dom'
import { ArrowRight, Package, Users, Globe, Zap } from 'lucide-react'

const stats = [
  { value: '60+', label: 'Products in stock' },
  { value: '100%', label: 'UK-sourced inventory' },
  { value: 'Grade A/B', label: 'Tested & certified' },
  { value: '36 States', label: 'Nationwide delivery' },
]

const values = [
  {
    icon: Package,
    title: 'Honest Grading',
    desc: 'We grade every item ourselves before listing. Grade A means Grade A — not "looks ok from a distance".',
  },
  {
    icon: Users,
    title: 'People First',
    desc: 'Real WhatsApp support, not bots. You talk to someone who knows the stock and can give you real answers.',
  },
  {
    icon: Globe,
    title: 'UK Quality, Naira Price',
    desc: 'We cut out the middlemen and bring you UK-grade tech at a price that makes sense for Nigeria.',
  },
  {
    icon: Zap,
    title: 'Fast Dispatch',
    desc: 'Order confirmed, payment received — your item ships within 24 hours. No long wait, no drama.',
  },
]

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
      {/* Hero */}
      <div className="max-w-2xl mb-16">
        <p className="text-electric text-xs font-dm font-semibold uppercase tracking-widest mb-4">
          Our Story
        </p>
        <h1 className="font-syne font-black text-4xl sm:text-5xl text-white leading-tight mb-6">
          Born from the Village.{' '}
          <span className="text-electric">Built for Nigeria.</span>
        </h1>
        <div className="space-y-4 font-dm text-gray-400 text-base leading-relaxed">
          <p>
            KomputaVillage started with one observation: the best tech in Nigeria was overpriced, overhyped, or just hard to find. Meanwhile, UK businesses were retiring Grade A MacBooks, iPhones, and consoles by the container load — perfectly functional, just out of cycle.
          </p>
          <p>
            We built a direct pipeline from UK suppliers to Nigerian customers. No grey market, no ambiguity. Every item is graded, tested, and described honestly before it reaches you.
          </p>
          <p>
            The name is a nod to Computer Village, Lagos — the beating heart of Nigeria's tech hustle. We carry that energy into a proper online storefront, because the Village deserves a professional shop.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="bg-dark-card border border-dark-border rounded-2xl p-5 text-center"
          >
            <p className="font-syne font-black text-2xl sm:text-3xl text-electric mb-1">{value}</p>
            <p className="font-dm text-gray-500 text-xs">{label}</p>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="font-syne font-black text-2xl sm:text-3xl text-white mb-8">
          How We Operate
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 bg-dark-card border border-dark-border rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon size={20} className="text-electric" />
              </div>
              <div>
                <h3 className="font-syne font-bold text-white text-base mb-2">{title}</h3>
                <p className="font-dm text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grade system */}
      <div className="mb-16 bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-8">
        <h2 className="font-syne font-black text-xl text-white mb-6">The Grade System</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-electric text-black text-xs font-syne font-bold px-2.5 py-1 rounded-lg">
                Grade A
              </span>
            </div>
            <p className="font-dm text-gray-400 text-sm leading-relaxed">
              Immaculate or near-immaculate condition. No visible scratches. Perfect screen. Battery health 80%+. All features working perfectly. This is the standard we hold ourselves to — if it doesn't pass, it doesn't get listed as A.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-village text-black text-xs font-syne font-bold px-2.5 py-1 rounded-lg">
                Grade B
              </span>
            </div>
            <p className="font-dm text-gray-400 text-sm leading-relaxed">
              Light cosmetic marks from normal use — think light scuffs on a chassis or faint wear on a palm rest. Everything works perfectly. Grade B items are priced to reflect their cosmetics, not their performance. They'll serve you just as well.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="font-syne font-black text-2xl text-white mb-3">Ready to shop?</h2>
        <p className="font-dm text-gray-500 text-sm mb-6">
          Browse our live stock — updated regularly as new UK shipments arrive.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-electric text-black font-syne font-bold px-7 py-3.5 rounded-xl hover:bg-electric/90 transition-all"
        >
          Browse All Stock <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  )
}
