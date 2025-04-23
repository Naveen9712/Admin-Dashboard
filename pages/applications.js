import React, { useState } from 'react';
import { Bell, Calendar, Users, FileText, CheckCircle, User, Settings, LogOut, BarChart2, Shield, File, Home as HomeIcon, Menu, AlertTriangle, PlusCircle, Trash2, Edit, Eye, Save, X, BookOpen, HelpCircle, Clock, AlertOctagon, Search, Filter, MoreHorizontal, Clipboard, Clock as ClockIcon, Send, FileCheck, BarChart, LineChart, ArrowUp, ArrowDown, UserCheck, PieChart } from 'lucide-react';

export default function ApplicationsManagement() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Application metrics
  const metrics = [
    { id: 1, title: 'Total Applications', value: 256, change: '+12', color: '#EBF5FF', textColor: '#2563EB', borderColor: '#BFDBFE' },
    { id: 2, title: 'Applications In Review', value: 48, change: '+5', color: '#FEF3C7', textColor: '#D97706', borderColor: '#FDE68A' },
    { id: 3, title: 'Pending Documents', value: 32, change: '-3', color: '#FFF7ED', textColor: '#EA580C', borderColor: '#FFEDD5' },
    { id: 4, title: 'Recently Approved', value: 18, change: '+7', color: '#ECFDF5', textColor: '#059669', borderColor: '#A7F3D0' }
  ];

  // Application data
  const applicationData = [
    {
      id: 1,
      applicantName: 'Michael Smith',
      type: 'F1 Visa',
      status: 'In Review',
      submissionDate: '2023-03-28',
      assignedTo: 'Emma Wilson',
      priority: 'Medium',
    },
    {
      id: 2,
      applicantName: 'Sarah Johnson',
      type: 'H1B Visa',
      status: 'Pending Documents',
      submissionDate: '2023-03-25',
      assignedTo: 'Raj Patel',
      priority: 'High',
    },
    {
      id: 3,
      applicantName: 'David Kim',
      type: 'Green Card',
      status: 'New',
      submissionDate: '2023-04-01',
      assignedTo: 'Unassigned',
      priority: 'Low',
    },
    {
      id: 4,
      applicantName: 'Anna Garcia',
      type: 'F1 Visa',
      status: 'Document Verification',
      submissionDate: '2023-03-20',
      assignedTo: 'Emma Wilson',
      priority: 'Medium',
    },
    {
      id: 5,
      applicantName: 'Omar Hassan',
      type: 'H1B Visa',
      status: 'Background Check',
      submissionDate: '2023-03-15',
      assignedTo: 'Raj Patel',
      priority: 'Medium',
    },
    {
      id: 6,
      applicantName: 'Lisa Chen',
      type: 'Green Card',
      status: 'Interview Scheduled',
      submissionDate: '2023-03-10',
      assignedTo: 'Emma Wilson',
      priority: 'High',
    },
    {
      id: 7,
      applicantName: 'Robert Johnson',
      type: 'H1B Visa',
      status: 'Pending Documents',
      submissionDate: '2023-03-22',
      assignedTo: 'Raj Patel',
      priority: 'Low',
    },
    {
      id: 8,
      applicantName: 'Maria Rodriguez',
      type: 'F1 Visa',
      status: 'New',
      submissionDate: '2023-04-02',
      assignedTo: 'Unassigned',
      priority: 'Medium',
    }
  ];

  // Recent decisions data
  const recentDecisions = [
    {
      id: 1,
      applicantName: 'James Wilson',
      type: 'F1 Visa',
      decision: 'Approved',
      decisionDate: '2023-04-04',
      reviewer: 'Emma Wilson',
      reason: 'All documents verified and requirements met'
    },
    {
      id: 2,
      applicantName: 'Aisha Patel',
      type: 'H1B Visa',
      decision: 'Approved',
      decisionDate: '2023-04-03',
      reviewer: 'Raj Patel',
      reason: 'Qualifications and job offer verified'
    },
    {
      id: 3,
      applicantName: 'Carlos Mendoza',
      type: 'Green Card',
      decision: 'Rejected',
      decisionDate: '2023-04-02',
      reviewer: 'Emma Wilson',
      reason: 'Missing required employment documentation'
    },
    {
      id: 4,
      applicantName: 'Mei Lin',
      type: 'F1 Visa',
      decision: 'Approved',
      decisionDate: '2023-04-01',
      reviewer: 'Raj Patel',
      reason: 'University acceptance and financial documents verified'
    }
  ];

  // Filtered applications based on search and filters
  const filteredApplications = applicationData.filter(app => {
    const matchesSearch = searchTerm === '' || 
      app.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      app.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = selectedStatus === 'all' || app.status === selectedStatus;
    const matchesType = selectedType === 'all' || app.type === selectedType;
    const matchesPriority = selectedPriority === 'all' || app.priority === selectedPriority;
    
    return matchesSearch && matchesStatus && matchesType && matchesPriority;
  });

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      backgroundColor: '#F9FAFB'
    },
    sidebar: {
      backgroundColor: '#FFFFFF',
      borderRight: '1px solid #E5E7EB',
      transition: 'all 0.3s',
      width: collapsed ? '4rem' : '16rem'
    },
    sidebarHeader: {
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #E5E7EB'
    },
    sidebarTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#2563EB'
    },
    sidebarNav: {
      marginTop: '1rem'
    },
    navItem: {
      padding: '0.5rem 1rem',
    },
    navLink: {
      display: 'flex',
      alignItems: 'center',
      padding: '0.5rem',
      borderRadius: '0.375rem',
      cursor: 'pointer'
    },
    navLinkActive: {
      backgroundColor: '#EBF5FF',
      color: '#2563EB'
    },
    navLinkHover: {
      backgroundColor: '#F3F4F6',
    },
    navText: {
      marginLeft: '0.5rem',
      color: '#374151'
    },
    navIcon: {
      color: '#6B7280'
    },
    userProfile: {
      position: 'absolute',
      bottom: '0',
      width: '100%',
      borderTop: '1px solid #E5E7EB',
      padding: '1rem'
    },
    userProfileContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: collapsed ? 'center' : ''
    },
    userAvatar: {
      width: '2rem',
      height: '2rem',
      borderRadius: '9999px',
      backgroundColor: '#EBF5FF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#2563EB',
      fontWeight: '600'
    },
    userDetails: {
      marginLeft: '0.5rem'
    },
    userName: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151'
    },
    userEmail: {
      fontSize: '0.75rem',
      color: '#6B7280'
    },
    main: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    },
    header: {
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #E5E7EB'
    },
    headerContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem'
    },
    headerTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1F2937'
    },
    headerActions: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    iconButton: {
      padding: '0.5rem',
      borderRadius: '9999px'
    },
    iconButtonHover: {
      backgroundColor: '#F3F4F6'
    },
    notificationDot: {
      position: 'absolute',
      top: '0.25rem',
      right: '0.25rem',
      width: '0.5rem',
      height: '0.5rem',
      backgroundColor: '#EF4444',
      borderRadius: '9999px'
    },
    content: {
      flex: '1',
      overflowY: 'auto',
      padding: '1.5rem',
      backgroundColor: '#F9FAFB'
    },
    searchBar: {
      display: 'flex',
      marginBottom: '1rem',
      gap: '0.5rem'
    },
    searchInput: {
      flex: '1',
      padding: '0.5rem 1rem',
      borderRadius: '0.375rem',
      border: '1px solid #D1D5DB',
      display: 'flex',
      alignItems: 'center'
    },
    filterDropdown: {
      padding: '0.5rem 1rem',
      borderRadius: '0.375rem',
      border: '1px solid #D1D5DB',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#FFFFFF',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      border: '1px solid #E5E7EB'
    },
    th: {
      padding: '0.75rem 1rem',
      textAlign: 'left',
      fontSize: '0.75rem',
      fontWeight: '600',
      color: '#6B7280',
      backgroundColor: '#F9FAFB',
      borderBottom: '1px solid #E5E7EB'
    },
    td: {
      padding: '0.75rem 1rem',
      fontSize: '0.875rem',
      color: '#1F2937',
      borderBottom: '1px solid #E5E7EB'
    },
    badge: {
      padding: '0.25rem 0.5rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500',
      display: 'inline-flex',
      alignItems: 'center'
    },
    badgeNew: {
      backgroundColor: '#EBF5FF',
      color: '#2563EB'
    },
    badgeInReview: {
      backgroundColor: '#FEF3C7',
      color: '#D97706'
    },
    badgePending: {
      backgroundColor: '#FFF7ED',
      color: '#EA580C'
    },
    badgeScheduled: {
      backgroundColor: '#F3F4F6',
      color: '#4B5563'
    },
    badgeVerification: {
      backgroundColor: '#F5F3FF',
      color: '#7C3AED'
    },
    badgeApproved: {
      backgroundColor: '#ECFDF5',
      color: '#059669'
    },
    badgeRejected: {
      backgroundColor: '#FEE2E2',
      color: '#DC2626'
    },
    badgeHigh: {
      backgroundColor: '#FEE2E2',
      color: '#DC2626'
    },
    badgeMedium: {
      backgroundColor: '#FEF3C7',
      color: '#D97706'
    },
    badgeLow: {
      backgroundColor: '#EBF5FF',
      color: '#2563EB'
    },
    actionsWrapper: {
      display: 'flex',
      gap: '0.5rem'
    },
    button: {
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
    },
    buttonSecondary: {
      backgroundColor: '#FFFFFF',
      color: '#2563EB',
      border: '1px solid #2563EB'
    },
    sectionTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1F2937',
      marginBottom: '1rem'
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      border: '1px solid #E5E7EB',
      marginBottom: '1.5rem'
    },
    cardHeader: {
      padding: '1rem 1.5rem',
      borderBottom: '1px solid #E5E7EB',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    cardTitle: {
      fontWeight: '600',
      color: '#1F2937'
    },
    cardContent: {
      padding: '1.5rem'
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          {!collapsed && <span style={styles.sidebarTitle}>ImmiHub Admin</span>}
          <button onClick={toggleSidebar} style={{padding: '0.25rem', borderRadius: '0.375rem'}}>
            <Menu size={20} />
          </button>
        </div>
        <nav style={styles.sidebarNav}>
          <div style={styles.navItem}>
            <div style={styles.navLink} onClick={() => window.location.href = '/'}>
              {collapsed ? (
                <HomeIcon size={20} style={styles.navIcon} />
              ) : (
                <>
                  <HomeIcon size={20} style={styles.navIcon} />
                  <span style={styles.navText}>Dashboard</span>
                </>
              )}
            </div>
          </div>
          <div style={styles.navItem}>
            <div style={styles.navLink} onClick={() => window.location.href = '/user-management'}>
              {collapsed ? (
                <Users size={20} style={styles.navIcon} />
              ) : (
                <>
                  <Users size={20} style={styles.navIcon} />
                  <span style={styles.navText}>User Management</span>
                </>
              )}
            </div>
          </div>
          <div style={styles.navItem}>
            <div style={{...styles.navLink, ...styles.navLinkActive}}>
              {collapsed ? (
                <FileText size={20} />
              ) : (
                <>
                  <FileText size={20} />
                  <span style={{marginLeft: '0.5rem'}}>Applications</span>
                </>
              )}
            </div>
          </div>
          <div style={styles.navItem}>
            <div style={styles.navLink} onClick={() => window.location.href = '/documents'}>
              {collapsed ? (
                <File size={20} style={styles.navIcon} />
              ) : (
                <>
                  <File size={20} style={styles.navIcon} />
                  <span style={styles.navText}>Documents</span>
                </>
              )}
            </div>
          </div>
          <div style={styles.navItem}>
            <div style={styles.navLink} onClick={() => window.location.href = '/journey-management'}>
              {collapsed ? (
                <BookOpen size={20} style={styles.navIcon} />
              ) : (
                <>
                  <BookOpen size={20} style={styles.navIcon} />
                  <span style={styles.navText}>Journey Management</span>
                </>
              )}
            </div>
          </div>
          <div style={styles.navItem}>
            <div style={styles.navLink}>
              {collapsed ? (
                <Shield size={20} style={styles.navIcon} />
              ) : (
                <>
                  <Shield size={20} style={styles.navIcon} />
                  <span style={styles.navText}>Compliance</span>
                </>
              )}
            </div>
          </div>
          <div style={styles.navItem}>
            <div style={styles.navLink}>
              {collapsed ? (
                <BarChart2 size={20} style={styles.navIcon} />
              ) : (
                <>
                  <BarChart2 size={20} style={styles.navIcon} />
                  <span style={styles.navText}>Analytics</span>
                </>
              )}
            </div>
          </div>
          <div style={styles.navItem}>
            <div style={styles.navLink}>
              {collapsed ? (
                <Settings size={20} style={styles.navIcon} />
              ) : (
                <>
                  <Settings size={20} style={styles.navIcon} />
                  <span style={styles.navText}>Settings</span>
                </>
              )}
            </div>
          </div>
        </nav>
        <div style={styles.userProfile}>
          <div style={styles.userProfileContainer}>
            {collapsed ? (
              <LogOut size={20} style={styles.navIcon} />
            ) : (
              <>
                <div style={styles.userAvatar}>A</div>
                <div style={styles.userDetails}>
                  <div style={styles.userName}>Admin User</div>
                  <div style={styles.userEmail}>admin@immihub.com</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        {/* Top Navigation */}
        <header style={styles.header}>
          <div style={styles.headerContent}>
            <h1 style={styles.headerTitle}>Applications Management</h1>
            <div style={styles.headerActions}>
              <button style={{...styles.iconButton, position: 'relative'}}>
                <Bell size={20} style={{color: '#4B5563'}} />
                <span style={styles.notificationDot}></span>
              </button>
              <button style={styles.iconButton}>
                <User size={20} style={{color: '#4B5563'}} />
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main style={styles.content}>
          {/* Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem', 
            marginBottom: '1.5rem'
          }}>
            {metrics.map((metric) => (
              <div key={metric.id} style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                border: `1px solid ${metric.borderColor}`,
                padding: '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}>
                  <div>
                    <p style={{
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#6B7280'
                    }}>{metric.title}</p>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      marginTop: '0.25rem'
                    }}>{metric.value}</h3>
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '9999px',
                    backgroundColor: metric.color,
                    color: metric.textColor
                  }}>
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions Section */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            border: '1px solid #E5E7EB',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <h2 style={{
              fontWeight: '600',
              color: '#1F2937',
              marginBottom: '1rem'
            }}>Quick Actions</h2>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              <button style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#2563EB',
                color: '#FFFFFF',
                borderRadius: '0.375rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                border: 'none',
                outline: 'none'
              }}>
                <Eye size={16} />
                Review New Applications
              </button>
              <button style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#2563EB',
                color: '#FFFFFF',
                borderRadius: '0.375rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                border: 'none',
                outline: 'none'
              }}>
                <FileCheck size={16} />
                Process Pending Documents
              </button>
              <button style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#2563EB',
                color: '#FFFFFF',
                borderRadius: '0.375rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                border: 'none',
                outline: 'none'
              }}>
                <BarChart size={16} />
                Generate Reports
              </button>
              <button style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#2563EB',
                color: '#FFFFFF',
                borderRadius: '0.375rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                border: 'none',
                outline: 'none'
              }}>
                <Send size={16} />
                Send Batch Notifications
              </button>
            </div>
          </div>

          {/* Application Queue Section */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>Application Queue</h2>
              <button style={styles.button}>
                <PlusCircle size={16} />
                <span>New Application</span>
              </button>
            </div>
            <div style={styles.cardContent}>
              {/* Search and Filter Bar */}
              <div style={styles.searchBar}>
                <div style={styles.searchInput}>
                  <Search size={16} style={{color: '#6B7280', marginRight: '0.5rem'}} />
                  <input 
                    type="text" 
                    placeholder="Search applications..." 
                    style={{border: 'none', outline: 'none', width: '100%'}}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select 
                  style={styles.filterDropdown}
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="F1 Visa">F1 Visa</option>
                  <option value="H1B Visa">H1B Visa</option>
                  <option value="Green Card">Green Card</option>
                </select>
                <select 
                  style={styles.filterDropdown}
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="New">New</option>
                  <option value="In Review">In Review</option>
                  <option value="Pending Documents">Pending Documents</option>
                  <option value="Document Verification">Document Verification</option>
                  <option value="Background Check">Background Check</option>
                  <option value="Interview Scheduled">Interview Scheduled</option>
                </select>
                <select 
                  style={styles.filterDropdown}
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                >
                  <option value="all">All Priorities</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              {/* Applications Table */}
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Applicant Name</th>
                    <th style={styles.th}>Application Type</th>
                    <th style={styles.th}>Status</th>
                    <th style={styles.th}>Submission Date</th>
                    <th style={styles.th}>Assigned To</th>
                    <th style={styles.th}>Priority</th>
                    <th style={styles.th}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.map((application) => (
                    <tr key={application.id}>
                      <td style={styles.td}>
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
                            <span style={{color: '#2563EB', fontWeight: '600'}}>{application.applicantName.charAt(0)}</span>
                          </div>
                          <span>{application.applicantName}</span>
                        </div>
                      </td>
                      <td style={styles.td}>{application.type}</td>
                      <td style={styles.td}>
                        <span style={{
                          ...styles.badge,
                          ...(application.status === 'New' ? styles.badgeNew : 
                             application.status === 'In Review' ? styles.badgeInReview :
                             application.status === 'Pending Documents' ? styles.badgePending :
                             application.status === 'Interview Scheduled' ? styles.badgeScheduled :
                             application.status === 'Document Verification' ? styles.badgeVerification :
                             application.status === 'Background Check' ? styles.badgeVerification :
                             styles.badgeInReview)
                        }}>
                          {application.status}
                        </span>
                      </td>
                      <td style={styles.td}>{formatDate(application.submissionDate)}</td>
                      <td style={styles.td}>
                        {application.assignedTo === 'Unassigned' ? (
                          <span style={{color: '#9CA3AF'}}>{application.assignedTo}</span>
                        ) : (
                          application.assignedTo
                        )}
                      </td>
                      <td style={styles.td}>
                        <span style={{
                          ...styles.badge,
                          ...(application.priority === 'High' ? styles.badgeHigh : 
                             application.priority === 'Medium' ? styles.badgeMedium :
                             styles.badgeLow)
                        }}>
                          {application.priority}
                        </span>
                      </td>
                      <td style={styles.td}>
                        <div style={styles.actionsWrapper}>
                          <button style={{padding: '0.25rem', color: '#4B5563'}}>
                            <Eye size={16} />
                          </button>
                          <button style={{padding: '0.25rem', color: '#4B5563'}}>
                            <UserCheck size={16} />
                          </button>
                          <button style={{padding: '0.25rem', color: '#4B5563'}}>
                            <MoreHorizontal size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {filteredApplications.length === 0 && (
                <div style={{textAlign: 'center', padding: '2rem', color: '#6B7280'}}>
                  No applications match your filter criteria
                </div>
              )}

              {/* Pagination */}
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem'}}>
                <div style={{color: '#6B7280', fontSize: '0.875rem'}}>
                  Showing 1 to {filteredApplications.length} of {filteredApplications.length} applications
                </div>
                <div style={{display: 'flex', gap: '0.5rem'}}>
                  <button style={{
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.375rem',
                    border: '1px solid #D1D5DB',
                    backgroundColor: '#FFFFFF',
                    color: '#4B5563',
                    fontSize: '0.875rem'
                  }}>
                    Previous
                  </button>
                  <button style={{
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.375rem',
                    border: '1px solid #D1D5DB',
                    backgroundColor: '#FFFFFF',
                    color: '#4B5563',
                    fontSize: '0.875rem'
                  }}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Application Statistics Section */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>Application Statistics</h2>
              <button style={{
                fontSize: '0.875rem',
                color: '#2563EB'
              }}>View Detailed Reports</button>
            </div>
            <div style={{padding: '1.5rem'}}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {/* Applications by Type Chart */}
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '0.5rem',
                  border: '1px solid #E5E7EB',
                  padding: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#1F2937',
                    marginBottom: '1rem'
                  }}>Applications by Type</h3>
                  <div style={{
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#F9FAFB',
                    borderRadius: '0.375rem'
                  }}>
                    <div style={{textAlign: 'center'}}>
                      <PieChart size={64} style={{color: '#2563EB', marginBottom: '0.5rem'}} />
                      <p style={{color: '#6B7280', fontSize: '0.875rem'}}>Pie chart visualization</p>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '1rem'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <div style={{width: '0.75rem', height: '0.75rem', backgroundColor: '#2563EB', borderRadius: '9999px'}}></div>
                      <span style={{fontSize: '0.75rem', color: '#4B5563'}}>F1 Visa (42%)</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <div style={{width: '0.75rem', height: '0.75rem', backgroundColor: '#10B981', borderRadius: '9999px'}}></div>
                      <span style={{fontSize: '0.75rem', color: '#4B5563'}}>H1B Visa (35%)</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <div style={{width: '0.75rem', height: '0.75rem', backgroundColor: '#F59E0B', borderRadius: '9999px'}}></div>
                      <span style={{fontSize: '0.75rem', color: '#4B5563'}}>Green Card (23%)</span>
                    </div>
                  </div>
                </div>

                {/* Processing Times Chart */}
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '0.5rem',
                  border: '1px solid #E5E7EB',
                  padding: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#1F2937',
                    marginBottom: '1rem'
                  }}>Processing Times</h3>
                  <div style={{
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#F9FAFB',
                    borderRadius: '0.375rem'
                  }}>
                    <div style={{textAlign: 'center'}}>
                      <LineChart size={64} style={{color: '#2563EB', marginBottom: '0.5rem'}} />
                      <p style={{color: '#6B7280', fontSize: '0.875rem'}}>Line chart visualization</p>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '1rem'
                  }}>
                    <div>
                      <div style={{fontSize: '0.75rem', color: '#6B7280'}}>Average Processing Time</div>
                      <div style={{fontSize: '1rem', fontWeight: '600', color: '#1F2937'}}>14.2 days</div>
                    </div>
                    <div>
                      <div style={{fontSize: '0.75rem', color: '#6B7280'}}>Change (30 days)</div>
                      <div style={{fontSize: '1rem', fontWeight: '600', color: '#059669', display: 'flex', alignItems: 'center'}}>
                        <ArrowDown size={14} style={{marginRight: '0.25rem'}} />
                        -2.5 days
                      </div>
                    </div>
                  </div>
                </div>

                {/* Approval/Rejection Rates */}
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '0.5rem',
                  border: '1px solid #E5E7EB',
                  padding: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#1F2937',
                    marginBottom: '1rem'
                  }}>Approval/Rejection Rates</h3>
                  <div style={{
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#F9FAFB',
                    borderRadius: '0.375rem'
                  }}>
                    <div style={{textAlign: 'center'}}>
                      <BarChart size={64} style={{color: '#2563EB', marginBottom: '0.5rem'}} />
                      <p style={{color: '#6B7280', fontSize: '0.875rem'}}>Bar chart visualization</p>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '1rem'
                  }}>
                    <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: '0.75rem', color: '#6B7280'}}>Approval Rate</div>
                      <div style={{fontSize: '1rem', fontWeight: '600', color: '#059669'}}>87%</div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: '0.75rem', color: '#6B7280'}}>Rejection Rate</div>
                      <div style={{fontSize: '1rem', fontWeight: '600', color: '#DC2626'}}>9%</div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: '0.75rem', color: '#6B7280'}}>Pending Decision</div>
                      <div style={{fontSize: '1rem', fontWeight: '600', color: '#F59E0B'}}>4%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Decisions Section */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>Recent Decisions</h2>
              <button style={{
                fontSize: '0.875rem',
                color: '#2563EB'
              }}>View All Decisions</button>
            </div>
            <div>
              {recentDecisions.map((decision) => (
                <div key={decision.id} style={{
                  padding: '1rem 1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  borderBottom: '1px solid #E5E7EB'
                }}>
                  <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: decision.decision === 'Approved' ? '#ECFDF5' : '#FEE2E2',
                    color: decision.decision === 'Approved' ? '#059669' : '#DC2626',
                    flexShrink: 0,
                    marginRight: '1rem'
                  }}>
                    {decision.decision === 'Approved' ? 
                      <CheckCircle size={16} /> :
                      <X size={16} />
                    }
                  </div>
                  <div style={{
                    flex: '1'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '0.25rem'
                    }}>
                      <div>
                        <p style={{
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          color: '#1F2937'
                        }}>
                          {decision.applicantName}
                        </p>
                        <p style={{
                          fontSize: '0.75rem',
                          color: '#6B7280',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <span>{decision.type}</span>
                          <span>•</span>
                          <span>Decision by {decision.reviewer}</span>
                        </p>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <span style={{
                          ...styles.badge,
                          ...(decision.decision === 'Approved' ? styles.badgeApproved : styles.badgeRejected)
                        }}>
                          {decision.decision}
                        </span>
                        <span style={{
                          fontSize: '0.75rem',
                          color: '#6B7280',
                          marginLeft: '0.5rem'
                        }}>
                          {formatDate(decision.decisionDate)}
                        </span>
                      </div>
                    </div>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#4B5563'
                    }}>
                      {decision.reason}
                    </p>
                  </div>
                </div>
              ))}
              
              {recentDecisions.length === 0 && (
                <div style={{textAlign: 'center', padding: '2rem', color: '#6B7280'}}>
                  No recent decisions to display
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 