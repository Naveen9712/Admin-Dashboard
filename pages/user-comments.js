import React, { useState } from 'react';
import NavItem from '../components/NavItem';

export default function UserComments() {
  const [collapsed, setCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSource, setSelectedSource] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  
  // Demo comments data
  const [commentsData, setCommentsData] = useState([
    {
      id: 1,
      user: {
        name: 'Michael Smith',
        email: 'michael.smith@example.com', 
        avatar: 'MS'
      },
      comment: 'Does anyone know if the I-765 processing time has improved recently? I submitted mine 3 months ago and still waiting.',
      source: 'Journey',
      sourceName: 'H1B Visa Journey',
      date: '2023-04-03T14:32:00',
      status: 'Active',
      likes: 12,
      replies: 3
    },
    {
      id: 2,
      user: {
        name: 'Sarah Johnson',
        email: 'sarah.johnson@example.com',
        avatar: 'SJ'
      },
      comment: 'I successfully completed my citizenship interview yesterday! Thanks to everyone here for the tips and support.',
      source: 'Social Media Group',
      sourceName: 'US Immigration Support',
      date: '2023-04-04T09:15:00',
      status: 'Active',
      likes: 45,
      replies: 8
    },
    {
      id: 3,
      user: {
        name: 'Raj Patel',
        email: 'raj.patel@example.com',
        avatar: 'RP'
      },
      comment: 'This USCIS update on DACA is very concerning. What does this mean for current recipients?',
      source: 'Feed',
      sourceName: 'User News Feed',
      date: '2023-04-04T11:30:00',
      status: 'Flagged',
      likes: 7,
      replies: 5
    },
    {
      id: 4,
      user: {
        name: 'Anna Garcia',
        email: 'anna.garcia@example.com',
        avatar: 'AG'
      },
      comment: 'Has anyone used a lawyer for their family-based green card application? Looking for recommendations in the Boston area.',
      source: 'Social Media Group',
      sourceName: 'Green Card Holders',
      date: '2023-03-15T16:45:00',
      status: 'Active',
      likes: 3,
      replies: 6
    },
    {
      id: 5,
      user: {
        name: 'David Kim',
        email: 'david.kim@example.com',
        avatar: 'DK'
      },
      comment: 'The new immigration bill is completely unfair and targets specific communities. This is discrimination!',
      source: 'Feed',
      sourceName: 'User News Feed',
      date: '2023-04-01T13:20:00',
      status: 'Flagged',
      likes: 32,
      replies: 17
    },
    {
      id: 6,
      user: {
        name: 'Emma Wilson',
        email: 'emma.wilson@example.com',
        avatar: 'EW'
      },
      comment: 'Just passed my citizenship exam! The officer was very nice and the questions were exactly from the study guide.',
      source: 'Journey',
      sourceName: 'Citizenship Journey',
      date: '2023-04-04T10:12:00',
      status: 'Active',
      likes: 28,
      replies: 12
    },
    {
      id: 7,
      user: {
        name: 'Omar Hassan',
        email: 'omar.hassan@example.com',
        avatar: 'OH'
      },
      comment: 'I\'ve been waiting for my EAD for 6 months now. Anyone else experiencing these delays?',
      source: 'Social Media Group',
      sourceName: 'H1B Visa Professionals',
      date: '2023-04-02T13:45:00',
      status: 'Active',
      likes: 15,
      replies: 9
    },
    {
      id: 8,
      user: {
        name: 'Lisa Chen',
        email: 'lisa.chen@example.com',
        avatar: 'LC'
      },
      comment: 'This new policy is complete garbage. USCIS should be ashamed of how they treat applicants.',
      source: 'Feed',
      sourceName: 'User News Feed',
      date: '2023-02-28T09:30:00',
      status: 'Removed',
      likes: 0,
      replies: 0
    },
    {
      id: 9,
      user: {
        name: 'John Miller',
        email: 'john.miller@example.com',
        avatar: 'JM'
      },
      comment: 'Has anyone received an RFE for their I-485 recently? What documents did they request?',
      source: 'Journey',
      sourceName: 'Family-Based Green Card Journey',
      date: '2023-04-05T08:55:00',
      status: 'Active',
      likes: 6,
      replies: 4
    },
    {
      id: 10,
      user: {
        name: 'Sophia Rodriguez',
        email: 'sophia.rodriguez@example.com',
        avatar: 'SR'
      },
      comment: 'Just had my visa interview at the embassy in Mexico City. The process was much faster than expected!',
      source: 'Social Media Group',
      sourceName: 'Student Visa Applicants',
      date: '2023-04-03T15:22:00',
      status: 'Active',
      likes: 19,
      replies: 7
    }
  ]);

  const sources = [
    'Journey', 'Social Media Group', 'Feed'
  ];
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Filter comments based on search and filters
  const filteredComments = commentsData.filter(comment => {
    const matchesSearch = searchTerm === '' || 
      comment.comment.toLowerCase().includes(searchTerm.toLowerCase()) || 
      comment.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.sourceName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSource = selectedSource === 'all' || comment.source === selectedSource;
    const matchesStatus = selectedStatus === 'all' || comment.status.toLowerCase() === selectedStatus.toLowerCase();
    
    return matchesSearch && matchesSource && matchesStatus;
  });

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Handle comment status change
  const handleStatusChange = (commentId, newStatus) => {
    setCommentsData(commentsData.map(comment => {
      if (comment.id === commentId) {
        return {...comment, status: newStatus};
      }
      return comment;
    }));
  };

  return (
    <div style={{ 
      display: 'flex',
      minHeight: '100vh',
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
            collapsed={collapsed}
            onClick={() => window.location.href = '/social-media-groups'}
          />
          <NavItem
            icon="💬"
            text="User Comments"
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
            }}>User Comments</h1>
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
                }}>All User Comments</h2>
                <div style={{
                  backgroundColor: '#EBF5FF',
                  color: '#2563EB',
                  fontWeight: '500',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem'
                }}>
                  {filteredComments.filter(c => c.status === 'Flagged').length} Flagged Comments
                </div>
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
                    placeholder="Search comments..." 
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
                    Source
                  </label>
                  <select 
                    value={selectedSource}
                    onChange={(e) => setSelectedSource(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #D1D5DB',
                      fontSize: '0.875rem',
                      backgroundColor: 'white'
                    }}
                  >
                    <option value="all">All Sources</option>
                    {sources.map(source => (
                      <option key={source} value={source}>{source}</option>
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
                    <option value="flagged">Flagged</option>
                    <option value="removed">Removed</option>
                  </select>
                </div>
              </div>
            </div>
            
            {filteredComments.length > 0 ? (
              <div>
                {filteredComments.map(comment => (
                  <div key={comment.id} style={{
                    padding: '1.25rem',
                    borderBottom: '1px solid #E5E7EB'
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: '1rem'
                    }}>
                      <div style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '9999px',
                        backgroundColor: '#EBF5FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#2563EB',
                        fontWeight: '600',
                        flexShrink: 0
                      }}>
                        {comment.user.avatar}
                      </div>
                      <div style={{ flex: '1' }}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '0.5rem'
                        }}>
                          <div>
                            <div style={{
                              fontWeight: '500',
                              color: '#1F2937',
                              fontSize: '0.875rem'
                            }}>
                              {comment.user.name}
                            </div>
                            <div style={{
                              display: 'flex',
                              gap: '0.5rem',
                              color: '#6B7280',
                              fontSize: '0.75rem',
                              marginTop: '0.25rem'
                            }}>
                              <span>{formatDate(comment.date)}</span>
                              <span>•</span>
                              <span>{comment.source}</span>
                              <span>•</span>
                              <span>{comment.sourceName}</span>
                            </div>
                          </div>
                          <div>
                            <span style={{
                              display: 'inline-block',
                              padding: '0.25rem 0.5rem',
                              borderRadius: '9999px',
                              fontSize: '0.75rem',
                              fontWeight: '500',
                              backgroundColor: comment.status === 'Active' ? '#ECFDF5' : comment.status === 'Flagged' ? '#FEF3C7' : '#FEF2F2',
                              color: comment.status === 'Active' ? '#059669' : comment.status === 'Flagged' ? '#D97706' : '#EF4444'
                            }}>
                              {comment.status}
                            </span>
                          </div>
                        </div>
                        <div style={{
                          color: '#4B5563',
                          fontSize: '0.875rem',
                          marginBottom: '0.75rem',
                          lineHeight: '1.5',
                          whiteSpace: 'pre-line'
                        }}>
                          {comment.comment}
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          marginTop: '0.5rem'
                        }}>
                          <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            color: '#6B7280',
                            fontSize: '0.75rem'
                          }}>
                            ❤️ {comment.likes}
                          </span>
                          <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            color: '#6B7280',
                            fontSize: '0.75rem'
                          }}>
                            💬 {comment.replies}
                          </span>
                          <div style={{ flex: '1' }}></div>
                          {comment.status !== 'Removed' && (
                            <div style={{
                              display: 'flex',
                              gap: '0.5rem'
                            }}>
                              {comment.status === 'Active' && (
                                <button 
                                  onClick={() => handleStatusChange(comment.id, 'Flagged')}
                                  style={{
                                    padding: '0.375rem 0.75rem',
                                    borderRadius: '0.375rem',
                                    backgroundColor: '#FEF3C7',
                                    color: '#D97706',
                                    border: 'none',
                                    fontSize: '0.75rem',
                                    fontWeight: '500',
                                    cursor: 'pointer'
                                  }}
                                >
                                  Flag
                                </button>
                              )}
                              {comment.status === 'Flagged' && (
                                <button 
                                  onClick={() => handleStatusChange(comment.id, 'Active')}
                                  style={{
                                    padding: '0.375rem 0.75rem',
                                    borderRadius: '0.375rem',
                                    backgroundColor: '#ECFDF5',
                                    color: '#059669',
                                    border: 'none',
                                    fontSize: '0.75rem',
                                    fontWeight: '500',
                                    cursor: 'pointer'
                                  }}
                                >
                                  Approve
                                </button>
                              )}
                              <button 
                                onClick={() => handleStatusChange(comment.id, 'Removed')}
                                style={{
                                  padding: '0.375rem 0.75rem',
                                  borderRadius: '0.375rem',
                                  backgroundColor: '#FEF2F2',
                                  color: '#EF4444',
                                  border: 'none',
                                  fontSize: '0.75rem',
                                  fontWeight: '500',
                                  cursor: 'pointer'
                                }}
                              >
                                Remove
                              </button>
                            </div>
                          )}
                          {comment.status === 'Removed' && (
                            <button 
                              onClick={() => handleStatusChange(comment.id, 'Active')}
                              style={{
                                padding: '0.375rem 0.75rem',
                                borderRadius: '0.375rem',
                                backgroundColor: '#ECFDF5',
                                color: '#059669',
                                border: 'none',
                                fontSize: '0.75rem',
                                fontWeight: '500',
                                cursor: 'pointer'
                              }}
                            >
                              Restore
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{
                padding: '2rem',
                textAlign: 'center',
                color: '#6B7280'
              }}>
                No comments found matching the current filters.
              </div>
            )}
            
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
                Showing {filteredComments.length} of {commentsData.length} comments
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