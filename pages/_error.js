import { NextErrorComponent } from 'next/error';

function Error({ statusCode }) {
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
        {statusCode ? `${statusCode} - Server Error` : 'Client-side Error'}
      </h1>
      <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
        Sorry, something went wrong on our end. Please try again later.
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

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error; 