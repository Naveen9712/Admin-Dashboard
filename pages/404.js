export default function Custom404() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      textAlign: 'center',
      margin: '0 20px'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
        The page you are looking for does not exist.
      </p>
      <button 
        onClick={() => window.location.href = '/'}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#2563EB',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        Go Back Home
      </button>
    </div>
  );
} 