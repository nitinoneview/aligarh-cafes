"use client"

import { useState } from "react"
import Image from "next/image"

type Photo = {
  image_url: string
  sort_order?: number
}

export default function PhotoGallery({
  photos,
  cafeName,
}: {
  photos: Photo[]
  cafeName: string
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (!photos || photos.length === 0) return null

  const visiblePhotos = photos.slice(0, 3)
  const remainingCount = photos.length - 3

  function openLightbox(index: number) {
    setLightboxIndex(index)
  }

  function closeLightbox() {
    setLightboxIndex(null)
  }

  function showNext() {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % photos.length)
  }

  function showPrev() {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length)
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-1.5 rounded-2xl overflow-hidden" style={{ height: "200px" }}>
        <div
          className="relative row-span-2 cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={visiblePhotos[0].image_url}
            alt={cafeName}
            fill
            sizes="50vw"
            className="object-cover"
          />
          <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
            <i className="ti ti-photo text-xs" aria-hidden="true" />
            {photos.length}
          </span>
        </div>

        {visiblePhotos[1] && (
          <div
            className="relative cursor-pointer"
            onClick={() => openLightbox(1)}
          >
            <Image
              src={visiblePhotos[1].image_url}
              alt={cafeName}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
        )}

        {visiblePhotos[2] && (
          <div
            className="relative cursor-pointer"
            onClick={() => openLightbox(2)}
          >
            <Image
              src={visiblePhotos[2].image_url}
              alt={cafeName}
              fill
              sizes="25vw"
              className="object-cover"
            />
            {remainingCount > 0 && (
              <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {"+" + remainingCount + " more"}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white z-10"
            aria-label="Close"
          >
            <i className="ti ti-x text-2xl" aria-hidden="true" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            className="absolute left-4 text-white z-10"
            aria-label="Previous photo"
          >
            <i className="ti ti-chevron-left text-3xl" aria-hidden="true" />
          </button>

          <div
            className="relative w-full h-full max-w-2xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIndex].image_url}
              alt={cafeName}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            className="absolute right-4 text-white z-10"
            aria-label="Next photo"
          >
            <i className="ti ti-chevron-right text-3xl" aria-hidden="true" />
          </button>

          <span className="absolute bottom-4 text-white text-sm">
            {(lightboxIndex + 1) + " / " + photos.length}
          </span>
        </div>
      )}
    </>
  )
}
