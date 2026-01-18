'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function LightboxImage({ src, alt, width, height, caption }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <figure className="case-study-image">
        <div 
          className="lightbox-trigger"
          onClick={() => setIsOpen(true)}
          style={{ cursor: 'pointer' }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>

      {isOpen && (
        <div 
          className="lightbox-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div className="lightbox-content">
            <button 
              className="lightbox-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              style={{ 
                width: 'auto', 
                height: 'auto',
                maxWidth: '95vw',
                maxHeight: '90vh',
                objectFit: 'contain'
              }}
            />
            {caption && (
              <p className="lightbox-caption">{caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
