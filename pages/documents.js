import React, { useState } from 'react';
import NavItem from '../components/NavItem';

export default function Documents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Sample document data
  const documents = [
    {
      id: 'doc-001',
      name: 'Passport.pdf',
      type: 'Identification',
      status: 'Verified',
      owner: 'Michael Smith',
      caseType: 'H1B Visa',
      uploadDate: '2023-04-01',
      expiryDate: '2033-03-31',
      size: '2.4 MB'
    },
    {
      id: 'doc-002',
      name: 'I-20_Form.pdf',
      type: 'Immigration',
      status: 'Pending Review',
      owner: 'Sarah Johnson',
      caseType: 'F1 Visa',
      uploadDate: '2023-04-02',
      expiryDate: '2024-08-15',
      size: '1.8 MB'
    },
    {
      id: 'doc-003',
      name: 'Employment_Verification.pdf',
      type: 'Employment',
      status: 'Verified',
      owner: 'David Kim',
      caseType: 'H1B Visa',
      uploadDate: '2023-03-28',
      expiryDate: null,
      size: '540 KB'
    },
    {
      id: 'doc-004',
      name: 'Medical_Examination.pdf',
      type: 'Medical',
      status: 'Rejected',
      owner: 'Anna Garcia',
      caseType: 'Green Card',
      uploadDate: '2023-03-25',
      expiryDate: null,
      size: '3.2 MB'
    },
    {
      id: 'doc-005',
      name: 'Birth_Certificate.pdf',
      type: 'Identification',
      status: 'Verified',
      owner: 'Omar Hassan',
      caseType: 'DACA Renewal',
      uploadDate: '2023-03-20',
      expiryDate: null,
      size: '1.1 MB'
    },
    {
      id: 'doc-006',
      name: 'University_Transcripts.pdf',
      type: 'Education',
      status: 'Verified',
      owner: 'Li Wei',
      caseType: 'F1 Visa',
      uploadDate: '2023-03-15',
      expiryDate: null,
      size: '4.5 MB'
    },
    {
      id: 'doc-007',
      name: 'Tax_Return_2022.pdf',
      type: 'Financial',
      status: 'Pending Review',
      owner: 'James Wilson',
      caseType: 'Green Card',
      uploadDate: '2023-03-10',
      expiryDate: null,
      size: '2.9 MB'
    }
  ];

  const documentTypes = [
    { value: 'all', label: 'All Documents' },
    { value: 'Identification', label: 'Identification' },
    { value: 'Immigration', label: 'Immigration' },
    { value: 'Employment', label: 'Employment' },
    { value: 'Medical', label: 'Medical' },
    { value: 'Education', label: 'Education' },
    { value: 'Financial', label: 'Financial' }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = searchTerm === '' || 
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.caseType.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesFilter = filter === 'all' || doc.type === filter;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusBadgeStyle = (status) => {
    switch(status) {
      case 'Verified':
        return { 
          backgroundColor: '#ECFDF5', 
          color: '#059669',
          border: '1px solid #A7F3D0' 
        };
      case 'Pending Review':
        return { 
          backgroundColor: '#FEF3C7', 
          color: '#D97706',
          border: '1px solid #FDE68A' 
        };
      case 'Rejected':
        return { 
          backgroundColor: '#FEE2E2', 
          color: '#DC2626',
          border: '1px solid #FECACA' 
        };
      default:
        return { 
          backgroundColor: '#F3F4F6', 
          color: '#6B7280',
          border: '1px solid #E5E7EB' 
        };
    }
  };

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
              ImmiHub
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
            active={false} 
            collapsed={sidebarCollapsed} 
          />
          <NavItem 
            href="/cases" 
            icon="📁" 
            text="Cases" 
            active={false} 
            collapsed={sidebarCollapsed} 
          />
          <NavItem 
            href="/documents" 
            icon="📄" 
            text="Documents" 
            active={true} 
            collapsed={sidebarCollapsed} 
          />
          <NavItem 
            href="/calendar" 
            icon="📅" 
            text="Calendar" 
            active={false} 
            collapsed={sidebarCollapsed} 
          />
          <NavItem 
            href="/forms" 
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
              U
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
                U
              </div>
              <div>
                <div style={{ fontWeight: '500', fontSize: '14px' }}>User Name</div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>user@immihub.com</div>
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
          }}>Document Management</h1>
          
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
          {/* Action Bar */}
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={() => setShowUploadModal(true)}
                style={{ 
                padding: '10px 16px',
                backgroundColor: '#2563EB',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer'
              }}>
                <span>➕</span> Upload Document
              </button>
              <button style={{ 
                padding: '10px 16px',
                backgroundColor: 'white',
                color: '#374151',
                border: '1px solid #D1D5DB',
                borderRadius: '6px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Create Folder
              </button>
            </div>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ 
                position: 'relative',
                width: '260px'
              }}>
                <input 
                  type="text" 
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ 
                    padding: '10px 12px 10px 36px',
                    width: '100%',
                    border: '1px solid #D1D5DB',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
                <span style={{ 
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#6B7280'
                }}>
                  🔍
                </span>
              </div>
              
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{ 
                  padding: '10px 12px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  fontSize: '14px'
                }}
              >
                {documentTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Documents Table */}
          <div style={{ 
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            border: '1px solid #E5E7EB',
            overflow: 'hidden'
          }}>
            <table style={{ 
              width: '100%',
              borderCollapse: 'collapse'
            }}>
              <thead>
                <tr style={{ 
                  backgroundColor: '#F9FAFB',
                  borderBottom: '1px solid #E5E7EB'
                }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#6B7280' }}>Document Name</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#6B7280' }}>Type</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#6B7280' }}>Owner</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#6B7280' }}>Case</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#6B7280' }}>Status</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#6B7280' }}>Upload Date</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#6B7280' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDocuments.map(doc => (
                  <tr key={doc.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '20px' }}>📄</span>
                        <span style={{ fontWeight: '500' }}>{doc.name}</span>
                      </div>
                    </td>
                    <td style={{ padding: '12px 16px' }}>{doc.type}</td>
                    <td style={{ padding: '12px 16px' }}>{doc.owner}</td>
                    <td style={{ padding: '12px 16px' }}>{doc.caseType}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        borderRadius: '9999px',
                        fontSize: '12px',
                        ...getStatusBadgeStyle(doc.status)
                      }}>
                        {doc.status}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px' }}>{doc.uploadDate}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={{ 
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '16px'
                        }}>
                          👁️
                        </button>
                        <button style={{ 
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '16px'
                        }}>
                          ⬇️
                        </button>
                        <button style={{ 
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '16px'
                        }}>
                          ✏️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Document Stats */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '24px'
          }}>
            <div style={{ 
              backgroundColor: '#EBF5FF',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #BFDBFE'
            }}>
              <h3 style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 8px 0' }}>Total Documents</h3>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563EB', margin: 0 }}>{documents.length}</p>
            </div>
            
            <div style={{ 
              backgroundColor: '#ECFDF5',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #A7F3D0'
            }}>
              <h3 style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 8px 0' }}>Verified Documents</h3>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#059669', margin: 0 }}>{documents.filter(d => d.status === 'Verified').length}</p>
            </div>
            
            <div style={{ 
              backgroundColor: '#FEF3C7',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #FDE68A'
            }}>
              <h3 style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 8px 0' }}>Pending Review</h3>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#D97706', margin: 0 }}>{documents.filter(d => d.status === 'Pending Review').length}</p>
            </div>
            
            <div style={{ 
              backgroundColor: '#FEE2E2',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #FECACA'
            }}>
              <h3 style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 8px 0' }}>Rejected Documents</h3>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#DC2626', margin: 0 }}>{documents.filter(d => d.status === 'Rejected').length}</p>
            </div>
          </div>
        </main>
      </div>
      
      {/* Upload Document Modal */}
      {showUploadModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            width: '500px',
            maxWidth: '90%',
            padding: '24px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1F2937',
                margin: 0
              }}>Upload Document</h2>
              <button 
                onClick={() => setShowUploadModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '20px',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            </div>
            
            <div style={{
              border: '2px dashed #D1D5DB',
              borderRadius: '6px',
              padding: '32px',
              textAlign: 'center',
              marginBottom: '16px'
            }}>
              <div style={{
                fontSize: '36px',
                marginBottom: '8px'
              }}>
                📤
              </div>
              <p style={{
                margin: '0 0 16px 0',
                color: '#6B7280'
              }}>
                Drag and drop your file here, or click to browse
              </p>
              <button style={{
                padding: '8px 16px',
                backgroundColor: '#F3F4F6',
                color: '#374151',
                border: '1px solid #D1D5DB',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                Browse Files
              </button>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '6px',
                  fontSize: '14px',
                  color: '#4B5563'
                }}>
                  Document Type
                </label>
                <select style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px'
                }}>
                  <option value="">Select a type</option>
                  <option>Identification</option>
                  <option>Immigration</option>
                  <option>Employment</option>
                  <option>Medical</option>
                  <option>Education</option>
                  <option>Financial</option>
                </select>
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '6px',
                  fontSize: '14px',
                  color: '#4B5563'
                }}>
                  Client/Case
                </label>
                <select style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px'
                }}>
                  <option value="">Select a client</option>
                  <option>Michael Smith - H1B Visa</option>
                  <option>Sarah Johnson - F1 Visa</option>
                  <option>David Kim - DACA Renewal</option>
                  <option>Anna Garcia - Green Card</option>
                </select>
              </div>
            </div>
            
            <div style={{
              marginBottom: '24px'
            }}>
              <label style={{
                display: 'block',
                marginBottom: '6px',
                fontSize: '14px',
                color: '#4B5563'
              }}>
                Description (Optional)
              </label>
              <textarea style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #D1D5DB',
                borderRadius: '6px',
                minHeight: '80px',
                resize: 'vertical'
              }} placeholder="Add any notes about this document..."></textarea>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px'
            }}>
              <button 
                onClick={() => setShowUploadModal(false)}
                style={{
                  padding: '10px 16px',
                  backgroundColor: 'white',
                  color: '#374151',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button style={{
                padding: '10px 16px',
                backgroundColor: '#2563EB',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 