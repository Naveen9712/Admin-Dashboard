import React, { useState } from 'react';
import NavItem from '../components/NavItem';

export default function StudentRecords() {
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: '#F9FAFB'
    }}>
      {/* Sidebar */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRight: '1px solid #E5E7EB',
        transition: 'all 0.3s',
        width: collapsed ? '4rem' : '16rem'
      }}>
        <div style={{
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #E5E7EB'
        }}>
          {!collapsed && <span style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#2563EB'
          }}>ImmiHub DSO</span>}
          <button onClick={toggleSidebar} style={{
            padding: '0.25rem',
            borderRadius: '0.375rem',
            border: 'none',
            background: 'none',
            cursor: 'pointer'
          }}>
            {collapsed ? '☰' : '✕'}
          </button>
        </div>

        <nav style={{
          marginTop: '1rem'
        }}>
          <NavItem
            icon="🏠"
            text="Dashboard"
            collapsed={collapsed}
            onClick={() => window.location.href = '/admin-dashboard'}
          />
          <NavItem
            icon="👨‍🎓"
            text="Student Records"
            active={true}
            collapsed={collapsed}
            onClick={() => {}}
          />
          <NavItem
            icon="📄"
            text="SEVIS Reporting"
            collapsed={collapsed}
            onClick={() => {}}
          />
          <NavItem
            icon="📁"
            text="Documents"
            collapsed={collapsed}
            onClick={() => window.location.href = '/documents'}
          />
          <NavItem
            icon="🛡️"
            text="Compliance"
            collapsed={collapsed}
            onClick={() => {}}
          />
          <NavItem
            icon="📊"
            text="Analytics"
            collapsed={collapsed}
            onClick={() => {}}
          />
          <NavItem
            icon="🔔"
            text="Notifications"
            collapsed={collapsed}
            onClick={() => {}}
          />
          <NavItem
            icon="⚙️"
            text="Settings"
            collapsed={collapsed}
            onClick={() => {}}
          />
          <NavItem
            icon="🏠"
            text="Portal Home"
            collapsed={collapsed}
            onClick={() => window.location.href = '/'}
          />
        </nav>

        <div style={{
          position: 'absolute',
          bottom: '0',
          width: collapsed ? '4rem' : '16rem',
          borderTop: '1px solid #E5E7EB',
          padding: '1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'flex-start'
          }}>
            {collapsed ? (
              <div style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '9999px',
                backgroundColor: '#EBF5FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2563EB',
                fontWeight: '600'
              }}>D</div>
            ) : (
              <>
                <div style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '9999px',
                  backgroundColor: '#EBF5FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2563EB',
                  fontWeight: '600'
                }}>D</div>
                <div style={{
                  marginLeft: '0.5rem'
                }}>
                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151'
                  }}>DSO User</div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#6B7280'
                  }}>dso@immihub.com</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Top Navigation */}
        <header style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem'
          }}>
            <h1 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1F2937'
            }}>Student Records</h1>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <button style={{
                padding: '0.5rem',
                borderRadius: '9999px',
                position: 'relative',
                border: 'none',
                background: 'none',
                cursor: 'pointer'
              }}>
                🔔
                <span style={{
                  position: 'absolute',
                  top: '0.25rem',
                  right: '0.25rem',
                  width: '0.5rem',
                  height: '0.5rem',
                  backgroundColor: '#EF4444',
                  borderRadius: '9999px'
                }}></span>
              </button>
              <button style={{
                padding: '0.5rem',
                borderRadius: '9999px',
                border: 'none',
                background: 'none',
                cursor: 'pointer'
              }}>
                👤
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main style={{
          flex: '1',
          overflowY: 'auto',
          padding: '1.5rem',
          backgroundColor: '#F9FAFB'
        }}>
          {/* International Student Directory section */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            border: '1px solid #E5E7EB',
            padding: '1.5rem'
          }}>
            <div style={{
              marginBottom: '1.25rem'
            }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1F2937',
                marginBottom: '0.5rem'
              }}>International Student Directory</h2>
              <p style={{
                fontSize: '0.875rem',
                color: '#6B7280'
              }}>Comprehensive directory of all registered international students</p>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.25rem'
            }}>
              <div style={{
                position: 'relative',
                flex: '1',
                maxWidth: '400px'
              }}>
                <input
                  type="text"
                  placeholder="Search students by name, SEVIS ID, country..."
                  style={{
                    width: '100%',
                    padding: '0.5rem 1rem 0.5rem 2.5rem',
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    color: '#374151',
                  }}
                />
                <span style={{
                  position: 'absolute',
                  left: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  color: '#9CA3AF'
                }}>🔍</span>
              </div>
              <div style={{
                display: 'flex',
                gap: '0.75rem'
              }}>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5rem 0.75rem',
                  backgroundColor: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  color: '#374151',
                  cursor: 'pointer'
                }}>
                  <span style={{ marginRight: '0.5rem' }}>🔎</span>
                  Filter
                </button>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5rem 0.75rem',
                  backgroundColor: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  color: '#374151',
                  cursor: 'pointer'
                }}>
                  <span style={{ marginRight: '0.5rem' }}>📊</span>
                  Export
                </button>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5rem 0.75rem',
                  backgroundColor: '#2563EB',
                  border: 'none',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  color: 'white',
                  cursor: 'pointer'
                }}>
                  <span style={{ marginRight: '0.5rem' }}>➕</span>
                  Add New Student
                </button>
              </div>
            </div>
            
            <div style={{
              overflowX: 'auto'
            }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.875rem'
              }}>
                <thead>
                  <tr style={{
                    borderBottom: '1px solid #E5E7EB',
                    color: '#6B7280',
                    textAlign: 'left',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    fontSize: '0.75rem'
                  }}>
                    <th style={{ padding: '0.75rem 1rem' }}>Student</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Program</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Status</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Compliance</th>
                    <th style={{ padding: '0.75rem 1rem' }}>I-20 Expiry</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Last Updated</th>
                    <th style={{ padding: '0.75rem 1rem', width: '80px' }}></th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <div style={{ fontWeight: '500' }}>Ibrahim Khan</div>
                      <div style={{ color: '#6B7280', fontSize: '0.75rem' }}>N0034567898 • Pakistan</div>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>Computer Engineering</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        backgroundColor: '#EBF5FF',
                        color: '#2563EB',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}>Active</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        backgroundColor: '#FEE2E2',
                        color: '#DC2626',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}>Non-Compliant</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>5/22/2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>3/29/2024</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                      <a href="#" style={{ color: '#2563EB', textDecoration: 'none' }}>View</a>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <div style={{ fontWeight: '500' }}>Elena Petrova</div>
                      <div style={{ color: '#6B7280', fontSize: '0.75rem' }}>N0034567899 • Russia</div>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>Physics</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        backgroundColor: '#EBF5FF',
                        color: '#2563EB',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}>Active</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        backgroundColor: '#FEE2E2',
                        color: '#DC2626',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}>At Risk</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>6/15/2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>3/28/2024</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                      <a href="#" style={{ color: '#2563EB', textDecoration: 'none' }}>View</a>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <div style={{ fontWeight: '500' }}>Gabriel Santos</div>
                      <div style={{ color: '#6B7280', fontSize: '0.75rem' }}>N0034567900 • Brazil</div>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>Electrical Engineering</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        backgroundColor: '#FEE2E2',
                        color: '#DC2626',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}>Terminated</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        backgroundColor: '#FEE2E2',
                        color: '#DC2626',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}>Non-Compliant</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>9/10/2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>3/27/2024</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                      <a href="#" style={{ color: '#2563EB', textDecoration: 'none' }}>View</a>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <div style={{ fontWeight: '500' }}>Fatima Al-Farsi</div>
                      <div style={{ color: '#6B7280', fontSize: '0.75rem' }}>N0034567901 • Saudi Arabia</div>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>MBA</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        backgroundColor: '#EBF5FF',
                        color: '#2563EB',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}>Active</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        backgroundColor: '#FEF3C7',
                        color: '#D97706',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}>Warning</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>7/20/2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>3/28/2024</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                      <a href="#" style={{ color: '#2563EB', textDecoration: 'none' }}>View</a>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <div style={{ fontWeight: '500' }}>Nguyen Minh</div>
                      <div style={{ color: '#6B7280', fontSize: '0.75rem' }}>N0034567902 • Vietnam</div>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>Data Science</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        backgroundColor: '#EBF5FF',
                        color: '#2563EB',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}>OPT</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        backgroundColor: '#FEE2E2',
                        color: '#DC2626',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}>At Risk</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>4/30/2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>3/29/2024</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                      <a href="#" style={{ color: '#2563EB', textDecoration: 'none' }}>View</a>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <div style={{ fontWeight: '500' }}>Emma Wilson</div>
                      <div style={{ color: '#6B7280', fontSize: '0.75rem' }}>N0034567903 • Australia</div>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>Marine Biology</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        backgroundColor: '#ECFDF5',
                        color: '#059669',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}>Completed</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        backgroundColor: '#ECFDF5',
                        color: '#059669',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}>Compliant</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>12/01/2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>3/26/2024</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                      <a href="#" style={{ color: '#2563EB', textDecoration: 'none' }}>View</a>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <div style={{ fontWeight: '500' }}>Ravi Sharma</div>
                      <div style={{ color: '#6B7280', fontSize: '0.75rem' }}>N0034567904 • India</div>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>Medicine</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        backgroundColor: '#EBF5FF',
                        color: '#2563EB',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}>Active</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        backgroundColor: '#FEE2E2',
                        color: '#DC2626',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}>Non-Compliant</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>5/15/2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>3/24/2024</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                      <a href="#" style={{ color: '#2563EB', textDecoration: 'none' }}>View</a>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <div style={{ fontWeight: '500' }}>Mei Lin</div>
                      <div style={{ color: '#6B7280', fontSize: '0.75rem' }}>N0034567905 • Taiwan</div>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>Finance</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        backgroundColor: '#EBF5FF',
                        color: '#2563EB',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}>Transferred</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        backgroundColor: '#F3F4F6',
                        color: '#6B7280',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}>Pending</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>8/05/2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>3/29/2024</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                      <a href="#" style={{ color: '#2563EB', textDecoration: 'none' }}>View</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '1rem',
              fontSize: '0.875rem',
              color: '#6B7280'
            }}>
              <div>Showing 1 to 8 of 652 results</div>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center'
              }}>
                <button style={{
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #E5E7EB',
                  backgroundColor: 'white',
                  borderRadius: '0.375rem',
                  color: '#6B7280'
                }}>Previous</button>
                <button style={{
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #2563EB',
                  backgroundColor: '#2563EB',
                  borderRadius: '0.375rem',
                  color: 'white'
                }}>1</button>
                <button style={{
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #E5E7EB',
                  backgroundColor: 'white',
                  borderRadius: '0.375rem',
                  color: '#6B7280'
                }}>2</button>
                <button style={{
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #E5E7EB',
                  backgroundColor: 'white',
                  borderRadius: '0.375rem',
                  color: '#6B7280'
                }}>3</button>
                <button style={{
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #E5E7EB',
                  backgroundColor: 'white',
                  borderRadius: '0.375rem',
                  color: '#6B7280'
                }}>4</button>
                <button style={{
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #E5E7EB',
                  backgroundColor: 'white',
                  borderRadius: '0.375rem',
                  color: '#6B7280'
                }}>5</button>
                <span>...</span>
                <button style={{
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #E5E7EB',
                  backgroundColor: 'white',
                  borderRadius: '0.375rem',
                  color: '#6B7280'
                }}>65</button>
                <button style={{
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #E5E7EB',
                  backgroundColor: 'white',
                  borderRadius: '0.375rem',
                  color: '#6B7280'
                }}>Next</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 