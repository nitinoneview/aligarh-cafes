export default function OfflinePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '24px',
        textAlign: 'center',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <img
        src="/icons/icon-192x192.png"
        alt="Aligarh Cafes"
        style={{
          width: '96px',
          height: '96px',
          borderRadius: '20px',
          marginBottom: '24px',
        }}
      />
      <h1
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '12px',
        }}
      >
        You\'re Offline
      </h1>
      <p
        style={{
          fontSize: '15px',
          color: '#a3a3a3',
          maxWidth: '320px',
          lineHeight: '1.5',
          marginBottom: '28px',
        }}
      >
        Looks like there\'s no internet connection. Please check your network
        and try again.
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          backgroundColor: '#c2410c',
          color: '#ffffff',
          border: 'none',
          borderRadius: '9999px',
          padding: '12px 32px',
          fontSize: '15px',
          fontWeight: '600',
          cursor: 'pointer',
        }}
      >
        Try Again
      </button>
    </div>
  )
}
