import React, { useState } from 'react';
import { Bell, Calendar, Users, FileText, CheckCircle, User, Settings, LogOut, BarChart2, Shield, File, Home as HomeIcon, Menu, AlertTriangle, PlusCircle, Trash2, Edit, Eye, Save, X, BookOpen, HelpCircle, Clock, AlertOctagon, Search, Filter, MoreHorizontal } from 'lucide-react';
import NavItem from '../components/NavItem';

export default function UserManagement() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  
  // Demo user data
  const [userData, setUserData] = useState([
    {
      id: 1,
      name: 'Michael Smith',
      email: 'michael.smith@example.com',
      role: 'User',
      status: 'Active',
      lastLogin: '2023-04-03T14:22:00',
      joinedDate: '2022-11-15',
      company: 'Acme Corp',
      phone: '+1 (555) 123-4567',
      documents: 12,
      applications: 2
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      role: 'User',
      status: 'Active',
      lastLogin: '2023-04-04T09:15:00',
      joinedDate: '2022-06-22',
      company: 'Global Enterprises',
      phone: '+1 (555) 987-6543',
      documents: 8,
      applications: 1
    },
    {
      id: 3,
      name: 'Raj Patel',
      email: 'raj.patel@example.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2023-04-04T11:30:00',
      joinedDate: '2022-02-10',
      company: 'Tech Solutions Inc',
      phone: '+1 (555) 456-7890',
      documents: 5,
      applications: 0
    },
    {
      id: 4,
      name: 'Anna Garcia',
      email: 'anna.garcia@example.com',
      role: 'User',
      status: 'Inactive',
      lastLogin: '2023-03-15T16:45:00',
      joinedDate: '2022-08-30',
      company: 'Innovate LLC',
      phone: '+1 (555) 234-5678',
      documents: 16,
      applications: 3
    },
    {
      id: 5,
      name: 'David Kim',
      email: 'david.kim@example.com',
      role: 'User',
      status: 'Pending',
      lastLogin: null,
      joinedDate: '2023-04-01',
      company: 'NextGen Solutions',
      phone: '+1 (555) 876-5432',
      documents: 0,
      applications: 1
    },
    {
      id: 6,
      name: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      role: 'Manager',
      status: 'Active',
      lastLogin: '2023-04-04T10:12:00',
      joinedDate: '2022-05-17',
      company: 'Wilson & Associates',
      phone: '+1 (555) 345-6789',
      documents: 23,
      applications: 4
    },
    {
      id: 7,
      name: 'Omar Hassan',
      email: 'omar.hassan@example.com',
      role: 'User',
      status: 'Active',
      lastLogin: '2023-04-02T13:45:00',
      joinedDate: '2023-01-05',
      company: 'Global Innovations',
      phone: '+1 (555) 567-8901',
      documents: 7,
      applications: 2
    },
    {
      id: 8,
      name: 'Lisa Chen',
      email: 'lisa.chen@example.com',
      role: 'User',
      status: 'Inactive',
      lastLogin: '2023-02-28T09:30:00',
      joinedDate: '2022-09-11',
      company: 'Chen International',
      phone: '+1 (555) 678-9012',
      documents: 11,
      applications: 0
    }
  ]);

  // Access control roles
  const roles = [
    { id: 'user', name: 'User', description: 'Standard user with limited access', permissions: ['view_own_documents', 'submit_applications', 'view_own_journey'] },
    { id: 'manager', name: 'Manager', description: 'Manages team members and has additional access', permissions: ['view_own_documents', 'submit_applications', 'view_own_journey', 'view_team_documents', 'approve_team_applications'] },
    { id: 'admin', name: 'Admin', description: 'Administrative access to manage users and content', permissions: ['view_all_documents', 'manage_users', 'manage_journeys', 'manage_applications', 'system_settings'] }
  ];
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Filter users based on search and filters
  const filteredUsers = userData.filter(user => {
    const matchesSearch = searchTerm === '' || 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = selectedRole === 'all' || user.role.toLowerCase() === selectedRole.toLowerCase();
    const matchesStatus = selectedStatus === 'all' || user.status.toLowerCase() === selectedStatus.toLowerCase();
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const formatJoinedDate = (dateString) => {
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
            collapsed={collapsed}
            onClick={() => window.location.href = '/admin-dashboard'}
          />
          <NavItem
            icon="👤"
            text="User Management"
            active={true}
            collapsed={collapsed}
            onClick={() => {}}
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
            icon="👥"
            text="Social Media Groups Management"
            collapsed={collapsed}
            onClick={() => window.location.href = '/social-media-groups'}
          />
          <NavItem
            icon="💬"
            text="User Comments"
            collapsed={collapsed}
            onClick={() => window.location.href = '/user-comments'}
          />
          <NavItem
            icon="⚙️"
            text="Settings"
            collapsed={collapsed}
            onClick={() => {}}
          />
          <NavItem
            icon="⚖️"
            text="Attorney Dashboard"
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
            }}>User Management</h1>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <button style={{
                position: 'relative',
                padding: '0.5rem',
                borderRadius: '9999px',
                border: 'none',
                background: 'none',
                cursor: 'pointer'
              }}>
                <Bell size={20} />
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
                <User size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div style={{
          flex: '1',
          overflowY: 'auto',
          padding: '1.5rem',
          backgroundColor: '#F9FAFB'
        }}>
          {/* Tabs */}
          <div style={{
            display: 'flex',
            borderBottom: '1px solid #E5E7EB',
            marginBottom: '1.5rem'
          }}>
            <button
              onClick={() => setActiveTab('users')}
              style={{
                padding: '0.75rem 1rem',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '0.875rem',
                borderBottom: activeTab === 'users' ? '2px solid #2563EB' : '2px solid transparent',
                color: activeTab === 'users' ? '#2563EB' : 'inherit'
              }}
            >
              Users
            </button>
            <button
              onClick={() => setActiveTab('roles')}
              style={{
                padding: '0.75rem 1rem',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '0.875rem',
                borderBottom: activeTab === 'roles' ? '2px solid #2563EB' : '2px solid transparent',
                color: activeTab === 'roles' ? '#2563EB' : 'inherit'
              }}
            >
              Roles & Permissions
            </button>
          </div>

          {/* Users Tab Content */}
          {activeTab === 'users' && (
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                <h2 style={{fontSize: '1.25rem', fontWeight: '600', color: '#1F2937'}}>All Users</h2>
                <button style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#2563EB',
                  color: '#FFFFFF',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  border: 'none',
                  outline: 'none'
                }}>
                  <PlusCircle size={16} />
                  <span>Add User</span>
                </button>
              </div>
              
              {/* Search and Filter Bar */}
              <div style={{
                display: 'flex',
                marginBottom: '1rem',
                gap: '0.5rem'
              }}>
                <div style={{
                  flex: '1',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  border: '1px solid #D1D5DB',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Search size={16} style={{color: '#6B7280', marginRight: '0.5rem'}} />
                  <input 
                    type="text" 
                    placeholder="Search users..." 
                    style={{border: 'none', outline: 'none', width: '100%'}}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select 
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem',
                    border: '1px solid #D1D5DB',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  <option value="all">All Roles</option>
                  <option value="user">User</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                </select>
                <select 
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem',
                    border: '1px solid #D1D5DB',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              
              {/* Users Table */}
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                backgroundColor: '#FFFFFF',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                border: '1px solid #E5E7EB'
              }}>
                <thead>
                  <tr>
                    <th style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#6B7280',
                      backgroundColor: '#F9FAFB',
                      borderBottom: '1px solid #E5E7EB'
                    }}>User</th>
                    <th style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#6B7280',
                      backgroundColor: '#F9FAFB',
                      borderBottom: '1px solid #E5E7EB'
                    }}>Role</th>
                    <th style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#6B7280',
                      backgroundColor: '#F9FAFB',
                      borderBottom: '1px solid #E5E7EB'
                    }}>Status</th>
                    <th style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#6B7280',
                      backgroundColor: '#F9FAFB',
                      borderBottom: '1px solid #E5E7EB'
                    }}>Last Login</th>
                    <th style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#6B7280',
                      backgroundColor: '#F9FAFB',
                      borderBottom: '1px solid #E5E7EB'
                    }}>Date Joined</th>
                    <th style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#6B7280',
                      backgroundColor: '#F9FAFB',
                      borderBottom: '1px solid #E5E7EB'
                    }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td style={{
                        padding: '0.75rem 1rem',
                        fontSize: '0.875rem',
                        color: '#1F2937',
                        borderBottom: '1px solid #E5E7EB'
                      }}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                          <div style={{
                            width: '2rem', 
                            height: '2rem', 
                            borderRadius: '9999px', 
                            backgroundColor: '#EBF5FF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '0.75rem'
                          }}>
                            <span style={{color: '#2563EB', fontWeight: '600'}}>{user.name.charAt(0)}</span>
                          </div>
                          <div>
                            <div style={{fontWeight: '500'}}>{user.name}</div>
                            <div style={{fontSize: '0.75rem', color: '#6B7280'}}>{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{
                        padding: '0.75rem 1rem',
                        fontSize: '0.875rem',
                        color: '#1F2937',
                        borderBottom: '1px solid #E5E7EB'
                      }}>{user.role}</td>
                      <td style={{
                        padding: '0.75rem 1rem',
                        fontSize: '0.875rem',
                        color: '#1F2937',
                        borderBottom: '1px solid #E5E7EB'
                      }}>
                        <span style={{
                          padding: '0.25rem 0.5rem',
                          borderRadius: '9999px',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          display: 'inline-flex',
                          alignItems: 'center',
                          backgroundColor: user.status === 'Active' ? '#ECFDF5' : 
                                         user.status === 'Inactive' ? '#F3F4F6' : 
                                         '#FEF3C7',
                          color: user.status === 'Active' ? '#059669' : 
                                user.status === 'Inactive' ? '#6B7280' : 
                                '#D97706'
                        }}>
                          {user.status}
                        </span>
                      </td>
                      <td style={{
                        padding: '0.75rem 1rem',
                        fontSize: '0.875rem',
                        color: '#1F2937',
                        borderBottom: '1px solid #E5E7EB'
                      }}>{formatDate(user.lastLogin)}</td>
                      <td style={{
                        padding: '0.75rem 1rem',
                        fontSize: '0.875rem',
                        color: '#1F2937',
                        borderBottom: '1px solid #E5E7EB'
                      }}>{formatJoinedDate(user.joinedDate)}</td>
                      <td style={{
                        padding: '0.75rem 1rem',
                        fontSize: '0.875rem',
                        color: '#1F2937',
                        borderBottom: '1px solid #E5E7EB'
                      }}>
                        <div style={{display: 'flex', gap: '0.5rem'}}>
                          <button style={{padding: '0.25rem', color: '#6B7280', cursor: 'pointer'}}>
                            <Eye size={16} />
                          </button>
                          <button style={{padding: '0.25rem', color: '#6B7280', cursor: 'pointer'}}>
                            <Edit size={16} />
                          </button>
                          <button style={{padding: '0.25rem', color: '#6B7280', cursor: 'pointer'}}>
                            <MoreHorizontal size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {filteredUsers.length === 0 && (
                <div style={{textAlign: 'center', padding: '2rem', color: '#6B7280'}}>
                  No users match your filter criteria
                </div>
              )}
            </div>
          )}

          {/* Roles Tab Content */}
          {activeTab === 'roles' && (
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                <h2 style={{fontSize: '1.25rem', fontWeight: '600', color: '#1F2937'}}>User Roles</h2>
                <button style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#2563EB',
                  color: '#FFFFFF',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  border: 'none',
                  outline: 'none'
                }}>
                  <PlusCircle size={16} />
                  <span>Add Role</span>
                </button>
              </div>
              
              <div>
                {roles.map((role) => (
                  <div key={role.id} style={{
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #E5E7EB',
                    backgroundColor: '#FFFFFF',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.5rem'
                    }}>
                      <div style={{
                        fontWeight: '600',
                        color: '#1F2937'
                      }}>{role.name}</div>
                      <div style={{display: 'flex', gap: '0.5rem'}}>
                        <button style={{padding: '0.25rem', color: '#6B7280', cursor: 'pointer'}}>
                          <Edit size={16} />
                        </button>
                        <button style={{padding: '0.25rem', color: '#6B7280', cursor: 'pointer'}}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#6B7280',
                      marginBottom: '0.5rem'
                    }}>{role.description}</div>
                    <div style={{fontSize: '0.875rem', fontWeight: '500', color: '#4B5563', marginTop: '0.5rem'}}>
                      Permissions:
                    </div>
                    <div style={{marginTop: '0.5rem'}}>
                      {role.permissions.map((permission, index) => (
                        <div key={index} style={{
                          padding: '0.25rem 0',
                          fontSize: '0.875rem',
                          color: '#4B5563',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}>
                          <CheckCircle size={14} style={{color: '#059669'}} />
                          <span>{permission.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}