import { useState } from 'react'

export default function ImageGallery({ images, name }) {
  const [selected, setSelected] = useState(0)

  const safeImages = images && images.length ? images : [
    'https://source.unsplash.com/featured/600x400/?technology',
  ]

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative rounded-2xl overflow-hidden bg-dark-card border border-dark-border aspect-square">
        <img
          key={selected}
          src={safeImages[selected]}
          alt={`${name} — view ${selected + 1}`}
          className="w-full h-full object-cover animate-fade-in"
          onError={(e) => {
            e.target.src = 'https://source.unsplash.com/featured/600x400/?technology+hardware'
          }}
        />
      </div>

      {/* Thumbnail strip */}
      {safeImages.length > 1 && (
        <div className="flex gap-2">
          {safeImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`flex-1 rounded-xl overflow-hidden border-2 transition-all aspect-square ${
                selected === i
                  ? 'border-electric'
                  : 'border-dark-border hover:border-electric/40'
              }`}
            >
              <img
                src={img}
                alt={`${name} thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://source.unsplash.com/featured/600x400/?hardware'
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
