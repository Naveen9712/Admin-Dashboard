import React, { useState } from 'react';
import NavItem from '../components/NavItem';

export default function AttorneyClients() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // Sample client data
  const clients = [
    { id: 1, name: 'Michael Smith', email: 'michael.smith@example.com', phone: '(555) 123-4567', status: 'Active', caseType: 'H1B Visa', nextDeadline: 'Apr 10, 2023' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah.johnson@example.com', phone: '(555) 234-5678', status: 'Active', caseType: 'Green Card', nextDeadline: 'Apr 15, 2023' },
    { id: 3, name: 'David Kim', email: 'david.kim@example.com', phone: '(555) 345-6789', status: 'Inactive', caseType: 'DACA Renewal', nextDeadline: 'Apr 20, 2023' },
    { id: 4, name: 'Anna Garcia', email: 'anna.garcia@example.com', phone: '(555) 456-7890', status: 'Pending', caseType: 'F1 Visa', nextDeadline: 'Apr 25, 2023' }
  ];
  
  // Filter clients based on search and status
  const filteredClients = clients.filter(client => {
    // Filter by search term
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.caseType.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by status
    const matchesStatus = selectedStatus === 'all' || client.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });
  
  return (
    <div style={{ 
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Sidebar */}
      <div style={{ 
        width: sidebarCollapsed ? '60px' : '240px',
        backgroundColor: 'white',
        borderRight: '1px solid #E5E7EB',
        transition: 'width 0.3s',
        overflow: 'hidden'
      }}>
        {/* Sidebar Header */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #E5E7EB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {!sidebarCollapsed && (
            <div style={{ 
              fontSize: '18px', 
              fontWeight: 'bold',
              color: '#2563EB'
            }}>
              LegalFlow
            </div>
          )}
          <button 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            style={{
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '4px',
              color: '#6B7280'
            }}
          >
            ☰
          </button>
        </div>
        
        {/* Sidebar Navigation */}
        <nav style={{ padding: '16px 0' }}>
          <NavItem 
            href="/admin-dashboard" 
            icon="🏠" 
            text="Dashboard" 
            active={false} 
            collapsed={sidebarCollapsed} 
          />
          <NavItem 
            href="/attorney-clients" 
            icon="👥" 
            text="Clients" 
            active={true} 
            collapsed={sidebarCollapsed} 
          />
          <NavItem 
            href="#" 
            icon="💼" 
            text="Cases" 
            active={false} 
            collapsed={sidebarCollapsed} 
          />
          <NavItem 
            href="/documents" 
            icon="📄" 
            text="Documents" 
            active={false} 
            collapsed={sidebarCollapsed} 
          />
          <NavItem 
            href="#" 
            icon="📅" 
            text="Calendar" 
            active={false} 
            collapsed={sidebarCollapsed} 
          />
          <NavItem 
            href="#" 
            icon="📝" 
            text="Forms" 
            active={false} 
            collapsed={sidebarCollapsed} 
          />
          <NavItem 
            href="#" 
            icon="⚙️" 
            text="Settings" 
            active={false} 
            collapsed={sidebarCollapsed} 
          />
          <NavItem 
            href="/admin-dashboard" 
            icon="🔧" 
            text="Admin Dashboard" 
            active={false} 
            collapsed={sidebarCollapsed} 
          />
          <NavItem 
            href="/" 
            icon="🏠" 
            text="Portal Home" 
            active={false} 
            collapsed={sidebarCollapsed} 
          />
        </nav>
        
        {/* User Profile */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          padding: '16px',
          borderTop: '1px solid #E5E7EB',
          backgroundColor: 'white'
        }}>
          {sidebarCollapsed ? (
            <div style={{ 
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#EBF5FF',
              color: '#2563EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              margin: '0 auto'
            }}>
              S
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ 
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#EBF5FF',
                color: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                marginRight: '12px'
              }}>
                S
              </div>
              <div>
                <div style={{ fontWeight: '500', fontSize: '14px' }}>Sarah Martinez, Esq.</div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>sarah@legalflow.com</div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1, backgroundColor: '#F9FAFB' }}>
        {/* Header */}
        <header style={{ 
          backgroundColor: 'white',
          borderBottom: '1px solid #E5E7EB',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ 
            fontSize: '24px',
            fontWeight: '600',
            color: '#1F2937',
            margin: 0
          }}>Client Management</h1>
          
          <div style={{ display: 'flex', gap: '16px' }}>
            <button style={{ 
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative'
            }}>
              🔔
              <span style={{ 
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#EF4444'
              }}></span>
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>👤</button>
          </div>
        </header>
        
        {/* Content */}
        <main style={{ padding: '24px' }}>
          {/* Search and filters */}
          <div style={{ 
            display: 'flex',
            gap: '10px',
            marginBottom: '20px'
          }}>
            <div style={{ 
              flex: '1',
              display: 'flex',
              alignItems: 'center',
              padding: '8px 12px',
              border: '1px solid #D1D5DB',
              borderRadius: '6px',
              backgroundColor: 'white'
            }}>
              <span style={{ marginRight: '8px', color: '#6B7280' }}>🔍</span>
              <input 
                type="text" 
                placeholder="Search clients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ 
                  border: 'none',
                  outline: 'none',
                  width: '100%',
                  fontSize: '14px'
                }}
              />
            </div>
            
            <select 
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              style={{ 
                padding: '8px 12px',
                border: '1px solid #D1D5DB',
                borderRadius: '6px',
                backgroundColor: 'white'
              }}
            >
              <option value="all">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
            </select>
            
            <button style={{ 
              padding: '8px 15px',
              backgroundColor: '#2563EB',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ marginRight: '6px' }}>+</span> Add Client
            </button>
          </div>
          
          {/* Clients table */}
          <div style={{ 
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '30px'
          }}>
            <table style={{ 
              width: '100%',
              borderCollapse: 'collapse',
              backgroundColor: 'white'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#F9FAFB' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#6B7280', fontSize: '14px', borderBottom: '1px solid #E5E7EB' }}>Name</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#6B7280', fontSize: '14px', borderBottom: '1px solid #E5E7EB' }}>Contact</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#6B7280', fontSize: '14px', borderBottom: '1px solid #E5E7EB' }}>Status</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#6B7280', fontSize: '14px', borderBottom: '1px solid #E5E7EB' }}>Case Type</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#6B7280', fontSize: '14px', borderBottom: '1px solid #E5E7EB' }}>Next Deadline</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#6B7280', fontSize: '14px', borderBottom: '1px solid #E5E7EB' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.length > 0 ? (
                  filteredClients.map(client => (
                    <tr key={client.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ padding: '16px', fontSize: '14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div style={{ 
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            backgroundColor: '#EBF5FF',
                            color: '#2563EB',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: '600',
                            marginRight: '12px'
                          }}>
                            {client.name.charAt(0)}
                          </div>
                          <div>
                            {client.name}
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '16px', fontSize: '14px' }}>
                        <div>
                          <div>{client.email}</div>
                          <div style={{ color: '#6B7280', marginTop: '4px' }}>{client.phone}</div>
                        </div>
                      </td>
                      <td style={{ padding: '16px', fontSize: '14px' }}>
                        <span style={{ 
                          padding: '4px 8px',
                          borderRadius: '9999px',
                          fontSize: '12px',
                          backgroundColor: client.status === 'Active' ? '#ECFDF5' : 
                                          client.status === 'Inactive' ? '#F3F4F6' : 
                                          '#FEF3C7',
                          color: client.status === 'Active' ? '#059669' : 
                                client.status === 'Inactive' ? '#6B7280' : 
                                '#D97706'
                        }}>
                          {client.status}
                        </span>
                      </td>
                      <td style={{ padding: '16px', fontSize: '14px' }}>{client.caseType}</td>
                      <td style={{ padding: '16px', fontSize: '14px' }}>{client.nextDeadline}</td>
                      <td style={{ padding: '16px', fontSize: '14px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button style={{ 
                            padding: '6px',
                            border: '1px solid #E5E7EB',
                            borderRadius: '4px',
                            backgroundColor: 'white',
                            cursor: 'pointer'
                          }}>
                            👁️
                          </button>
                          <button style={{ 
                            padding: '6px',
                            border: '1px solid #E5E7EB',
                            borderRadius: '4px',
                            backgroundColor: 'white',
                            cursor: 'pointer'
                          }}>
                            ✏️
                          </button>
                          <button style={{ 
                            padding: '6px',
                            border: '1px solid #E5E7EB',
                            borderRadius: '4px',
                            backgroundColor: 'white',
                            cursor: 'pointer'
                          }}>
                            💬
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" style={{ padding: '40px', textAlign: 'center', color: '#6B7280' }}>
                      No clients match your search criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
} 