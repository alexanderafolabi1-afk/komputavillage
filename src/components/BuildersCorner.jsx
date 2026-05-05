import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Layers, HardDrive, Zap } from 'lucide-react'
import ProductCard from './ProductCard'
import { products, formatPrice, getWhatsAppLink } from '../data/products'

const sections = [
  {
    icon: Cpu,
    label: 'CPUs',
    ids: ['cpu-i5-8400', 'cpu-i7-8700', 'cpu-ryzen-5-3600', 'cpu-i7-10700'],
  },
  {
    icon: Zap,
    label: 'GPUs',
    ids: ['gpu-gtx-1060', 'gpu-rtx-2060', 'gpu-rx-580', 'gpu-gtx-1650'],
  },
  {
    icon: Layers,
    label: 'RAM',
    ids: ['dram-16gb-ddr4', 'dram-8gb-ddr4', 'lram-16gb-ddr4', 'lram-8gb-ddr4'],
  },
  {
    icon: HardDrive,
    label: 'SSDs',
    ids: ['ssd-512gb-nvme', 'ssd-1tb-nvme', 'ssd-256gb-nvme', 'ssd-480gb-sata'],
  },
]

export default function BuildersCorner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-5 rounded-full bg-electric" />
            <span className="text-electric text-xs font-dm font-semibold uppercase tracking-widest">
              Builder's Corner
            </span>
          </div>
          <h2 className="font-syne font-black text-2xl sm:text-3xl text-white">
            Components for Your Build
          </h2>
          <p className="font-dm text-gray-500 text-sm mt-1">
            CPUs, GPUs, RAM and SSDs — UK-pulled and tested
          </p>
        </div>
        <Link
          to="/shop?cat=desktop-components"
          className="hidden sm:flex items-center gap-1 text-electric text-sm font-dm font-medium hover:gap-2 transition-all whitespace-nowrap"
        >
          All components <ArrowRight size={16} />
        </Link>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {sections.map(({ icon: Icon, label, ids }) => {
          const items = ids.map((id) => products.find((p) => p.id === id)).filter(Boolean)
          if (!items.length) return null
          return (
            <div key={label}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-electric/10 flex items-center justify-center">
                  <Icon size={15} className="text-electric" />
                </div>
                <span className="font-syne font-bold text-white text-sm">{label}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Link
          to="/shop?cat=desktop-components"
          className="inline-flex items-center gap-1 text-electric text-sm font-dm font-medium"
        >
          View all desktop components <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
