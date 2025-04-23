import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/');
  }, []);
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#F9FAFB',
      flexDirection: 'column'
    }}>
      <div style={{
        fontSize: '24px',
        color: '#1F2937',
        marginBottom: '16px'
      }}>
        Redirecting to Portal Home...
      </div>
      <div style={{
        width: '50px',
        height: '50px',
        border: '5px solid #E5E7EB',
        borderTopColor: '#2563EB',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
} 