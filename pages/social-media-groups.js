import React, { useState } from 'react';
import NavItem from '../components/NavItem';

export default function SocialMediaGroups() {
  const [collapsed, setCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  
  // Demo social media groups data
  const [groupsData, setGroupsData] = useState([
    {
      id: 1,
      name: 'US Immigration Support',
      platform: 'Facebook',
      members: 2348,
      status: 'Active',
      createdDate: '2022-06-15',
      description: 'Support group for immigrants navigating the US immigration system',
      adminName: 'Michael Smith',
      privacy: 'Public',
      engagement: 'High'
    },
    {
      id: 2,
      name: 'H1B Visa Professionals',
      platform: 'LinkedIn',
      members: 1567,
      status: 'Active',
      createdDate: '2022-08-22',
      description: 'Networking for H1B visa holders and applicants',
      adminName: 'Sarah Johnson',
      privacy: 'Private',
      engagement: 'Medium'
    },
    {
      id: 3,
      name: 'DACA Updates',
      platform: 'WhatsApp',
      members: 983,
      status: 'Active',
      createdDate: '2022-03-10',
      description: 'Latest news and support for DACA recipients',
      adminName: 'Raj Patel',
      privacy: 'Private',
      engagement: 'High'
    },
    {
      id: 4,
      name: 'Student Visa Applicants',
      platform: 'Facebook',
      members: 1245,
      status: 'Active',
      createdDate: '2022-09-05',
      description: 'Group for F1 visa applicants to share experiences and advice',
      adminName: 'Anna Garcia',
      privacy: 'Public',
      engagement: 'Medium'
    },
    {
      id: 5,
      name: 'Immigration Law Updates',
      platform: 'LinkedIn',
      members: 768,
      status: 'Inactive',
      createdDate: '2021-11-17',
      description: 'Professional group for immigration attorneys and experts',
      adminName: 'David Kim',
      privacy: 'Public',
      engagement: 'Low'
    },
    {
      id: 6,
      name: 'Citizenship Exam Prep',
      platform: 'Telegram',
      members: 632,
      status: 'Active',
      createdDate: '2022-10-11',
      description: 'Study group for U.S. citizenship exam preparation',
      adminName: 'Emma Wilson',
      privacy: 'Private',
      engagement: 'High'
    },
    {
      id: 7,
      name: 'Green Card Holders',
      platform: 'Facebook',
      members: 1872,
      status: 'Active',
      createdDate: '2022-04-18',
      description: 'Community for permanent residents and green card applicants',
      adminName: 'Omar Hassan',
      privacy: 'Public',
      engagement: 'High'
    },
    {
      id: 8,
      name: 'Immigration News',
      platform: 'Twitter',
      members: 3245,
      status: 'Active',
      createdDate: '2021-12-05',
      description: 'Latest immigration policy updates and news',
      adminName: 'Lisa Chen',
      privacy: 'Public',
      engagement: 'Medium'
    }
  ]);

  const platforms = [
    'Facebook', 'LinkedIn', 'WhatsApp', 'Telegram', 'Twitter', 'Discord', 'Reddit'
  ];
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Filter groups based on search and filters
  const filteredGroups = groupsData.filter(group => {
    const matchesSearch = searchTerm === '' || 
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      group.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPlatform = selectedPlatform === 'all' || group.platform === selectedPlatform;
    const matchesStatus = selectedStatus === 'all' || group.status.toLowerCase() === selectedStatus.toLowerCase();
    
    return matchesSearch && matchesPlatform && matchesStatus;
  });

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
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
          }}>ImmiHub Admin</span>}
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
            active={false}
            collapsed={collapsed}
            onClick={() => window.location.href = '/admin-dashboard'}
          />
          <NavItem
            icon="👤"
            text="User Management"
            collapsed={collapsed}
            onClick={() => window.location.href = '/user-management'}
          />
          <NavItem
            icon="📄"
            text="Applications"
            collapsed={collapsed}
            onClick={() => window.location.href = '/applications'}
          />
          <NavItem
            icon="📁"
            text="Documents"
            collapsed={collapsed}
            onClick={() => window.location.href = '/documents'}
          />
          <NavItem
            icon="📚"
            text="Journey Management"
            collapsed={collapsed}
            onClick={() => window.location.href = '/journey-management'}
          />
          <NavItem
            icon="👥"
            text="Social Media Groups Management"
            active={true}
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
            icon="🛡️"
            text="Compliance"
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
            icon="⚖️"
            text="Admin Dashboard"
            collapsed={collapsed}
            onClick={() => window.location.href = '/admin-dashboard'}
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
              }}>A</div>
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
                }}>A</div>
                <div style={{
                  marginLeft: '0.5rem'
                }}>
                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151'
                  }}>Admin User</div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#6B7280'
                  }}>admin@immihub.com</div>
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
            }}>Social Media Groups Management</h1>
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

        {/* Main Content Area */}
        <main style={{
          flex: '1',
          overflowY: 'auto',
          padding: '1.5rem',
          backgroundColor: '#F9FAFB'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #E5E7EB'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <h2 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1F2937'
                }}>Social Media Groups</h2>
                <button style={{
                  backgroundColor: '#2563EB',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.375rem',
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer'
                }}>
                  ➕ Create New Group
                </button>
              </div>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ flex: '1', minWidth: '240px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    color: '#4B5563',
                    marginBottom: '0.25rem'
                  }}>
                    Search
                  </label>
                  <input 
                    type="text" 
                    placeholder="Search groups..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #D1D5DB',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>
                <div style={{ width: '180px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    color: '#4B5563',
                    marginBottom: '0.25rem'
                  }}>
                    Platform
                  </label>
                  <select 
                    value={selectedPlatform}
                    onChange={(e) => setSelectedPlatform(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #D1D5DB',
                      fontSize: '0.875rem',
                      backgroundColor: 'white'
                    }}
                  >
                    <option value="all">All Platforms</option>
                    {platforms.map(platform => (
                      <option key={platform} value={platform}>{platform}</option>
                    ))}
                  </select>
                </div>
                <div style={{ width: '180px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    color: '#4B5563',
                    marginBottom: '0.25rem'
                  }}>
                    Status
                  </label>
                  <select 
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #D1D5DB',
                      fontSize: '0.875rem',
                      backgroundColor: 'white'
                    }}
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse'
              }}>
                <thead>
                  <tr style={{
                    backgroundColor: '#F9FAFB',
                    borderBottom: '1px solid #E5E7EB'
                  }}>
                    <th style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#6B7280',
                      textTransform: 'uppercase'
                    }}>Group Name</th>
                    <th style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#6B7280',
                      textTransform: 'uppercase'
                    }}>Platform</th>
                    <th style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#6B7280',
                      textTransform: 'uppercase'
                    }}>Members</th>
                    <th style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#6B7280',
                      textTransform: 'uppercase'
                    }}>Status</th>
                    <th style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#6B7280',
                      textTransform: 'uppercase'
                    }}>Created Date</th>
                    <th style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#6B7280',
                      textTransform: 'uppercase'
                    }}>Admin</th>
                    <th style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#6B7280',
                      textTransform: 'uppercase'
                    }}>Engagement</th>
                    <th style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#6B7280',
                      textTransform: 'uppercase'
                    }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredGroups.length > 0 ? (
                    filteredGroups.map(group => (
                      <tr key={group.id} style={{
                        borderBottom: '1px solid #E5E7EB'
                      }}>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.875rem',
                          color: '#1F2937'
                        }}>
                          <div style={{
                            fontWeight: '500',
                            color: '#2563EB',
                            marginBottom: '0.25rem'
                          }}>{group.name}</div>
                          <div style={{
                            fontSize: '0.75rem',
                            color: '#6B7280'
                          }}>{group.description}</div>
                        </td>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.875rem',
                          color: '#1F2937'
                        }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}>
                            {getPlatformIcon(group.platform)}
                            <span>{group.platform}</span>
                          </div>
                        </td>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.875rem',
                          color: '#1F2937',
                          fontWeight: '500'
                        }}>{group.members.toLocaleString()}</td>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.875rem'
                        }}>
                          <span style={{
                            display: 'inline-block',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: '500',
                            backgroundColor: group.status === 'Active' ? '#ECFDF5' : '#FEF2F2',
                            color: group.status === 'Active' ? '#059669' : '#EF4444'
                          }}>
                            {group.status}
                          </span>
                        </td>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.875rem',
                          color: '#1F2937'
                        }}>{formatDate(group.createdDate)}</td>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.875rem',
                          color: '#1F2937'
                        }}>{group.adminName}</td>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.875rem',
                          color: '#1F2937'
                        }}>
                          <span style={{
                            display: 'inline-block',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: '500',
                            backgroundColor: getEngagementBackground(group.engagement),
                            color: getEngagementColor(group.engagement)
                          }}>
                            {group.engagement}
                          </span>
                        </td>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.875rem',
                          textAlign: 'center'
                        }}>
                          <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '0.5rem'
                          }}>
                            <button style={{
                              padding: '0.375rem',
                              borderRadius: '0.375rem',
                              border: 'none',
                              backgroundColor: '#EBF5FF',
                              color: '#2563EB',
                              cursor: 'pointer'
                            }}>
                              👁️
                            </button>
                            <button style={{
                              padding: '0.375rem',
                              borderRadius: '0.375rem',
                              border: 'none',
                              backgroundColor: '#FEF3C7',
                              color: '#D97706',
                              cursor: 'pointer'
                            }}>
                              ✏️
                            </button>
                            <button style={{
                              padding: '0.375rem',
                              borderRadius: '0.375rem',
                              border: 'none',
                              backgroundColor: '#FEF2F2',
                              color: '#EF4444',
                              cursor: 'pointer'
                            }}>
                              🗑️
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" style={{
                        padding: '2rem',
                        textAlign: 'center',
                        color: '#6B7280'
                      }}>
                        No social media groups found matching the current filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div style={{
              padding: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid #E5E7EB'
            }}>
              <div style={{
                fontSize: '0.875rem',
                color: '#6B7280'
              }}>
                Showing {filteredGroups.length} of {groupsData.length} groups
              </div>
              <div style={{
                display: 'flex',
                gap: '0.5rem'
              }}>
                <button style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: '0.375rem',
                  border: '1px solid #D1D5DB',
                  backgroundColor: 'white',
                  fontSize: '0.875rem',
                  color: '#374151',
                  cursor: 'pointer'
                }}>
                  Previous
                </button>
                <button style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: '0.375rem',
                  border: '1px solid #D1D5DB',
                  backgroundColor: 'white',
                  fontSize: '0.875rem',
                  color: '#374151',
                  cursor: 'pointer'
                }}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Helper functions for UI display
function getPlatformIcon(platform) {
  const icons = {
    'Facebook': '📘',
    'LinkedIn': '📊',
    'WhatsApp': '📱',
    'Telegram': '✈️',
    'Twitter': '🐦',
    'Discord': '🎮',
    'Reddit': '🔴'
  };
  
  return icons[platform] || '📱';
}

function getEngagementBackground(level) {
  const backgrounds = {
    'High': '#ECFDF5',
    'Medium': '#FEF3C7',
    'Low': '#FEF2F2'
  };
  
  return backgrounds[level] || '#F3F4F6';
}

function getEngagementColor(level) {
  const colors = {
    'High': '#059669',
    'Medium': '#D97706',
    'Low': '#EF4444'
  };
  
  return colors[level] || '#6B7280';
} 