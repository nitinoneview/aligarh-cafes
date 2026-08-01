"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Button from "@/components/Button"

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
  const modalRef = useRef<HTMLDivElement | null>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  if (!photos || photos.length === 0) return null

  const visiblePhotos = photos.slice(0, 3)
  const remainingCount = photos.length - 3

  function openLightbox(index: number) {
    previouslyFocused.current = document.activeElement as HTMLElement | null
    setLightboxIndex(index)
  }

  function closeLightbox() {
    setLightboxIndex(null)
    // restore focus to previously focused element
    if (previouslyFocused.current) {
      previouslyFocused.current.focus()
    }
  }

  function showNext() {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % photos.length)
  }

  function showPrev() {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length)
  }

  // Keyboard and focus-trap handling for the modal
  useEffect(() => {
    if (lightboxIndex === null) return

    const modal = modalRef.current
    if (!modal) return

    const focusableSelector =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'

    const focusableElements = Array.from(
      modal.querySelectorAll<HTMLElement>(focusableSelector)
    )

    let firstEl = focusableElements[0]
    let lastEl = focusableElements[focusableElements.length - 1]

    if (firstEl) firstEl.focus()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault()
        closeLightbox()
      }

      if (e.key === "ArrowRight") {
        e.preventDefault()
        showNext()
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault()
        showPrev()
      }

      if (e.key === "Tab") {
        // focus trap
        if (focusableElements.length === 0) {
          e.preventDefault()
          return
        }
        if (e.shiftKey) {
          // shift + tab
          if (document.activeElement === firstEl) {
            e.preventDefault()
            lastEl?.focus()
          }
        } else {
          // tab
          if (document.activeElement === lastEl) {
            e.preventDefault()
            firstEl?.focus()
          }
        }
      }
    }

    document.addEventListener("keydown", onKeyDown)

    // prevent background scrolling while modal open
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = prevOverflow
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 rounded-2xl overflow-hidden" aria-hidden={lightboxIndex !== null}>
        <div
          className="relative md:row-span-2 cursor-pointer h-48 md:h-[320px] w-full"
          onClick={() => openLightbox(0)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") openLightbox(0)
          }}
          aria-label={`Open photo gallery for ${cafeName}`}
        >
          <Image
            src={visiblePhotos[0].image_url}
            alt={`${cafeName} photo`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
          <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M4 4h16v12H4z" />
            </svg>
            {photos.length}
          </span>
        </div>

        <div
          className="relative cursor-pointer h-24 md:h-auto"
          onClick={() => openLightbox(1)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") openLightbox(1)
          }}
          aria-label={`Open photo 2 for ${cafeName}`}
        >
          {visiblePhotos[1] && (
            <Image
              src={visiblePhotos[1].image_url}
              alt={`${cafeName} photo`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 33vw"
              className="object-cover"
            />
          )}
        </div>

        <div
          className="relative cursor-pointer h-24 md:h-auto"
          onClick={() => openLightbox(2)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") openLightbox(2)
          }}
          aria-label={`Open photo 3 for ${cafeName}`}
        >
          {visiblePhotos[2] && (
            <>
              <Image
                src={visiblePhotos[2].image_url}
                alt={`${cafeName} photo`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 33vw"
                className="object-cover"
              />
              {remainingCount > 0 && (
                <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{"+" + remainingCount + " more"}</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${cafeName} photo viewer`}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            // close when clicking on overlay background
            if (e.target === e.currentTarget) closeLightbox()
          }}
        >
          <div className="relative max-w-4xl w-full mx-auto">
            <div className="relative aspect-[16/9] bg-black rounded">
              <Image
                src={photos[lightboxIndex].image_url}
                alt={`${cafeName} photo ${lightboxIndex + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />
            </div>

            <div className="absolute top-4 right-4 flex items-center gap-2">
              <Button
                aria-label="Close gallery"
                onClick={closeLightbox}
                variant="secondary"
              >
                Close
              </Button>
            </div>

            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Button aria-label="Previous photo" onClick={showPrev} variant="ghost">
                ‹
              </Button>
            </div>

            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Button aria-label="Next photo" onClick={showNext} variant="ghost">
                ›
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
