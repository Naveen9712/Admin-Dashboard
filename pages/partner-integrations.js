import React, { useState } from 'react';
import { 
  Bell, Calendar, Users, FileText, CheckCircle, User, Settings, 
  LogOut, BarChart2, Shield, File, Menu, AlertTriangle, PlusCircle, 
  Trash2, Edit, Eye, Save, X, BookOpen, HelpCircle, Clock, 
  AlertOctagon, Search, Filter, MoreHorizontal, Handshake, MessageSquare,
  TrendingUp, TrendingDown, ArrowRight, Send, RefreshCw, XCircle, 
  Download, Upload, Briefcase, FileCheck, UserCheck, CreditCard
} from 'lucide-react';
import NavItem from '../components/NavItem';

export default function PartnerIntegrations() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('partner-integrations');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedPartner, setSelectedPartner] = useState('all');
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  
  // Mock data for statistics
  const statistics = [
    { 
      title: 'Active Requests', 
      value: 128, 
      trend: +12, 
      icon: <MessageSquare size={20} color="#3B82F6" />,
      color: '#3B82F6'
    },
    { 
      title: 'Pending Partner Response', 
      value: 47, 
      trend: -3, 
      icon: <Clock size={20} color="#F59E0B" />,
      color: '#F59E0B'
    },
    { 
      title: 'Completed (30 Days)', 
      value: 214, 
      trend: +28, 
      icon: <CheckCircle size={20} color="#10B981" />,
      color: '#10B981'
    },
    { 
      title: 'Failed/Rejected', 
      value: 9, 
      trend: +2, 
      icon: <AlertTriangle size={20} color="#EF4444" />,
      color: '#EF4444'
    }
  ];
  
  // Mock data for service requests
  const serviceRequests = [
    {
      id: 'SR-2023-05678',
      user: 'Maria Garcia',
      userId: 'USR-34982',
      serviceType: 'Insurance',
      partner: 'SafeGuard Insurance',
      status: 'New',
      dateSubmitted: '2023-06-10T14:30:00',
      lastUpdated: '2023-06-10T14:30:00'
    },
    {
      id: 'SR-2023-05679',
      user: 'James Wilson',
      userId: 'USR-29875',
      serviceType: 'Tax Filing',
      partner: 'ExpertTax Solutions',
      status: 'Pending',
      dateSubmitted: '2023-06-09T10:15:00',
      lastUpdated: '2023-06-09T16:45:00'
    },
    {
      id: 'SR-2023-05680',
      user: 'Sophia Lee',
      userId: 'USR-31456',
      serviceType: 'Loans',
      partner: 'ImmiFund Capital',
      status: 'In Progress',
      dateSubmitted: '2023-06-08T09:20:00',
      lastUpdated: '2023-06-10T11:10:00'
    },
    {
      id: 'SR-2023-05681',
      user: 'Robert Chen',
      userId: 'USR-28734',
      serviceType: 'Insurance',
      partner: 'SafeGuard Insurance',
      status: 'Completed',
      dateSubmitted: '2023-06-07T16:40:00',
      lastUpdated: '2023-06-09T14:25:00'
    },
    {
      id: 'SR-2023-05682',
      user: 'Emma Rodriguez',
      userId: 'USR-30128',
      serviceType: 'Tax Filing',
      partner: 'ExpertTax Solutions',
      status: 'Failed',
      dateSubmitted: '2023-06-08T11:30:00',
      lastUpdated: '2023-06-10T09:15:00'
    },
    {
      id: 'SR-2023-05683',
      user: 'Daniel Kim',
      userId: 'USR-32567',
      serviceType: 'Loans',
      partner: 'ImmiFund Capital',
      status: 'Pending',
      dateSubmitted: '2023-06-09T13:45:00',
      lastUpdated: '2023-06-10T10:30:00'
    },
    {
      id: 'SR-2023-05684',
      user: 'Olivia Martinez',
      userId: 'USR-29034',
      serviceType: 'Insurance',
      partner: 'GlobalHealth Partners',
      status: 'New',
      dateSubmitted: '2023-06-10T09:10:00',
      lastUpdated: '2023-06-10T09:10:00'
    }
  ];
  
  // Mock data for partners
  const partners = [
    {
      id: 1,
      name: 'SafeGuard Insurance',
      status: 'Online',
      responseTime: '1.2s',
      responseTime24h: '1.5s',
      successRate: 98.2,
      maintenanceScheduled: false,
      services: ['Insurance', 'Health Plans']
    },
    {
      id: 2,
      name: 'ExpertTax Solutions',
      status: 'Online',
      responseTime: '1.8s',
      responseTime24h: '2.1s',
      successRate: 96.5,
      maintenanceScheduled: true,
      maintenanceDate: '2023-06-15T02:00:00',
      services: ['Tax Filing', 'Financial Planning']
    },
    {
      id: 3,
      name: 'ImmiFund Capital',
      status: 'Degraded',
      responseTime: '3.5s',
      responseTime24h: '2.3s',
      successRate: 89.7,
      maintenanceScheduled: false,
      services: ['Loans', 'Credit Services']
    },
    {
      id: 4,
      name: 'GlobalHealth Partners',
      status: 'Offline',
      responseTime: 'N/A',
      responseTime24h: '4.2s',
      successRate: 0,
      maintenanceScheduled: true,
      maintenanceDate: '2023-06-12T14:00:00',
      services: ['Insurance', 'Medical Services']
    }
  ];
  
  // Mock data for analytics
  const analyticsData = {
    // Most popular services by volume
    popularServices: [
      { name: 'Insurance', count: 543, percentage: 40 },
      { name: 'Tax Filing', count: 352, percentage: 26 },
      { name: 'Loans', count: 298, percentage: 22 },
      { name: 'Other Services', count: 157, percentage: 12 }
    ],
    // Average completion time by service type (in hours)
    avgCompletionTime: [
      { name: 'Insurance', value: 28, partner: 'SafeGuard Insurance' },
      { name: 'Insurance', value: 36, partner: 'GlobalHealth Partners' },
      { name: 'Tax Filing', value: 72, partner: 'ExpertTax Solutions' },
      { name: 'Loans', value: 48, partner: 'ImmiFund Capital' }
    ],
    // Service request trends by month
    requestTrends: [
      { month: 'Jan', count: 85 },
      { month: 'Feb', count: 102 },
      { month: 'Mar', count: 116 },
      { month: 'Apr', count: 124 },
      { month: 'May', count: 132 },
      { month: 'Jun', count: 128 }
    ],
    // Conversion funnel
    conversionFunnel: [
      { stage: 'Request Submitted', count: 1350, percentage: 100 },
      { stage: 'Sent to Partner', count: 1245, percentage: 92 },
      { stage: 'Partner Accepted', count: 1128, percentage: 84 },
      { stage: 'Processing Complete', count: 945, percentage: 70 },
      { stage: 'User Approved', count: 892, percentage: 66 }
    ]
  };
  
  // Get status color
  const getStatusColor = (status) => {
    switch(status) {
      case 'New': return { bg: '#DBEAFE', text: '#1E40AF' }; // Blue
      case 'Pending': return { bg: '#FEF3C7', text: '#B45309' }; // Yellow
      case 'In Progress': return { bg: '#FFEDD5', text: '#C2410C' }; // Orange
      case 'Completed': return { bg: '#D1FAE5', text: '#065F46' }; // Green
      case 'Failed': return { bg: '#FEE2E2', text: '#B91C1C' }; // Red
      default: return { bg: '#E5E7EB', text: '#374151' }; // Gray
    }
  };
  
  // Get service type icon
  const getServiceTypeIcon = (type) => {
    switch(type) {
      case 'Insurance': return <Shield size={16} />;
      case 'Tax Filing': return <FileCheck size={16} />;
      case 'Loans': return <CreditCard size={16} />;
      default: return <Briefcase size={16} />;
    }
  };
  
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  // Filter requests based on active tab
  const filteredRequests = activeTab === 'all' 
    ? serviceRequests 
    : serviceRequests.filter(req => req.status.toLowerCase() === activeTab);
  
  // Get partner status color
  const getPartnerStatusColor = (status) => {
    switch(status) {
      case 'Online': return { bg: '#D1FAE5', text: '#065F46', icon: <CheckCircle size={16} /> }; // Green
      case 'Degraded': return { bg: '#FEF3C7', text: '#B45309', icon: <AlertTriangle size={16} /> }; // Yellow
      case 'Offline': return { bg: '#FEE2E2', text: '#B91C1C', icon: <XCircle size={16} /> }; // Red
      default: return { bg: '#E5E7EB', text: '#374151', icon: <AlertOctagon size={16} /> }; // Gray
    }
  };
  
  // Function to handle opening the request details modal
  const openRequestModal = (request) => {
    setSelectedRequest(request);
    setShowRequestModal(true);
  };
  
  // Function to handle closing the request details modal
  const closeRequestModal = () => {
    setShowRequestModal(false);
    setSelectedRequest(null);
  };
  
  // Mock status history for the selected request
  const mockStatusHistory = [
    {
      status: 'New',
      timestamp: '2023-06-10T14:30:00',
      note: 'Request created by user',
      user: 'Maria Garcia'
    },
    {
      status: 'Pending',
      timestamp: '2023-06-10T14:35:00',
      note: 'Request sent to partner',
      user: 'System'
    },
    {
      status: 'In Progress',
      timestamp: '2023-06-10T16:20:00',
      note: 'Partner accepted request and started processing',
      user: 'SafeGuard Insurance'
    },
    {
      status: 'In Progress',
      timestamp: '2023-06-11T09:45:00',
      note: 'Additional information requested from user',
      user: 'SafeGuard Insurance'
    },
    {
      status: 'In Progress',
      timestamp: '2023-06-11T14:10:00',
      note: 'User provided additional information',
      user: 'Maria Garcia'
    }
  ];
  
  // Mock documents for the selected request
  const mockDocuments = [
    {
      name: 'Insurance_Application_Form.pdf',
      size: '245 KB',
      uploadedBy: 'Maria Garcia',
      timestamp: '2023-06-10T14:30:00'
    },
    {
      name: 'ID_Document.jpg',
      size: '1.2 MB',
      uploadedBy: 'Maria Garcia',
      timestamp: '2023-06-10T14:30:00'
    },
    {
      name: 'Proof_of_Address.pdf',
      size: '180 KB',
      uploadedBy: 'Maria Garcia',
      timestamp: '2023-06-10T14:30:00'
    },
    {
      name: 'Additional_Information.pdf',
      size: '320 KB',
      uploadedBy: 'Maria Garcia',
      timestamp: '2023-06-11T14:10:00'
    }
  ];
  
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
    }}>
      {/* Sidebar */}
      <div style={{
        width: sidebarCollapsed ? '60px' : '250px',
        backgroundColor: '#1F2937',
        color: '#F9FAFB',
        transition: 'width 0.3s',
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem 0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: sidebarCollapsed ? 'center' : 'space-between',
          padding: sidebarCollapsed ? '0.5rem 0' : '0.5rem 1.5rem',
          marginBottom: '2rem'
        }}>
          {!sidebarCollapsed && <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>ImmiHub Admin</h1>}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#D1D5DB',
              cursor: 'pointer'
            }}
          >
            <Menu size={20} />
          </button>
        </div>

        <NavItem
          icon={<Shield size={20} />}
          text="Admin Dashboard"
          active={activeItem === 'admin-dashboard'}
          collapsed={sidebarCollapsed}
          onClick={() => window.location.href = '/admin-dashboard'}
        />
        <NavItem
          icon={<Users size={20} />}
          text="User Management"
          active={activeItem === 'user-management'}
          collapsed={sidebarCollapsed}
          onClick={() => window.location.href = '/user-management'}
        />
        <NavItem
          icon={<FileText size={20} />}
          text="Documents"
          active={activeItem === 'documents'}
          collapsed={sidebarCollapsed}
          onClick={() => window.location.href = '/documents'}
        />
        <NavItem
          icon={<Calendar size={20} />}
          text="Calendar"
          active={activeItem === 'calendar'}
          collapsed={sidebarCollapsed}
          onClick={() => window.location.href = '/calendar'}
        />
        <NavItem
          icon={<BookOpen size={20} />}
          text="Journey Management"
          active={activeItem === 'journey-management'}
          collapsed={sidebarCollapsed}
          onClick={() => window.location.href = '/journey-management'}
        />
        <NavItem
          icon={<Handshake size={20} />}
          text="Partner Integrations"
          active={activeItem === 'partner-integrations'}
          collapsed={sidebarCollapsed}
          onClick={() => window.location.href = '/partner-integrations'}
        />
        <NavItem
          icon={<BarChart2 size={20} />}
          text="Analytics"
          active={activeItem === 'analytics'}
          collapsed={sidebarCollapsed}
          onClick={() => window.location.href = '/analytics'}
        />
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, backgroundColor: '#F3F4F6' }}>
        {/* Header */}
        <header style={{
          backgroundColor: 'white',
          padding: '1rem 1.5rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Partner Integrations</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button style={{
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              position: 'relative'
            }}>
              <Bell size={20} color="#374151" />
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                backgroundColor: '#EF4444',
                borderRadius: '50%',
                width: '16px',
                height: '16px',
                fontSize: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>3</span>
            </button>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <User size={20} color="#4B5563" />
              </div>
              <span>Admin User</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main style={{ padding: '1.5rem' }}>
          {/* Service Request Overview */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Service Request Overview
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '1rem' 
            }}>
              {statistics.map((stat, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  padding: '1.25rem',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ 
                      color: '#6B7280', 
                      fontSize: '0.875rem', 
                      marginBottom: '0.5rem' 
                    }}>
                      {stat.title}
                    </div>
                    <div style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      {stat.value}
                      <span style={{ 
                        fontSize: '0.875rem',
                        color: stat.trend > 0 ? '#10B981' : '#EF4444',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        {stat.trend > 0 ? (
                          <><TrendingUp size={14} /> +{stat.trend}</>
                        ) : (
                          <><TrendingDown size={14} /> {stat.trend}</>
                        )}
                      </span>
                    </div>
                  </div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: `${stat.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {stat.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Request Queue Management */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Request Queue Management
              </h2>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={{
                  backgroundColor: '#2563EB',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.375rem',
                  padding: '0.5rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}>
                  <PlusCircle size={16} />
                  New Request
                </button>
                <button style={{
                  backgroundColor: 'white',
                  color: '#374151',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.375rem',
                  padding: '0.5rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}>
                  <Filter size={16} />
                  Filter
                </button>
                <button style={{
                  backgroundColor: 'white',
                  color: '#374151',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.375rem',
                  padding: '0.5rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}>
                  <Download size={16} />
                  Export
                </button>
              </div>
            </div>
            
            {/* Status tabs */}
            <div style={{
              display: 'flex',
              borderBottom: '1px solid #E5E7EB',
              marginBottom: '1rem'
            }}>
              {['all', 'new', 'pending', 'in progress', 'completed', 'failed'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '0.75rem 1rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: activeTab === tab ? '2px solid #2563EB' : '2px solid transparent',
                    color: activeTab === tab ? '#2563EB' : '#6B7280',
                    fontWeight: activeTab === tab ? 'bold' : 'normal',
                    cursor: 'pointer',
                    textTransform: 'capitalize'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Data table */}
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden'
            }}>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse',
                fontSize: '0.875rem'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#F9FAFB' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>Request ID</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>User</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>Service Type</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>Partner</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>Status</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>Date Submitted</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>Last Updated</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRequests.map((request) => (
                    <tr key={request.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ padding: '0.75rem 1rem' }}>{request.id}</td>
                      <td style={{ padding: '0.75rem 1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <div style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: '#E5E7EB',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <User size={14} color="#4B5563" />
                          </div>
                          <span>{request.user}</span>
                        </div>
                      </td>
                      <td style={{ padding: '0.75rem 1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          {getServiceTypeIcon(request.serviceType)}
                          <span>{request.serviceType}</span>
                        </div>
                      </td>
                      <td style={{ padding: '0.75rem 1rem' }}>{request.partner}</td>
                      <td style={{ padding: '0.75rem 1rem' }}>
                        <span style={{
                          backgroundColor: getStatusColor(request.status).bg,
                          color: getStatusColor(request.status).text,
                          padding: '0.25rem 0.5rem',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: 'medium'
                        }}>
                          {request.status}
                        </span>
                      </td>
                      <td style={{ padding: '0.75rem 1rem' }}>{formatDate(request.dateSubmitted)}</td>
                      <td style={{ padding: '0.75rem 1rem' }}>{formatDate(request.lastUpdated)}</td>
                      <td style={{ padding: '0.75rem 1rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button style={{
                            backgroundColor: '#EFF6FF',
                            color: '#2563EB',
                            border: 'none',
                            borderRadius: '0.375rem',
                            padding: '0.25rem 0.5rem',
                            fontSize: '0.75rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem'
                          }} onClick={() => openRequestModal(request)}>
                            <Eye size={14} />
                            View
                          </button>
                          
                          {['New', 'Pending', 'In Progress'].includes(request.status) && (
                            <button style={{
                              backgroundColor: '#FEF3C7',
                              color: '#B45309',
                              border: 'none',
                              borderRadius: '0.375rem',
                              padding: '0.25rem 0.5rem',
                              fontSize: '0.75rem',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.25rem'
                            }}>
                              <Send size={14} />
                              Remind
                            </button>
                          )}
                          
                          {['New', 'Pending'].includes(request.status) && (
                            <button style={{
                              backgroundColor: '#FEE2E2',
                              color: '#B91C1C',
                              border: 'none',
                              borderRadius: '0.375rem',
                              padding: '0.25rem 0.5rem',
                              fontSize: '0.75rem',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.25rem'
                            }}>
                              <XCircle size={14} />
                              Cancel
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Pagination */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                borderTop: '1px solid #E5E7EB'
              }}>
                <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>
                  Showing 1 to {filteredRequests.length} of {filteredRequests.length} entries
                </div>
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  <button style={{
                    backgroundColor: '#F9FAFB',
                    color: '#374151',
                    border: '1px solid #D1D5DB',
                    borderRadius: '0.375rem',
                    padding: '0.375rem 0.75rem',
                    fontSize: '0.875rem',
                    cursor: 'pointer'
                  }}>
                    Previous
                  </button>
                  <button style={{
                    backgroundColor: '#2563EB',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.375rem',
                    padding: '0.375rem 0.75rem',
                    fontSize: '0.875rem',
                    cursor: 'pointer'
                  }}>
                    1
                  </button>
                  <button style={{
                    backgroundColor: '#F9FAFB',
                    color: '#374151',
                    border: '1px solid #D1D5DB',
                    borderRadius: '0.375rem',
                    padding: '0.375rem 0.75rem',
                    fontSize: '0.875rem',
                    cursor: 'pointer'
                  }}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Partner Status Integration */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Partner Status Integration
            </h2>
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              padding: '1.25rem'
            }}>
              {/* Partner selector */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 'medium', color: '#374151' }}>
                  Select Partner:
                </label>
                <select 
                  value={selectedPartner} 
                  onChange={(e) => setSelectedPartner(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    borderRadius: '0.375rem',
                    border: '1px solid #D1D5DB',
                    backgroundColor: 'white',
                    fontSize: '0.875rem'
                  }}
                >
                  <option value="all">All Partners</option>
                  {partners.map(partner => (
                    <option key={partner.id} value={partner.id.toString()}>{partner.name}</option>
                  ))}
                </select>
              </div>
              
              {/* Partner status cards */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                {partners.map(partner => (
                  <div key={partner.id} style={{
                    border: '1px solid #E5E7EB',
                    borderRadius: '0.5rem',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <h3 style={{ fontWeight: 'bold', fontSize: '1rem' }}>{partner.name}</h3>
                      <span style={{
                        backgroundColor: getPartnerStatusColor(partner.status).bg,
                        color: getPartnerStatusColor(partner.status).text,
                        padding: '0.25rem 0.5rem',
                        borderRadius: '1rem',
                        fontSize: '0.75rem',
                        fontWeight: 'medium',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}>
                        {getPartnerStatusColor(partner.status).icon}
                        {partner.status}
                      </span>
                    </div>
                    
                    <div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        fontSize: '0.875rem',
                        color: '#6B7280',
                        marginBottom: '0.25rem'
                      }}>
                        <span>Response Time:</span>
                        <span style={{ fontWeight: 'medium', color: '#374151' }}>{partner.responseTime}</span>
                      </div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        fontSize: '0.875rem',
                        color: '#6B7280',
                        marginBottom: '0.25rem'
                      }}>
                        <span>Last 24h Avg:</span>
                        <span style={{ fontWeight: 'medium', color: '#374151' }}>{partner.responseTime24h}</span>
                      </div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        fontSize: '0.875rem',
                        color: '#6B7280',
                        marginBottom: '0.25rem'
                      }}>
                        <span>Success Rate:</span>
                        <span style={{ 
                          fontWeight: 'medium', 
                          color: partner.successRate > 95 ? '#065F46' : 
                                 partner.successRate > 90 ? '#B45309' : '#B91C1C'
                        }}>
                          {partner.successRate}%
                        </span>
                      </div>
                    </div>
                    
                    <div style={{ 
                      fontSize: '0.875rem',
                      color: '#6B7280'
                    }}>
                      <span style={{ fontWeight: 'medium' }}>Services:</span> {partner.services.join(', ')}
                    </div>
                    
                    {partner.maintenanceScheduled && (
                      <div style={{
                        backgroundColor: '#FFEDD5',
                        color: '#C2410C',
                        padding: '0.5rem',
                        borderRadius: '0.375rem',
                        fontSize: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Clock size={14} />
                        <span>
                          Scheduled maintenance on {new Date(partner.maintenanceDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    )}
                    
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                      <button style={{
                        backgroundColor: '#EFF6FF',
                        color: '#2563EB',
                        border: 'none',
                        borderRadius: '0.375rem',
                        padding: '0.375rem 0.75rem',
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        flexGrow: 1,
                        justifyContent: 'center'
                      }}>
                        <Eye size={14} />
                        View Details
                      </button>
                      <button style={{
                        backgroundColor: '#F9FAFB',
                        color: '#374151',
                        border: '1px solid #D1D5DB',
                        borderRadius: '0.375rem',
                        padding: '0.375rem 0.75rem',
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        flexGrow: 1,
                        justifyContent: 'center'
                      }}>
                        <RefreshCw size={14} />
                        Test Connection
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Integration health metrics */}
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                System Integration Health
              </h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
                gap: '1rem'
              }}>
                <div style={{ 
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.5rem' }}>
                    Active Connections
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563EB' }}>
                    3 / 4
                  </div>
                </div>
                
                <div style={{ 
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.5rem' }}>
                    Avg Response Time
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563EB' }}>
                    2.1s
                  </div>
                </div>
                
                <div style={{ 
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.5rem' }}>
                    Webhook Deliveries
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563EB' }}>
                    98.7%
                  </div>
                </div>
                
                <div style={{ 
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.5rem' }}>
                    API Calls Today
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563EB' }}>
                    1,257
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Analytics Component */}
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Analytics
            </h2>
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              padding: '1.25rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '1.5rem'
            }}>
              {/* Most Popular Services */}
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  Most Popular Services
                </h3>
                <div style={{ height: '180px' }}>
                  {analyticsData.popularServices.map((service, index) => (
                    <div key={index} style={{ marginBottom: '0.75rem' }}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        fontSize: '0.875rem',
                        marginBottom: '0.25rem'
                      }}>
                        <span>{service.name}</span>
                        <span>{service.count} requests ({service.percentage}%)</span>
                      </div>
                      <div style={{ 
                        height: '8px',
                        backgroundColor: '#E5E7EB',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}>
                        <div style={{ 
                          height: '100%',
                          width: `${service.percentage}%`,
                          backgroundColor: '#3B82F6',
                          borderRadius: '4px'
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Average Completion Time */}
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  Avg. Completion Time
                </h3>
                <div style={{ height: '180px' }}>
                  <table style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse',
                    fontSize: '0.875rem'
                  }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '0.5rem', textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>
                          Service
                        </th>
                        <th style={{ padding: '0.5rem', textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>
                          Partner
                        </th>
                        <th style={{ padding: '0.5rem', textAlign: 'right', borderBottom: '1px solid #E5E7EB' }}>
                          Time (hrs)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {analyticsData.avgCompletionTime.map((item, index) => (
                        <tr key={index}>
                          <td style={{ padding: '0.5rem', borderBottom: '1px solid #E5E7EB' }}>
                            {item.name}
                          </td>
                          <td style={{ padding: '0.5rem', borderBottom: '1px solid #E5E7EB' }}>
                            {item.partner}
                          </td>
                          <td style={{ 
                            padding: '0.5rem', 
                            textAlign: 'right', 
                            borderBottom: '1px solid #E5E7EB',
                            color: item.value < 36 ? '#10B981' : item.value < 60 ? '#F59E0B' : '#EF4444',
                            fontWeight: 'medium'
                          }}>
                            {item.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Request Trends */}
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  Request Trends
                </h3>
                <div style={{ height: '180px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                  {analyticsData.requestTrends.map((month, index) => (
                    <div key={index} style={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      alignItems: 'center',
                      width: '100%'
                    }}>
                      <div style={{ 
                        height: `${(month.count / 150) * 150}px`, // Scale to max 150px height
                        width: '24px',
                        backgroundColor: '#3B82F6',
                        borderRadius: '4px 4px 0 0',
                        marginBottom: '0.25rem'
                      }} />
                      <div style={{ fontSize: '0.75rem' }}>
                        {month.month}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>
                        {month.count}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Conversion Funnel */}
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  Conversion Funnel
                </h3>
                <div style={{ height: '180px' }}>
                  {analyticsData.conversionFunnel.map((stage, index) => (
                    <div key={index} style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.5rem'
                    }}>
                      <div style={{ 
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#E5E7EB',
                        color: '#374151',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        marginRight: '0.5rem'
                      }}>
                        {index + 1}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          fontSize: '0.875rem',
                          marginBottom: '0.25rem'
                        }}>
                          <span>{stage.stage}</span>
                          <span>{stage.count} ({stage.percentage}%)</span>
                        </div>
                        <div style={{ 
                          height: '8px',
                          backgroundColor: '#E5E7EB',
                          borderRadius: '4px',
                          overflow: 'hidden'
                        }}>
                          <div style={{ 
                            height: '100%',
                            width: `${stage.percentage}%`,
                            backgroundColor: index === 0 ? '#3B82F6' :
                                            index === 1 ? '#60A5FA' :
                                            index === 2 ? '#93C5FD' :
                                            index === 3 ? '#BFDBFE' : '#DBEAFE',
                            borderRadius: '4px'
                          }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* View Full Analytics Link */}
              <div style={{ 
                gridColumn: '1 / -1', 
                display: 'flex', 
                justifyContent: 'center',
                marginTop: '1rem' 
              }}>
                <button style={{
                  backgroundColor: 'white',
                  color: '#2563EB',
                  border: '1px solid #2563EB',
                  borderRadius: '0.375rem',
                  padding: '0.5rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}>
                  <BarChart2 size={16} />
                  View Full Analytics Dashboard
                </button>
              </div>
            </div>
          </div>
          
          {/* Service Request Details Modal */}
          {showRequestModal && selectedRequest && (
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
                borderRadius: '0.5rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                width: '90%',
                maxWidth: '900px',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}>
                {/* Modal Header */}
                <div style={{
                  padding: '1rem 1.5rem',
                  borderBottom: '1px solid #E5E7EB',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                    Service Request Details: {selectedRequest.id}
                  </h3>
                  <button 
                    onClick={closeRequestModal}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <X size={20} color="#6B7280" />
                  </button>
                </div>
                
                {/* Modal Content */}
                <div style={{
                  padding: '1.5rem',
                  overflow: 'auto'
                }}>
                  {/* Request Overview */}
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                      Request Overview
                    </h4>
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '1rem'
                    }}>
                      <div>
                        <div style={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          gap: '0.75rem'
                        }}>
                          <div>
                            <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.25rem' }}>
                              User:
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                backgroundColor: '#E5E7EB',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                <User size={16} color="#4B5563" />
                              </div>
                              <span>{selectedRequest.user} (ID: {selectedRequest.userId})</span>
                            </div>
                          </div>
                          
                          <div>
                            <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.25rem' }}>
                              Service Type:
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              {getServiceTypeIcon(selectedRequest.serviceType)}
                              <span>{selectedRequest.serviceType}</span>
                            </div>
                          </div>
                          
                          <div>
                            <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.25rem' }}>
                              Partner:
                            </div>
                            <div>{selectedRequest.partner}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div style={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          gap: '0.75rem'
                        }}>
                          <div>
                            <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.25rem' }}>
                              Status:
                            </div>
                            <span style={{
                              backgroundColor: getStatusColor(selectedRequest.status).bg,
                              color: getStatusColor(selectedRequest.status).text,
                              padding: '0.25rem 0.5rem',
                              borderRadius: '1rem',
                              fontSize: '0.75rem',
                              fontWeight: 'medium',
                              display: 'inline-block'
                            }}>
                              {selectedRequest.status}
                            </span>
                          </div>
                          
                          <div>
                            <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.25rem' }}>
                              Date Submitted:
                            </div>
                            <div>{formatDate(selectedRequest.dateSubmitted)}</div>
                          </div>
                          
                          <div>
                            <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.25rem' }}>
                              Last Updated:
                            </div>
                            <div>{formatDate(selectedRequest.lastUpdated)}</div>
                          </div>
                          
                          <div>
                            <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.25rem' }}>
                              Partner Reference ID:
                            </div>
                            <div>{selectedRequest.id.replace('SR', 'PR')}-A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tabs for different sections */}
                  <div style={{ borderBottom: '1px solid #E5E7EB', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                      <button style={{
                        padding: '0.75rem 0',
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: '2px solid #2563EB',
                        color: '#2563EB',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}>
                        Status History
                      </button>
                      <button style={{
                        padding: '0.75rem 0',
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: '2px solid transparent',
                        color: '#6B7280',
                        cursor: 'pointer'
                      }}>
                        Documents
                      </button>
                      <button style={{
                        padding: '0.75rem 0',
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: '2px solid transparent',
                        color: '#6B7280',
                        cursor: 'pointer'
                      }}>
                        Notes
                      </button>
                    </div>
                  </div>
                  
                  {/* Status History Timeline */}
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {mockStatusHistory.map((history, index) => (
                        <div key={index} style={{ 
                          display: 'flex',
                          gap: '1rem'
                        }}>
                          <div style={{ 
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                          }}>
                            <div style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              backgroundColor: index === 0 ? '#E5E7EB' : '#3B82F6',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '0.75rem',
                              zIndex: 1
                            }}>
                              {index + 1}
                            </div>
                            {index < mockStatusHistory.length - 1 && (
                              <div style={{
                                width: '2px',
                                height: '100%',
                                backgroundColor: '#E5E7EB',
                                flex: 1,
                                margin: '4px 0'
                              }} />
                            )}
                          </div>
                          
                          <div style={{ flex: 1 }}>
                            <div style={{ 
                              display: 'flex', 
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '0.25rem'
                            }}>
                              <div style={{ fontWeight: 'medium' }}>
                                <span style={{
                                  backgroundColor: getStatusColor(history.status).bg,
                                  color: getStatusColor(history.status).text,
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '1rem',
                                  fontSize: '0.75rem',
                                  fontWeight: 'medium',
                                  marginRight: '0.5rem'
                                }}>
                                  {history.status}
                                </span>
                                <span>by {history.user}</span>
                              </div>
                              <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                                {formatDate(history.timestamp)}
                              </div>
                            </div>
                            <div style={{ 
                              backgroundColor: '#F9FAFB',
                              padding: '0.75rem',
                              borderRadius: '0.375rem',
                              fontSize: '0.875rem',
                              color: '#374151'
                            }}>
                              {history.note}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Documents Section (hidden by default) */}
                  <div style={{ display: 'none' }}>
                    <table style={{ 
                      width: '100%', 
                      borderCollapse: 'collapse',
                      fontSize: '0.875rem'
                    }}>
                      <thead>
                        <tr style={{ backgroundColor: '#F9FAFB' }}>
                          <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>
                            Document Name
                          </th>
                          <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>
                            Size
                          </th>
                          <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>
                            Uploaded By
                          </th>
                          <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>
                            Date
                          </th>
                          <th style={{ padding: '0.75rem', textAlign: 'right', borderBottom: '1px solid #E5E7EB' }}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockDocuments.map((doc, index) => (
                          <tr key={index} style={{ borderBottom: '1px solid #E5E7EB' }}>
                            <td style={{ padding: '0.75rem' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <File size={16} />
                                <span>{doc.name}</span>
                              </div>
                            </td>
                            <td style={{ padding: '0.75rem' }}>{doc.size}</td>
                            <td style={{ padding: '0.75rem' }}>{doc.uploadedBy}</td>
                            <td style={{ padding: '0.75rem' }}>{formatDate(doc.timestamp)}</td>
                            <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                              <button style={{
                                backgroundColor: '#EFF6FF',
                                color: '#2563EB',
                                border: 'none',
                                borderRadius: '0.375rem',
                                padding: '0.25rem 0.5rem',
                                fontSize: '0.75rem',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.25rem'
                              }}>
                                <Download size={14} />
                                Download
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Modal Footer */}
                <div style={{
                  padding: '1rem 1.5rem',
                  borderTop: '1px solid #E5E7EB',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#F9FAFB'
                }}>
                  <div>
                    <select style={{
                      padding: '0.5rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #D1D5DB',
                      backgroundColor: 'white',
                      fontSize: '0.875rem'
                    }}>
                      <option value="">Update Status...</option>
                      <option value="new">New</option>
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="failed">Failed</option>
                    </select>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{
                      backgroundColor: 'white',
                      color: '#374151',
                      border: '1px solid #D1D5DB',
                      borderRadius: '0.375rem',
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      cursor: 'pointer'
                    }} onClick={closeRequestModal}>
                      Close
                    </button>
                    
                    {selectedRequest.status !== 'Completed' && selectedRequest.status !== 'Failed' && (
                      <>
                        <button style={{
                          backgroundColor: '#FEF3C7',
                          color: '#B45309',
                          border: 'none',
                          borderRadius: '0.375rem',
                          padding: '0.5rem 1rem',
                          fontSize: '0.875rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <Send size={16} />
                          Send to Partner
                        </button>
                        
                        <button style={{
                          backgroundColor: '#2563EB',
                          color: 'white',
                          border: 'none',
                          borderRadius: '0.375rem',
                          padding: '0.5rem 1rem',
                          fontSize: '0.875rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <Save size={16} />
                          Save Changes
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
} 