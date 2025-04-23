import React, { useState } from 'react';
import NavItem from '../components/NavItem';

export default function Cases() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showFormTypePopup, setShowFormTypePopup] = useState(false);
  const [showFormDetails, setShowFormDetails] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [formResponses, setFormResponses] = useState({});

  // Sample case data with payment information
  const cases = [
    { 
      id: 'case-001', 
      clientName: 'Michael Smith', 
      type: 'H1B Visa', 
      status: 'In Progress', 
      filingDate: '2023-04-15',
      nextDeadline: '2023-05-10',
      assignedTo: 'Sarah Martinez', 
      priority: 'High',
      payment: {
        total: 3500,
        paid: 2000,
        remaining: 1500,
        status: 'Partial'
      }
    },
    { 
      id: 'case-002', 
      clientName: 'Sarah Johnson', 
      type: 'Green Card', 
      status: 'Document Review', 
      filingDate: '2023-03-22',
      nextDeadline: '2023-05-05',
      assignedTo: 'Sarah Martinez', 
      priority: 'Medium',
      payment: {
        total: 5000,
        paid: 5000,
        remaining: 0,
        status: 'Paid'
      }
    },
    { 
      id: 'case-003', 
      clientName: 'David Kim', 
      type: 'DACA Renewal', 
      status: 'Awaiting Documents', 
      filingDate: '2023-04-01',
      nextDeadline: '2023-04-30',
      assignedTo: 'James Wilson', 
      priority: 'Medium',
      payment: {
        total: 1800,
        paid: 900,
        remaining: 900,
        status: 'Partial'
      }
    },
    { 
      id: 'case-004', 
      clientName: 'Anna Garcia', 
      type: 'F1 Visa', 
      status: 'Submitted', 
      filingDate: '2023-02-15',
      nextDeadline: '2023-06-15',
      assignedTo: 'Sarah Martinez', 
      priority: 'Low',
      payment: {
        total: 2500,
        paid: 2500,
        remaining: 0,
        status: 'Paid'
      }
    },
    { 
      id: 'case-005', 
      clientName: 'Omar Hassan', 
      type: 'H1B Visa', 
      status: 'RFE Received', 
      filingDate: '2023-01-10',
      nextDeadline: '2023-04-28',
      assignedTo: 'James Wilson', 
      priority: 'High',
      payment: {
        total: 3800,
        paid: 2800,
        remaining: 1000,
        status: 'Partial'
      }
    },
    { 
      id: 'case-006', 
      clientName: 'Priya Patel', 
      type: 'Naturalization', 
      status: 'Approved', 
      filingDate: '2022-10-05',
      nextDeadline: '2023-05-20',
      assignedTo: 'Sarah Martinez', 
      priority: 'Medium',
      payment: {
        total: 1500,
        paid: 0,
        remaining: 1500,
        status: 'Unpaid'
      }
    },
    { 
      id: 'case-007', 
      clientName: 'Juan Rodriguez', 
      type: 'Family Petition', 
      status: 'Interview Scheduled', 
      filingDate: '2022-11-12',
      nextDeadline: '2023-05-15',
      assignedTo: 'James Wilson', 
      priority: 'Medium',
      payment: {
        total: 4200,
        paid: 1800,
        remaining: 2400,
        status: 'Partial'
      }
    },
    { 
      id: 'case-008', 
      clientName: 'Li Wei', 
      type: 'Employment Authorization', 
      status: 'Awaiting Decision', 
      filingDate: '2023-02-28',
      nextDeadline: '2023-05-30',
      assignedTo: 'Sarah Martinez', 
      priority: 'High',
      payment: {
        total: 1200,
        paid: 1200,
        remaining: 0,
        status: 'Paid'
      }
    }
  ];

  // Case status options
  const statusOptions = [
    { value: 'all', label: 'All Statuses' },
    { value: 'In Progress', label: 'In Progress' },
    { value: 'Document Review', label: 'Document Review' },
    { value: 'Awaiting Documents', label: 'Awaiting Documents' },
    { value: 'Submitted', label: 'Submitted' },
    { value: 'RFE Received', label: 'RFE Received' },
    { value: 'Interview Scheduled', label: 'Interview Scheduled' },
    { value: 'Awaiting Decision', label: 'Awaiting Decision' },
    { value: 'Approved', label: 'Approved' },
    { value: 'Denied', label: 'Denied' }
  ];

  // Case type options
  const typeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'H1B Visa', label: 'H1B Visa' },
    { value: 'Green Card', label: 'Green Card' },
    { value: 'DACA Renewal', label: 'DACA Renewal' },
    { value: 'F1 Visa', label: 'F1 Visa' },
    { value: 'Naturalization', label: 'Naturalization' },
    { value: 'Family Petition', label: 'Family Petition' },
    { value: 'Employment Authorization', label: 'Employment Authorization' }
  ];

  // Filter cases based on search and selected filters
  const filteredCases = cases.filter(caseItem => {
    const matchesSearch = searchTerm === '' || 
      caseItem.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = selectedStatus === 'all' || caseItem.status === selectedStatus;
    const matchesType = selectedType === 'all' || caseItem.type === selectedType;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  // Helper function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  // Function to get status badge style
  const getStatusBadgeStyle = (status) => {
    switch(status) {
      case 'In Progress':
        return { backgroundColor: '#EBF5FF', color: '#2563EB', border: '1px solid #BFDBFE' };
      case 'Document Review':
        return { backgroundColor: '#F5F3FF', color: '#7C3AED', border: '1px solid #DDD6FE' };
      case 'Awaiting Documents':
        return { backgroundColor: '#FEF3C7', color: '#D97706', border: '1px solid #FDE68A' };
      case 'Submitted':
        return { backgroundColor: '#E0E7FF', color: '#4F46E5', border: '1px solid #C7D2FE' };
      case 'RFE Received':
        return { backgroundColor: '#FEE2E2', color: '#DC2626', border: '1px solid #FECACA' };
      case 'Interview Scheduled':
        return { backgroundColor: '#ECFDF5', color: '#059669', border: '1px solid #A7F3D0' };
      case 'Awaiting Decision':
        return { backgroundColor: '#F3F4F6', color: '#4B5563', border: '1px solid #E5E7EB' };
      case 'Approved':
        return { backgroundColor: '#D1FAE5', color: '#065F46', border: '1px solid #6EE7B7' };
      case 'Denied':
        return { backgroundColor: '#FEE2E2', color: '#B91C1C', border: '1px solid #FCA5A5' };
      default:
        return { backgroundColor: '#F3F4F6', color: '#6B7280', border: '1px solid #E5E7EB' };
    }
  };

  // Function to get payment status badge style
  const getPaymentBadgeStyle = (status) => {
    switch(status) {
      case 'Paid':
        return { backgroundColor: '#ECFDF5', color: '#059669', border: '1px solid #A7F3D0' };
      case 'Partial':
        return { backgroundColor: '#FEF3C7', color: '#D97706', border: '1px solid #FDE68A' };
      case 'Unpaid':
        return { backgroundColor: '#FEE2E2', color: '#DC2626', border: '1px solid #FECACA' };
      default:
        return { backgroundColor: '#F3F4F6', color: '#6B7280', border: '1px solid #E5E7EB' };
    }
  };

  // Handle form type selection
  const handleFormTypeSelect = (formId) => {
    setShowFormTypePopup(false);
    setShowFormDetails(formId);
    setCurrentPage(1);
    setFormResponses({});
  };

  // Handle close form details modal
  const handleCloseDetails = () => {
    setShowFormDetails(null);
    setCurrentPage(1);
    setFormResponses({});
  };

  // Handle input changes in form
  const handleInputChange = (field, value) => {
    setFormResponses({
      ...formResponses,
      [field]: value
    });
  };

  // Go to next page of the questionnaire
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Go to previous page of the questionnaire
  const handlePrevPage = () => {
    setCurrentPage(Math.max(1, currentPage - 1));
  };

  // Get form details by ID
  const getFormDetails = (formId) => {
    const formMap = {
      'emp-1': { number: 'Form I-129', name: 'Petition for a Nonimmigrant Worker' },
      'emp-2': { number: 'Form I-140', name: 'Immigrant Petition for Alien Worker' },
      'emp-3': { number: 'Form I-765', name: 'Application for Employment Authorization' },
      'fam-1': { number: 'Form I-130', name: 'Petition for Alien Relative' },
      'fam-2': { number: 'Form I-485', name: 'Application to Register Permanent Residence' },
      'hum-1': { number: 'Form I-821D', name: 'Consideration of Deferred Action for Childhood Arrivals (DACA)' },
      'hum-2': { number: 'Form I-589', name: 'Application for Asylum and for Withholding of Removal' },
      'cit-1': { number: 'Form N-400', name: 'Application for Naturalization' },
      'cit-2': { number: 'Form N-600', name: 'Application for Certificate of Citizenship' }
    };
    
    return formMap[formId] || { number: 'Unknown Form', name: 'Form Not Found' };
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
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'sticky',
        top: 0
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
        <nav style={{ padding: '16px 0', flex: '1', overflowY: 'auto' }}>
          <NavItem 
            href="/admin-dashboard" 
            icon="📊" 
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
            active={true} 
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
            href="/" 
            icon="🏠" 
            text="Portal Home" 
            active={false} 
            collapsed={sidebarCollapsed} 
          />
        </nav>
        
        {/* User Profile */}
        <div style={{
          padding: '16px',
          borderTop: '1px solid #E5E7EB',
          backgroundColor: 'white',
          flexShrink: 0
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
                <div style={{ fontSize: '12px', color: '#6B7280' }}>sarah@immihub.com</div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1, backgroundColor: '#F9FAFB', overflow: 'auto' }}>
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
          }}>Cases Management</h1>
          
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
          {/* Case Statistics - Moved to top */}
          <div style={{ 
            marginBottom: '24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ 
              backgroundColor: 'white',
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6B7280' }}>Total Cases</h3>
              <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#1F2937' }}>{cases.length}</p>
            </div>
            
            <div style={{ 
              backgroundColor: 'white',
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6B7280' }}>Cases In Progress</h3>
              <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#2563EB' }}>
                {cases.filter(c => c.status === 'In Progress').length}
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: 'white',
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6B7280' }}>Upcoming Deadlines</h3>
              <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#D97706' }}>
                {cases.filter(c => new Date(c.nextDeadline) <= new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)).length}
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: 'white',
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6B7280' }}>Pending Payments</h3>
              <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#DC2626' }}>
                {cases.filter(c => c.payment.status !== 'Paid').length}
              </p>
            </div>
          </div>

          {/* Filters and Search */}
          <div style={{ 
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            marginBottom: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center'
          }}>
            {/* Search input */}
            <div style={{ 
              flex: '1',
              minWidth: '200px',
              position: 'relative'
            }}>
              <span style={{ 
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#6B7280'
              }}>🔍</span>
              <input
                type="text"
                placeholder="Search cases by client name or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: '10px 10px 10px 36px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  width: '100%',
                  fontSize: '14px'
                }}
              />
            </div>
            
            {/* Status filter */}
            <div style={{ minWidth: '180px' }}>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                style={{
                  padding: '10px 12px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  width: '100%',
                  fontSize: '14px',
                  backgroundColor: 'white'
                }}
              >
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Type filter */}
            <div style={{ minWidth: '180px' }}>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                style={{
                  padding: '10px 12px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  width: '100%',
                  fontSize: '14px',
                  backgroundColor: 'white'
                }}
              >
                {typeOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* New case button */}
            <button 
              onClick={() => setShowFormTypePopup(true)}
              style={{
                backgroundColor: '#2563EB',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '10px 16px',
                fontWeight: '500',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Create New Case
            </button>
          </div>
          
          {/* Cases Table */}
          <div style={{ 
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            marginBottom: '24px'
          }}>
            <table style={{ 
              width: '100%',
              borderCollapse: 'collapse'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#F9FAFB' }}>
                  <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '500', color: '#6B7280', fontSize: '13px', borderBottom: '1px solid #E5E7EB' }}>Case ID</th>
                  <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '500', color: '#6B7280', fontSize: '13px', borderBottom: '1px solid #E5E7EB' }}>Client</th>
                  <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '500', color: '#6B7280', fontSize: '13px', borderBottom: '1px solid #E5E7EB' }}>Type</th>
                  <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '500', color: '#6B7280', fontSize: '13px', borderBottom: '1px solid #E5E7EB' }}>Status</th>
                  <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '500', color: '#6B7280', fontSize: '13px', borderBottom: '1px solid #E5E7EB' }}>Assigned To</th>
                  <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '500', color: '#6B7280', fontSize: '13px', borderBottom: '1px solid #E5E7EB' }}>Priority</th>
                  <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '500', color: '#6B7280', fontSize: '13px', borderBottom: '1px solid #E5E7EB' }}>Next Deadline</th>
                  <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '500', color: '#6B7280', fontSize: '13px', borderBottom: '1px solid #E5E7EB' }}>Filed Date</th>
                  <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '500', color: '#6B7280', fontSize: '13px', borderBottom: '1px solid #E5E7EB' }}>Payment</th>
                  <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '500', color: '#6B7280', fontSize: '13px', borderBottom: '1px solid #E5E7EB' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCases.map(caseItem => (
                  <tr key={caseItem.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '10px 12px', fontSize: '13px', fontWeight: '500' }}>{caseItem.id}</td>
                    <td style={{ padding: '10px 12px', fontSize: '13px' }}>{caseItem.clientName}</td>
                    <td style={{ padding: '10px 12px', fontSize: '13px' }}>{caseItem.type}</td>
                    <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                      <span style={{ 
                        padding: '4px 6px',
                        borderRadius: '9999px',
                        fontSize: '11px',
                        ...getStatusBadgeStyle(caseItem.status)
                      }}>
                        {caseItem.status}
                      </span>
                    </td>
                    <td style={{ padding: '10px 12px', fontSize: '13px' }}>{caseItem.assignedTo}</td>
                    <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                      <span style={{
                        padding: '3px 6px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        backgroundColor: caseItem.priority === 'High' ? '#FEE2E2' : 
                                        caseItem.priority === 'Medium' ? '#FEF3C7' : '#EBF5FF',
                        color: caseItem.priority === 'High' ? '#DC2626' : 
                              caseItem.priority === 'Medium' ? '#D97706' : '#2563EB',
                      }}>
                        {caseItem.priority}
                      </span>
                    </td>
                    <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                      {new Date(caseItem.nextDeadline).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </td>
                    <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                      {new Date(caseItem.filingDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </td>
                    <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                      <div>
                        <span style={{ 
                          padding: '3px 6px',
                          borderRadius: '9999px',
                          fontSize: '11px',
                          marginBottom: '2px',
                          display: 'inline-block',
                          ...getPaymentBadgeStyle(caseItem.payment.status)
                        }}>
                          {caseItem.payment.status}
                        </span>
                        <div style={{ color: '#6B7280', fontSize: '11px' }}>
                          <div>Total: {formatCurrency(caseItem.payment.total)}</div>
                          <div>Paid: {formatCurrency(caseItem.payment.paid)}</div>
                          {caseItem.payment.remaining > 0 && (
                            <div>Remaining: {formatCurrency(caseItem.payment.remaining)}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                        <button style={{
                          backgroundColor: '#EBF5FF',
                          color: '#2563EB',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '4px 8px',
                          fontSize: '11px',
                          cursor: 'pointer'
                        }}>
                          View
                        </button>
                        <button style={{
                          backgroundColor: '#ECFDF5',
                          color: '#059669',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '4px 8px',
                          fontSize: '11px',
                          cursor: 'pointer'
                        }}>
                          Edit
                        </button>
                        {caseItem.payment.remaining > 0 && (
                          <button style={{
                            backgroundColor: '#FEF3C7',
                            color: '#D97706',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            fontSize: '11px',
                            cursor: 'pointer',
                            marginTop: '2px'
                          }}>
                            Request Payment
                          </button>
                        )}
                        <button style={{
                          backgroundColor: '#F3F4F6',
                          color: '#4B5563',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '4px 8px',
                          fontSize: '11px',
                          cursor: 'pointer',
                          marginTop: '2px'
                        }}>
                          Change Status
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '13px', color: '#6B7280' }}>
              Showing <span style={{ fontWeight: '500', color: '#1F2937' }}>1</span> to <span style={{ fontWeight: '500', color: '#1F2937' }}>{filteredCases.length}</span> of <span style={{ fontWeight: '500', color: '#1F2937' }}>{filteredCases.length}</span> cases
            </div>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                disabled={true}
                style={{
                  padding: '8px 12px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  backgroundColor: '#F9FAFB',
                  color: '#D1D5DB',
                  fontSize: '13px',
                  cursor: 'not-allowed'
                }}
              >
                Previous
              </button>
              
              <button 
                style={{
                  padding: '8px 12px',
                  border: '1px solid #2563EB',
                  borderRadius: '6px',
                  backgroundColor: '#2563EB',
                  color: 'white',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                1
              </button>
              
              <button 
                style={{
                  padding: '8px 12px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  color: '#6B7280',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                2
              </button>
              
              <button 
                style={{
                  padding: '8px 12px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  color: '#6B7280',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Next
              </button>
            </div>
          </div>
        </main>
        
        {showFormTypePopup && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              width: '90%',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto',
              padding: '24px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: '#1F2937' }}>Select Form Type</h2>
                <button 
                  onClick={() => setShowFormTypePopup(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '20px',
                    color: '#6B7280'
                  }}
                >
                  ×
                </button>
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#4B5563', marginBottom: '12px' }}>
                  Employment-Based
                </h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
                  gap: '12px' 
                }}>
                  <FormTypeCard
                    id="emp-1"
                    number="Form I-129"
                    name="Petition for Nonimmigrant Worker"
                    onClick={handleFormTypeSelect}
                  />
                  <FormTypeCard
                    id="emp-2"
                    number="Form I-140"
                    name="Immigrant Petition for Alien Worker"
                    onClick={handleFormTypeSelect}
                  />
                </div>
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#4B5563', marginBottom: '12px' }}>
                  Family-Based
                </h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
                  gap: '12px' 
                }}>
                  <FormTypeCard
                    id="fam-1"
                    number="Form I-130"
                    name="Petition for Alien Relative"
                    onClick={handleFormTypeSelect}
                  />
                  <FormTypeCard
                    id="fam-2"
                    number="Form I-485"
                    name="Adjustment of Status"
                    onClick={handleFormTypeSelect}
                  />
                </div>
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#4B5563', marginBottom: '12px' }}>
                  Humanitarian
                </h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
                  gap: '12px' 
                }}>
                  <FormTypeCard
                    id="hum-1"
                    number="Form I-589"
                    name="Application for Asylum"
                    onClick={handleFormTypeSelect}
                  />
                  <FormTypeCard
                    id="hum-2"
                    number="Form I-918"
                    name="U Nonimmigrant Status"
                    onClick={handleFormTypeSelect}
                  />
                </div>
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#4B5563', marginBottom: '12px' }}>
                  Citizenship
                </h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
                  gap: '12px' 
                }}>
                  <FormTypeCard
                    id="cit-1"
                    number="Form N-400"
                    name="Application for Naturalization"
                    onClick={handleFormTypeSelect}
                  />
                  <FormTypeCard
                    id="cit-2"
                    number="Form N-600"
                    name="Certificate of Citizenship"
                    onClick={handleFormTypeSelect}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
        {showFormDetails && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              width: '90%',
              maxWidth: '700px',
              maxHeight: '90vh',
              overflow: 'auto',
              padding: '24px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '20px',
                borderBottom: '1px solid #E5E7EB',
                paddingBottom: '16px'
              }}>
                <div>
                  <h2 style={{ margin: '0 0 4px 0', color: '#1F2937', fontSize: '20px', fontWeight: '600' }}>
                    {getFormDetails(showFormDetails).number}
                  </h2>
                  <p style={{ margin: '0', color: '#4B5563', fontSize: '14px' }}>
                    {getFormDetails(showFormDetails).name}
                  </p>
                </div>
                <div style={{
                  backgroundColor: '#F3F4F6',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  color: '#4B5563'
                }}>
                  Page {currentPage} of 3
                </div>
              </div>
              
              {currentPage === 1 && (
                <div>
                  <h3 style={{ marginTop: 0, marginBottom: '16px', fontSize: '16px', fontWeight: '600', color: '#2563EB' }}>
                    Let's get your case started
                  </h3>
                  <p style={{ marginBottom: '20px', fontSize: '14px', color: '#4B5563' }}>
                    Please provide the following information to begin your {getFormDetails(showFormDetails).name} application.
                  </p>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', fontSize: '14px' }}>
                      Client Full Name *
                    </label>
                    <input 
                      type="text" 
                      value={formResponses.clientName || ''}
                      onChange={(e) => handleInputChange('clientName', e.target.value)}
                      placeholder="Enter client's full legal name"
                      required
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        fontSize: '14px'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', fontSize: '14px' }}>
                      Client Email Address *
                    </label>
                    <input 
                      type="email" 
                      value={formResponses.clientEmail || ''}
                      onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                      placeholder="Enter client's email address"
                      required
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        fontSize: '14px'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', fontSize: '14px' }}>
                      Client Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      value={formResponses.clientPhone || ''}
                      onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                      placeholder="Enter client's phone number"
                      required
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        fontSize: '14px'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', fontSize: '14px' }}>
                      Date of Birth *
                    </label>
                    <input 
                      type="date" 
                      value={formResponses.clientDOB || ''}
                      onChange={(e) => handleInputChange('clientDOB', e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        fontSize: '14px'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', fontSize: '14px' }}>
                      Country of Citizenship *
                    </label>
                    <select
                      value={formResponses.citizenship || ''}
                      onChange={(e) => handleInputChange('citizenship', e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        fontSize: '14px',
                        backgroundColor: 'white'
                      }}
                    >
                      <option value="">Select country</option>
                      <option value="United States">United States</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Canada">Canada</option>
                      <option value="India">India</option>
                      <option value="China">China</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Brazil">Brazil</option>
                      {/* Add more countries as needed */}
                    </select>
                  </div>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', fontSize: '14px' }}>
                      Current Immigration Status *
                    </label>
                    <select
                      value={formResponses.status || ''}
                      onChange={(e) => handleInputChange('status', e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        fontSize: '14px',
                        backgroundColor: 'white'
                      }}
                    >
                      <option value="">Select status</option>
                      <option value="US Citizen">US Citizen</option>
                      <option value="Permanent Resident">Permanent Resident (Green Card)</option>
                      <option value="H-1B">H-1B Visa</option>
                      <option value="F-1">F-1 Student</option>
                      <option value="J-1">J-1 Exchange Visitor</option>
                      <option value="DACA">DACA Recipient</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              )}
              
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '24px',
                paddingTop: '16px',
                borderTop: '1px solid #E5E7EB'
              }}>
                <button 
                  onClick={handleCloseDetails}
                  style={{
                    backgroundColor: '#F3F4F6',
                    color: '#374151',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px 16px',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                
                <div style={{ display: 'flex', gap: '12px' }}>
                  {currentPage > 1 && (
                    <button 
                      onClick={handlePrevPage}
                      style={{
                        backgroundColor: '#F3F4F6',
                        color: '#374151',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '10px 16px',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                    >
                      Previous
                    </button>
                  )}
                  
                  <button 
                    onClick={currentPage < 3 ? handleNextPage : () => {
                      alert('Case created successfully!');
                      handleCloseDetails();
                    }}
                    style={{
                      backgroundColor: '#2563EB',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '10px 16px',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                  >
                    {currentPage < 3 ? 'Next Page' : 'Create Case'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Form Type Card Component
function FormTypeCard({ id, number, name, onClick }) {
  return (
    <div 
      onClick={() => onClick(id)}
      style={{
        border: '1px solid #E5E7EB',
        borderRadius: '6px',
        padding: '12px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        ':hover': {
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transform: 'translateY(-2px)'
        }
      }}
    >
      <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: '600', color: '#2563EB' }}>
        {number}
      </h4>
      <p style={{ margin: 0, fontSize: '12px', color: '#4B5563' }}>
        {name}
      </p>
    </div>
  );
} 