import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Smartphone, Laptop, Gamepad2, Headphones, Server, HardDrive, Monitor } from 'lucide-react'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import BuildersCorner from '../components/BuildersCorner'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const categoryCards = [
  { id: 'laptop-parts', label: 'Laptop Parts', desc: 'CPUs, RAM, SSDs, screens, fans', icon: Laptop, color: 'from-electric/20' },
  { id: 'desktop-components', label: 'Desktop Components', desc: 'CPUs, GPUs, RAM, motherboards', icon: Cpu, color: 'from-village/20' },
  { id: 'phone-parts', label: 'Phone Parts', desc: 'iPhone & Samsung screens, cameras', icon: Smartphone, color: 'from-blue-500/20' },
  { id: 'server-enterprise', label: 'Server / Enterprise', desc: 'RAID, NICs, SAS drives, KVM', icon: Server, color: 'from-purple-500/20' },
  { id: 'iphones', label: 'Complete iPhones', desc: 'Grade A/B UK iPhones, unlocked', icon: Smartphone, color: 'from-pink-500/20' },
  { id: 'laptops', label: 'Laptops & MacBooks', desc: 'MacBooks, Dell, HP, Lenovo', icon: Laptop, color: 'from-orange-500/20' },
  { id: 'consoles', label: 'Consoles', desc: 'PS5, Xbox, Nintendo Switch', icon: Gamepad2, color: 'from-indigo-500/20' },
  { id: 'headsets', label: 'Audio & Headsets', desc: 'AirPods, Sony, Bose, JBL', icon: Headphones, color: 'from-teal-500/20' },
  { id: 'it-assets', label: 'IT Assets', desc: 'Monitors, peripherals, routers', icon: Monitor, color: 'from-red-500/20' },
]

// Featured complete devices (2 per category)
const featuredDevices = [
  ...products.filter((p) => p.category === 'iphones').slice(0, 2),
  ...products.filter((p) => p.category === 'laptops').slice(0, 2),
  ...products.filter((p) => p.category === 'consoles').slice(0, 2),
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Builder's Corner */}
      <BuildersCorner />

      {/* Why KomputaVillage */}
      <section className="bg-dark-card border-y border-dark-border py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-5 rounded-full bg-village" />
              <span className="text-village text-xs font-dm font-semibold uppercase tracking-widest">
                Why KomputaVillage?
              </span>
            </div>
            <h2 className="font-syne font-black text-2xl sm:text-3xl text-white mb-5 leading-tight">
              We deconstruct end-of-life UK IT equipment{' '}
              <span className="text-electric">so you don't have to.</span>
            </h2>
            <p className="font-dm text-gray-400 text-base leading-relaxed mb-8">
              Every SSD, CPU, camera module and GPU is pulled from UK corporate and consumer tech, tested individually, graded, and listed — so you get the part you need without the gamble.
              Built for the people who build Nigeria's systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { stat: '143+', label: 'Parts in stock', sub: 'Across 9 categories' },
                { stat: 'Grade A/B', label: 'Every item graded', sub: 'No mystery condition' },
                { stat: '24hr', label: 'Dispatch turnaround', sub: 'After confirmed payment' },
              ].map(({ stat, label, sub }) => (
                <div key={label} className="bg-dark-hover border border-dark-border rounded-2xl p-5">
                  <p className="font-syne font-black text-2xl text-electric mb-1">{stat}</p>
                  <p className="font-dm font-semibold text-white text-sm">{label}</p>
                  <p className="font-dm text-gray-500 text-xs">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Complete Devices */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-syne font-black text-2xl sm:text-3xl text-white">
              Complete Devices
            </h2>
            <p className="font-dm text-gray-500 text-sm mt-1">
              iPhones, MacBooks and consoles — whole and ready to go
            </p>
          </div>
          <Link
            to="/shop?cat=iphones"
            className="flex items-center gap-1 text-electric text-sm font-dm font-medium hover:gap-2 transition-all"
          >
            Browse <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {featuredDevices.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-dark-card border-y border-dark-border py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-syne font-black text-2xl sm:text-3xl text-white mb-2">
              Shop by Category
            </h2>
            <p className="font-dm text-gray-500 text-sm">Everything the Village carries</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {categoryCards.map(({ id, label, desc, icon: Icon, color }) => (
              <Link
                key={id}
                to={`/shop?cat=${id}`}
                className="group relative overflow-hidden bg-dark-hover border border-dark-border rounded-2xl p-5 hover:border-electric/30 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-dark-bg flex items-center justify-center mb-4 group-hover:bg-electric/10 transition-colors">
                    <Icon size={20} className="text-gray-400 group-hover:text-electric transition-colors" />
                  </div>
                  <h3 className="font-syne font-bold text-white text-sm sm:text-base mb-1">{label}</h3>
                  <p className="font-dm text-gray-500 text-xs">{desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-electric text-xs font-dm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Browse <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      {/* WhatsApp CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-syne font-black text-2xl sm:text-3xl text-white mb-3">
            Need a specific part?
          </h2>
          <p className="font-dm text-gray-500 text-sm sm:text-base mb-6">
            We source on request from UK suppliers. Tell us what you need and we'll find it.
          </p>
          <a
            href="https://wa.me/447700900000?text=Hi%2C%20I%27m%20looking%20for%20a%20specific%20part%20from%20KomputaVillage."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-syne font-bold px-7 py-3.5 rounded-xl transition-all active:scale-95"
          >
            <WhatsAppIcon />
            Message Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
