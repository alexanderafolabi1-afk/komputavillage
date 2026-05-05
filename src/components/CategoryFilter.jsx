import { categories } from '../data/products'

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="sticky top-16 z-40 bg-dark-bg/95 backdrop-blur border-b border-dark-border -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5">
        {categories.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-dm font-medium transition-all whitespace-nowrap ${
              active === id
                ? 'bg-electric text-black font-semibold'
                : 'bg-dark-card border border-dark-border text-gray-400 hover:text-white hover:border-electric/30'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
