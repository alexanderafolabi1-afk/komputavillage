import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import CategoryFilter from '../components/CategoryFilter'
import { products, categories } from '../data/products'

const priceRanges = [
  { id: 'all', label: 'All Prices' },
  { id: 'under50', label: 'Under ₦50k' },
  { id: '50-200', label: '₦50k – ₦200k' },
  { id: '200-500', label: '₦200k – ₦500k' },
  { id: 'over500', label: 'Over ₦500k' },
]

function matchesPriceRange(price, rangeId) {
  if (rangeId === 'all') return true
  if (rangeId === 'under50') return price < 50000
  if (rangeId === '50-200') return price >= 50000 && price <= 200000
  if (rangeId === '200-500') return price > 200000 && price <= 500000
  if (rangeId === 'over500') return price > 500000
  return true
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [priceRange, setPriceRange] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  const catParam = searchParams.get('cat') || 'all'

  const setCategory = (cat) => {
    setSearchParams(cat === 'all' ? {} : { cat })
  }

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = catParam === 'all' || p.category === catParam
      const matchPrice = matchesPriceRange(p.price, priceRange)
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.specs.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      return matchCat && matchPrice && matchSearch
    })
  }, [catParam, priceRange, search])

  const activeCategory = categories.find((c) => c.id === catParam)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      {/* Page header */}
      <div className="pt-8 pb-6">
        <h1 className="font-syne font-black text-3xl sm:text-4xl text-white mb-1">
          {catParam === 'all' ? 'All Stock' : activeCategory?.label}
        </h1>
        <p className="font-dm text-gray-500 text-sm">
          {filtered.length} {filtered.length === 1 ? 'item' : 'items'} available
        </p>
      </div>

      {/* Search + filter row */}
      <div className="flex gap-3 mb-4">
        <div className="relative flex-grow">
          <label htmlFor="shop-search" className="sr-only">
            Search products
          </label>
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
          <input
            id="shop-search"
            type="search"
            placeholder="Search products…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-dark-card border border-dark-border rounded-xl text-sm font-dm text-white placeholder-gray-600 focus:outline-none focus:border-electric/50 transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
            >
              <X size={14} />
            </button>
          )}
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-dm border transition-colors ${
            showFilters || priceRange !== 'all'
              ? 'bg-electric/10 border-electric/30 text-electric'
              : 'bg-dark-card border-dark-border text-gray-400 hover:text-white'
          }`}
        >
          <SlidersHorizontal size={15} />
          <span className="hidden sm:inline">Filters</span>
          {priceRange !== 'all' && (
            <span className="w-1.5 h-1.5 rounded-full bg-electric" />
          )}
        </button>
      </div>

      {/* Price filter */}
      {showFilters && (
        <div className="mb-4 p-4 bg-dark-card border border-dark-border rounded-xl animate-fade-in">
          <p className="font-dm font-medium text-white text-xs mb-3 uppercase tracking-widest">
            Price Range
          </p>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setPriceRange(id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-dm font-medium transition-all ${
                  priceRange === id
                    ? 'bg-electric text-black'
                    : 'bg-dark-hover border border-dark-border text-gray-400 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Category tabs */}
      <CategoryFilter active={catParam} onChange={setCategory} />

      {/* Grid */}
      <div className="mt-6">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-syne font-bold text-xl text-white mb-2">No products found</p>
            <p className="font-dm text-gray-500 text-sm mb-6">
              Try adjusting your search or filter
            </p>
            <button
              onClick={() => {
                setSearch('')
                setPriceRange('all')
                setCategory('all')
              }}
              className="text-electric text-sm font-dm underline underline-offset-4"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
