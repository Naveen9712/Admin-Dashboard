import React from 'react';

export default function DashboardSelector() {
  const dashboards = [
    {
      id: 'admin',
      title: 'Admin Dashboard',
      description: 'Manage users, applications, documents and system settings',
      icon: '🛠️',
      color: '#EBF5FF',
      iconBg: '#BFDBFE',
      textColor: '#2563EB',
      path: '/admin-dashboard',
      features: ['User Management', 'Applications', 'Journey Management', 'Compliance']
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F9FAFB',
      fontFamily: 'lato',
      padding: '40px 20px'
    }}>
      <main style={{
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        <header style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#1F2937',
            marginBottom: '16px'
          }}>ImmiHub Admin Portal</h1>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Access the Admin Dashboard to manage system settings and user data
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {dashboards.map(dashboard => (
            <DashboardCard 
              key={dashboard.id}
              {...dashboard}
            />
          ))}
        </div>
        
        <footer style={{
          textAlign: 'center',
          marginTop: '60px',
          color: '#6B7280',
          fontSize: '14px'
        }}>
          <p>© 2023 ImmiHub. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

function DashboardCard({ title, description, icon, color, iconBg, textColor, path, features }) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      overflow: 'hidden',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}
    onClick={() => {
      if (path !== '#') {
        window.location.href = path;
      }
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }}
    >
      <div style={{
        padding: '24px',
        borderBottom: '1px solid #E5E7EB'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            backgroundColor: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            marginRight: '16px'
          }}>
            {icon}
          </div>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#1F2937'
          }}>{title}</h2>
        </div>
        <p style={{
          color: '#6B7280',
          fontSize: '16px',
          lineHeight: '1.5'
        }}>{description}</p>
      </div>
      
      <div style={{
        padding: '16px 24px 24px',
        flexGrow: 1
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#4B5563',
          marginBottom: '12px'
        }}>Key Features:</h3>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {features.map((feature, index) => (
            <li key={index} style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '8px',
              color: '#6B7280',
              fontSize: '14px'
            }}>
              <span style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: textColor,
                marginRight: '10px'
              }}></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div style={{
        padding: '16px 24px',
        backgroundColor: color,
        marginTop: 'auto'
      }}>
        <button style={{
          display: 'block',
          width: '100%',
          padding: '12px',
          textAlign: 'center',
          backgroundColor: 'white',
          color: textColor,
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
        }}>
          {path === '#' ? 'Coming Soon' : 'Access Dashboard'}
        </button>
      </div>
    </div>
  );
} 