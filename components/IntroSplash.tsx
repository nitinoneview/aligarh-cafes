'use client'

import { useEffect, useState } from 'react'

export default function IntroSplash() {
  const [visible, setVisible] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('introShown')
    if (alreadyShown) {
      return
    }

    setVisible(true)
    sessionStorage.setItem('introShown', 'true')

    const fadeTimer = setTimeout(() => setFading(true), 1800)
    const removeTimer = setTimeout(() => setVisible(false), 2200)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) {
    return null
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fading ? 0 : 1,
        transition: 'opacity 400ms ease',
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      <div style={{ position: 'relative', width: '96px', height: '96px' }}>
        <div
          style={{
            width: '96px',
            height: '96px',
            borderRadius: '22px',
            backgroundColor: '#c2410c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'introFadeIn 600ms ease forwards',
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fdf3ea" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h13a3 3 0 0 1 0 6h-1" />
            <path d="M3 8v7a3 3 0 0 0 3 3h5a3 3 0 0 0 3 -3v-7" />
            <path d="M7 3c0 1 -0.5 1.5 -0.5 2.5S7 7 7 7" />
            <path d="M11 3c0 1 -0.5 1.5 -0.5 2.5S11 7 11 7" />
          </svg>
        </div>
        <span
          style={{
            position: 'absolute',
            top: '-8px',
            left: '34px',
            width: '3px',
            height: '12px',
            backgroundColor: '#fdf3ea',
            borderRadius: '2px',
            opacity: 0,
            animation: 'introSteam 1.8s ease-in-out infinite',
            animationDelay: '700ms',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: '-8px',
            left: '50px',
            width: '3px',
            height: '12px',
            backgroundColor: '#fdf3ea',
            borderRadius: '2px',
            opacity: 0,
            animation: 'introSteam 1.8s ease-in-out infinite',
            animationDelay: '1100ms',
          }}
        />
      </div>
      <p
        style={{
          marginTop: '18px',
          fontSize: '16px',
          fontWeight: 600,
          color: '#ffffff',
          opacity: 0,
          animation: 'introFadeIn 500ms ease forwards',
          animationDelay: '300ms',
        }}
      >
        Aligarh Cafes
      </p>
      <style>{`
        @keyframes introFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes introSteam {
          0% { opacity: 0; transform: translateY(0) scaleY(1); }
          40% { opacity: 0.8; }
          100% { opacity: 0; transform: translateY(-16px) scaleY(1.7); }
        }
      `}</style>
    </div>
  )
}
