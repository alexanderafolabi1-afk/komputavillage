import { Shield, Zap, MessageCircle, Truck, Award } from 'lucide-react'

const items = [
  {
    icon: Shield,
    title: 'UK-Sourced Stock',
    desc: 'Every unit imported directly from verified UK suppliers and businesses.',
  },
  {
    icon: Award,
    title: 'Tested & Graded',
    desc: 'All items graded A or B after thorough testing. No surprises on delivery.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Order Support',
    desc: 'Real humans on WhatsApp. Order, track, and ask questions instantly.',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    desc: 'We ship to Lagos, Abuja, Port Harcourt, Kano and every state in Nigeria.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    desc: 'Most orders dispatched within 24 hours of confirmed payment.',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-dark-card border-y border-dark-border py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-syne font-black text-2xl sm:text-3xl text-white mb-2">
            Why Buy From The Village?
          </h2>
          <p className="font-dm text-gray-500 text-sm">
            Real stock. Real grades. Real people behind every order.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-start gap-3 p-5 bg-dark-hover rounded-2xl border border-dark-border hover:border-electric/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-electric" />
              </div>
              <div>
                <h3 className="font-syne font-bold text-sm text-white mb-1">{title}</h3>
                <p className="font-dm text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
