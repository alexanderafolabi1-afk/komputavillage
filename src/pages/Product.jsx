import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, AlertCircle, XCircle } from 'lucide-react'
import { products, getWhatsAppLink, formatPrice } from '../data/products'
import ProductCard from '../components/ProductCard'
import ImageGallery from '../components/ImageGallery'

const stockConfig = {
  'in-stock': { label: 'In Stock', icon: CheckCircle2, color: 'text-electric' },
  'low-stock': { label: 'Low Stock — Order Fast', icon: AlertCircle, color: 'text-village' },
  'sold-out': { label: 'Sold Out', icon: XCircle, color: 'text-red-400' },
}

const gradeConfig = {
  A: {
    label: 'Grade A',
    badge: 'bg-electric text-black',
    points: [
      'No visible scratches or damage',
      'Fully functional — all features tested',
      '80%+ battery/capacity health',
      'Clean contacts and connectors',
      'Pulled from certified UK end-of-life stock',
    ],
  },
  B: {
    label: 'Grade B',
    badge: 'bg-village text-black',
    points: [
      'Light cosmetic marks from normal use',
      'All core features fully functional',
      'May have minor scuffs on housing',
      'Tested before dispatch',
      'Priced to reflect cosmetics, not performance',
    ],
  },
}

export default function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="font-syne font-bold text-2xl text-white mb-3">Product not found</p>
        <Link to="/shop" className="text-electric font-dm text-sm underline underline-offset-4">
          Back to shop
        </Link>
      </div>
    )
  }

  const { name, spec, grade, price, images, stock, category, subcategory } = product
  const gradeInfo = gradeConfig[grade] || gradeConfig['A']
  const stockInfo = stockConfig[stock] || stockConfig['in-stock']
  const StockIcon = stockInfo.icon
  const isSoldOut = stock === 'sold-out'

  const related = products
    .filter((p) => p.category === category && p.id !== id)
    .slice(0, 4)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 hover:text-white text-sm font-dm transition-colors mb-6"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Image gallery */}
        <ImageGallery images={images} name={name} />

        {/* Details */}
        <div className="flex flex-col gap-5">
          <p className="text-xs font-dm text-gray-500 uppercase tracking-widest">
            {subcategory || category}
          </p>

          <div>
            <h1 className="font-syne font-black text-3xl sm:text-4xl text-white leading-tight mb-2">
              {name}
            </h1>
            <p className="font-dm text-gray-400 text-sm">{spec}</p>
          </div>

          <p className="font-syne font-black text-4xl text-electric">
            {formatPrice(price)}
          </p>

          <div className={`flex items-center gap-2 text-sm font-dm font-medium ${stockInfo.color}`}>
            <StockIcon size={16} />
            {stockInfo.label}
          </div>

          {/* Grade info */}
          <div className="bg-dark-card border border-dark-border rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-syne font-bold px-2.5 py-1 rounded-lg ${gradeInfo.badge}`}>
                {gradeInfo.label}
              </span>
              <span className="text-xs font-dm text-gray-500">What this means</span>
            </div>
            <ul className="space-y-1.5">
              {gradeInfo.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-xs font-dm text-gray-400">
                  <CheckCircle2 size={13} className="text-electric mt-0.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          {isSoldOut ? (
            <div className="space-y-3">
              <button disabled className="w-full py-3.5 rounded-xl bg-dark-border text-gray-500 font-dm font-medium cursor-not-allowed">
                Sold Out
              </button>
              <a
                href={`https://wa.me/447700900000?text=${encodeURIComponent(`Hi, the ${name} is sold out. When will it be back in stock?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl border border-[#25D366]/40 text-[#25D366] font-dm font-medium flex items-center justify-center gap-2 hover:bg-[#25D366]/10 transition-colors"
              >
                <WhatsAppIcon />
                Notify Me When Back In Stock
              </a>
            </div>
          ) : (
            <a
              href={getWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-syne font-bold flex items-center justify-center gap-2.5 transition-colors active:scale-[0.99] text-base"
            >
              <WhatsAppIcon size={18} />
              Order via WhatsApp
            </a>
          )}

          <p className="text-xs font-dm text-gray-600 text-center">
            Bank Transfer & Flutterwave accepted · Nationwide delivery
          </p>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div>
          <h2 className="font-syne font-black text-xl text-white mb-5">
            More {subcategory || category}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
