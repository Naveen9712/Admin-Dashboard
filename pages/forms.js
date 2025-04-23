import React, { useState } from 'react';
import NavItem from '../components/NavItem';

export default function Forms() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [showFormDetails, setShowFormDetails] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [formResponses, setFormResponses] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({
    'employment': true,
    'family': false,
    'student': false,
    'humanitarian': false,
    'citizenship': false,
    'general': false
  });

  // Toggle category expansion
  const toggleCategory = (category) => {
    setExpandedCategories({
      ...expandedCategories,
      [category]: !expandedCategories[category]
    });
  };

  // Handler for clicking on a form
  const handleFormClick = (formId) => {
    console.log("Form clicked:", formId);
    setShowFormDetails(formId);
    setCurrentPage(1);
    setFormResponses({});
  };

  // Close form details modal
  const handleCloseDetails = () => {
    setShowFormDetails(null);
    setCurrentPage(1);
    setFormResponses({});
  };

  // Handle form input changes
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

  // Find the selected form object
  const getSelectedForm = () => {
    let selectedForm = null;
    Object.values(forms).forEach(category => {
      const found = category.find(form => form.id === showFormDetails);
      if (found) selectedForm = found;
    });
    return selectedForm;
  };

  // Handler for form request submission
  const handleFormRequest = (e) => {
    e.preventDefault();
    // Here you would handle the form submission
    setShowRequestForm(false);
    // Show submission confirmation (not implemented in this basic version)
  };

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Sample form data
  const forms = {
    employment: [
      {
        id: 'emp-1',
        number: 'Form I-129',
        name: 'Petition for a Nonimmigrant Worker',
        description: 'Used by employers to petition for foreign workers to come to the U.S. temporarily to perform services or labor.',
        type: 'USCIS',
        fee: '$460',
        processingTime: '3-5 months',
        updated: '06/2021'
      },
      {
        id: 'emp-2',
        number: 'Form I-140',
        name: 'Immigrant Petition for Alien Worker',
        description: 'Used by employers to petition for foreign nationals to immigrate permanently to the U.S. for employment purposes.',
        type: 'USCIS',
        fee: '$700',
        processingTime: '6-8 months',
        updated: '09/2021'
      },
      {
        id: 'emp-3',
        number: 'Form I-765',
        name: 'Application for Employment Authorization',
        description: 'Used by certain foreign nationals to request employment authorization and an Employment Authorization Document (EAD).',
        type: 'USCIS',
        fee: '$410',
        processingTime: '3-5 months',
        updated: '08/2021'
      }
    ],
    family: [
      {
        id: 'fam-1',
        number: 'Form I-130',
        name: 'Petition for Alien Relative',
        description: 'Used by citizens or permanent residents to establish relationship to eligible relatives who wish to immigrate to the U.S.',
        type: 'USCIS',
        fee: '$535',
        processingTime: '7-10 months',
        updated: '02/2021'
      },
      {
        id: 'fam-2',
        number: 'Form I-485',
        name: 'Application to Register Permanent Residence or Adjust Status',
        description: 'Used by individuals already in the U.S. who want to apply for lawful permanent resident status.',
        type: 'USCIS',
        fee: '$1,140 + $85 biometric fee',
        processingTime: '8-14 months',
        updated: '12/2021'
      }
    ],
    student: [
      {
        id: 'stu-1',
        number: 'Form I-20',
        name: 'Certificate of Eligibility for Nonimmigrant Student Status',
        description: 'Provided by schools to international students who are approved to study in the United States.',
        type: 'SEVP',
        fee: 'Issued by school',
        processingTime: 'Varies by school',
        updated: '11/2021'
      },
      {
        id: 'stu-2',
        number: 'Form I-901',
        name: 'SEVIS Fee Payment',
        description: 'Required fee payment for F, M, and J nonimmigrants to support the Student and Exchange Visitor Program.',
        type: 'DHS',
        fee: '$350 for F/M, $220 for J',
        processingTime: 'Immediate',
        updated: '10/2021'
      }
    ],
    humanitarian: [
      {
        id: 'hum-1',
        number: 'Form I-821D',
        name: 'Consideration of Deferred Action for Childhood Arrivals (DACA)',
        description: 'Used to request DACA, a discretionary determination to defer removal action of an individual.',
        type: 'USCIS',
        fee: '$495 (includes work permit)',
        processingTime: '3-5 months',
        updated: '04/2021'
      },
      {
        id: 'hum-2',
        number: 'Form I-589',
        name: 'Application for Asylum and for Withholding of Removal',
        description: 'Used by individuals in the U.S. to apply for asylum or withholding of removal.',
        type: 'USCIS/DOJ',
        fee: 'No fee',
        processingTime: '6 months to several years',
        updated: '03/2021'
      }
    ],
    citizenship: [
      {
        id: 'cit-1',
        number: 'Form N-400',
        name: 'Application for Naturalization',
        description: 'Used by permanent residents who are eligible to apply for U.S. citizenship.',
        type: 'USCIS',
        fee: '$640 + $85 biometric fee',
        processingTime: '8-12 months',
        updated: '09/2021'
      },
      {
        id: 'cit-2',
        number: 'Form N-600',
        name: 'Application for Certificate of Citizenship',
        description: 'Used by individuals who acquired or derived U.S. citizenship through U.S. citizen parents.',
        type: 'USCIS',
        fee: '$1,170',
        processingTime: '5-8 months',
        updated: '11/2021'
      }
    ],
    general: [
      {
        id: 'gen-1',
        number: 'Form G-639',
        name: 'Freedom of Information/Privacy Act Request',
        description: 'Used to request records about yourself or another person from USCIS.',
        type: 'USCIS',
        fee: 'No fee',
        processingTime: '30-90 days',
        updated: '07/2021'
      },
      {
        id: 'gen-2',
        number: 'Form I-90',
        name: 'Application to Replace Permanent Resident Card',
        description: 'Used by permanent residents to replace a lost, stolen, or damaged Green Card.',
        type: 'USCIS',
        fee: '$455 + $85 biometric fee',
        processingTime: '5-10 months',
        updated: '05/2021'
      }
    ]
  };

  // Filter forms based on search term
  const filterForms = (formList) => {
    if (!searchTerm) return formList;
    
    return formList.filter(form => 
      form.number.toLowerCase().includes(searchTerm.toLowerCase()) || 
      form.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
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
        
        {/* Sidebar Navigation - with flex: 1 to take available space */}
        <nav style={{ padding: '16px 0', flex: '1', overflowY: 'auto' }}>
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
            active={true} 
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
        
        {/* User Profile - Fixed at bottom */}
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
          }}>Immigration Forms Library</h1>
          
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
          {/* Introduction and search */}
          <div style={{ 
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            marginBottom: '24px'
          }}>
            <p style={{ 
              color: '#4B5563', 
              marginBottom: '16px' 
            }}>
              Access commonly used immigration forms organized by type. Use these forms for various visa applications, permanent residency, citizenship, and other immigration processes.
            </p>
            
            <div style={{ 
              display: 'flex',
              marginBottom: '16px' 
            }}>
              <div style={{ 
                display: 'flex',
                flex: 1,
                position: 'relative',
                alignItems: 'center'
              }}>
                <span style={{ 
                  position: 'absolute',
                  left: '12px',
                  color: '#6B7280'
                }}>🔍</span>
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search forms by name or keyword..."
                  style={{
                    width: '100%',
                    padding: '10px 10px 10px 36px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <button 
                onClick={() => setShowRequestForm(true)}
                style={{
                  backgroundColor: '#2563EB',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 16px',
                  marginLeft: '12px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Request a Form
              </button>
            </div>
          </div>

          {/* Form Categories Section */}
          <div style={{ marginBottom: '30px' }}>
            {/* Employment-Based Visas Category */}
            <div style={{ 
              marginBottom: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <div 
                onClick={() => toggleCategory('employment')}
                style={{
                  backgroundColor: '#EBF5FF',
                  padding: '16px 20px',
                  borderBottom: expandedCategories.employment ? '1px solid #BFDBFE' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '20px', marginRight: '12px' }}>💼</span>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#2563EB' }}>Employment-Based Visas</h2>
                    <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#4B5563' }}>
                      Forms for work visas, employment authorization, and employer petitions
                    </p>
                  </div>
                </div>
                <span style={{ fontSize: '20px' }}>
                  {expandedCategories.employment ? '▼' : '►'}
                </span>
              </div>
              
              {expandedCategories.employment && (
                <div style={{ padding: '16px' }}>
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '16px'
                  }}>
                    {filterForms(forms.employment).map(form => (
                      <div 
                        key={form.id}
                        onClick={() => handleFormClick(form.id)}
                        style={{
                          border: '1px solid #E5E7EB',
                          borderRadius: '6px',
                          padding: '16px',
                          cursor: 'pointer',
                          transition: 'transform 0.2s, box-shadow 0.2s',
                          position: 'relative',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                          }
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          fontSize: '12px',
                          backgroundColor: '#F3F4F6',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          color: '#374151'
                        }}>
                          {form.type}
                        </span>
                        
                        <h3 style={{ 
                          margin: '0 0 8px 0', 
                          color: '#2563EB',
                          fontSize: '16px',
                          fontWeight: '600'
                        }}>
                          {form.number}
                        </h3>
                        
                        <h4 style={{ 
                          margin: '0 0 12px 0', 
                          color: '#1F2937',
                          fontSize: '14px',
                          fontWeight: '500'
                        }}>
                          {form.name}
                        </h4>
                        
                        <p style={{ 
                          margin: '0 0 16px 0', 
                          color: '#4B5563',
                          fontSize: '13px',
                          lineHeight: '1.4'
                        }}>
                          {form.description}
                        </p>
                        
                        <div style={{ 
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px',
                          color: '#6B7280'
                        }}>
                          <span>Fee: {form.fee}</span>
                          <span>Updated: {form.updated}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Family-Based Immigration Category */}
            <div style={{ 
              marginBottom: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <div 
                onClick={() => toggleCategory('family')}
                style={{
                  backgroundColor: '#FEF3C7',
                  padding: '16px 20px',
                  borderBottom: expandedCategories.family ? '1px solid #FDE68A' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '20px', marginRight: '12px' }}>👪</span>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#D97706' }}>Family-Based Immigration</h2>
                    <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#4B5563' }}>
                      Forms for petitioning family members, marriage-based visas, and adjustment of status
                    </p>
                  </div>
                </div>
                <span style={{ fontSize: '20px' }}>
                  {expandedCategories.family ? '▼' : '►'}
                </span>
              </div>
              
              {expandedCategories.family && (
                <div style={{ padding: '16px' }}>
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '16px'
                  }}>
                    {filterForms(forms.family).map(form => (
                      <div 
                        key={form.id}
                        onClick={() => handleFormClick(form.id)}
                        style={{
                          border: '1px solid #E5E7EB',
                          borderRadius: '6px',
                          padding: '16px',
                          cursor: 'pointer',
                          transition: 'transform 0.2s, box-shadow 0.2s',
                          position: 'relative'
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          fontSize: '12px',
                          backgroundColor: '#F3F4F6',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          color: '#374151'
                        }}>
                          {form.type}
                        </span>
                        
                        <h3 style={{ 
                          margin: '0 0 8px 0', 
                          color: '#D97706',
                          fontSize: '16px',
                          fontWeight: '600'
                        }}>
                          {form.number}
                        </h3>
                        
                        <h4 style={{ 
                          margin: '0 0 12px 0', 
                          color: '#1F2937',
                          fontSize: '14px',
                          fontWeight: '500'
                        }}>
                          {form.name}
                        </h4>
                        
                        <p style={{ 
                          margin: '0 0 16px 0', 
                          color: '#4B5563',
                          fontSize: '13px',
                          lineHeight: '1.4'
                        }}>
                          {form.description}
                        </p>
                        
                        <div style={{ 
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px',
                          color: '#6B7280'
                        }}>
                          <span>Fee: {form.fee}</span>
                          <span>Updated: {form.updated}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Student Visas Category */}
            <div style={{ 
              marginBottom: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <div 
                onClick={() => toggleCategory('student')}
                style={{
                  backgroundColor: '#ECFDF5',
                  padding: '16px 20px',
                  borderBottom: expandedCategories.student ? '1px solid #A7F3D0' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '20px', marginRight: '12px' }}>🎓</span>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#059669' }}>Student Visas</h2>
                    <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#4B5563' }}>
                      Forms for F-1, M-1, and J-1 student visas, and school enrollment
                    </p>
                  </div>
                </div>
                <span style={{ fontSize: '20px' }}>
                  {expandedCategories.student ? '▼' : '►'}
                </span>
              </div>
              
              {expandedCategories.student && (
                <div style={{ padding: '16px' }}>
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '16px'
                  }}>
                    {filterForms(forms.student).map(form => (
                      <div 
                        key={form.id}
                        onClick={() => handleFormClick(form.id)}
                        style={{
                          border: '1px solid #E5E7EB',
                          borderRadius: '6px',
                          padding: '16px',
                          cursor: 'pointer',
                          transition: 'transform 0.2s, box-shadow 0.2s',
                          position: 'relative'
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          fontSize: '12px',
                          backgroundColor: '#F3F4F6',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          color: '#374151'
                        }}>
                          {form.type}
                        </span>
                        
                        <h3 style={{ 
                          margin: '0 0 8px 0', 
                          color: '#059669',
                          fontSize: '16px',
                          fontWeight: '600'
                        }}>
                          {form.number}
                        </h3>
                        
                        <h4 style={{ 
                          margin: '0 0 12px 0', 
                          color: '#1F2937',
                          fontSize: '14px',
                          fontWeight: '500'
                        }}>
                          {form.name}
                        </h4>
                        
                        <p style={{ 
                          margin: '0 0 16px 0', 
                          color: '#4B5563',
                          fontSize: '13px',
                          lineHeight: '1.4'
                        }}>
                          {form.description}
                        </p>
                        
                        <div style={{ 
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px',
                          color: '#6B7280'
                        }}>
                          <span>Fee: {form.fee}</span>
                          <span>Updated: {form.updated}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* DACA & Humanitarian Category */}
            <div style={{ 
              marginBottom: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <div 
                onClick={() => toggleCategory('humanitarian')}
                style={{
                  backgroundColor: '#FEE2E2',
                  padding: '16px 20px',
                  borderBottom: expandedCategories.humanitarian ? '1px solid #FECACA' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '20px', marginRight: '12px' }}>🤲</span>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#DC2626' }}>DACA & Humanitarian</h2>
                    <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#4B5563' }}>
                      Forms for DACA, asylum, refugee status, and humanitarian parole
                    </p>
                  </div>
                </div>
                <span style={{ fontSize: '20px' }}>
                  {expandedCategories.humanitarian ? '▼' : '►'}
                </span>
              </div>
              
              {expandedCategories.humanitarian && (
                <div style={{ padding: '16px' }}>
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '16px'
                  }}>
                    {filterForms(forms.humanitarian).map(form => (
                      <div 
                        key={form.id}
                        onClick={() => handleFormClick(form.id)}
                        style={{
                          border: '1px solid #E5E7EB',
                          borderRadius: '6px',
                          padding: '16px',
                          cursor: 'pointer',
                          transition: 'transform 0.2s, box-shadow 0.2s',
                          position: 'relative'
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          fontSize: '12px',
                          backgroundColor: '#F3F4F6',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          color: '#374151'
                        }}>
                          {form.type}
                        </span>
                        
                        <h3 style={{ 
                          margin: '0 0 8px 0', 
                          color: '#DC2626',
                          fontSize: '16px',
                          fontWeight: '600'
                        }}>
                          {form.number}
                        </h3>
                        
                        <h4 style={{ 
                          margin: '0 0 12px 0', 
                          color: '#1F2937',
                          fontSize: '14px',
                          fontWeight: '500'
                        }}>
                          {form.name}
                        </h4>
                        
                        <p style={{ 
                          margin: '0 0 16px 0', 
                          color: '#4B5563',
                          fontSize: '13px',
                          lineHeight: '1.4'
                        }}>
                          {form.description}
                        </p>
                        
                        <div style={{ 
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px',
                          color: '#6B7280'
                        }}>
                          <span>Fee: {form.fee}</span>
                          <span>Updated: {form.updated}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Citizenship & Naturalization Category */}
            <div style={{ 
              marginBottom: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <div 
                onClick={() => toggleCategory('citizenship')}
                style={{
                  backgroundColor: '#EFF6FF',
                  padding: '16px 20px',
                  borderBottom: expandedCategories.citizenship ? '1px solid #BFDBFE' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '20px', marginRight: '12px' }}>🗽</span>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#1D4ED8' }}>Citizenship & Naturalization</h2>
                    <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#4B5563' }}>
                      Forms for citizenship applications, naturalization, and certificates of citizenship
                    </p>
                  </div>
                </div>
                <span style={{ fontSize: '20px' }}>
                  {expandedCategories.citizenship ? '▼' : '►'}
                </span>
              </div>
              
              {expandedCategories.citizenship && (
                <div style={{ padding: '16px' }}>
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '16px'
                  }}>
                    {filterForms(forms.citizenship).map(form => (
                      <div 
                        key={form.id}
                        onClick={() => handleFormClick(form.id)}
                        style={{
                          border: '1px solid #E5E7EB',
                          borderRadius: '6px',
                          padding: '16px',
                          cursor: 'pointer',
                          transition: 'transform 0.2s, box-shadow 0.2s',
                          position: 'relative'
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          fontSize: '12px',
                          backgroundColor: '#F3F4F6',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          color: '#374151'
                        }}>
                          {form.type}
                        </span>
                        
                        <h3 style={{ 
                          margin: '0 0 8px 0', 
                          color: '#1D4ED8',
                          fontSize: '16px',
                          fontWeight: '600'
                        }}>
                          {form.number}
                        </h3>
                        
                        <h4 style={{ 
                          margin: '0 0 12px 0', 
                          color: '#1F2937',
                          fontSize: '14px',
                          fontWeight: '500'
                        }}>
                          {form.name}
                        </h4>
                        
                        <p style={{ 
                          margin: '0 0 16px 0', 
                          color: '#4B5563',
                          fontSize: '13px',
                          lineHeight: '1.4'
                        }}>
                          {form.description}
                        </p>
                        
                        <div style={{ 
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px',
                          color: '#6B7280'
                        }}>
                          <span>Fee: {form.fee}</span>
                          <span>Updated: {form.updated}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* General & Supplemental Forms Category */}
            <div style={{ 
              marginBottom: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <div 
                onClick={() => toggleCategory('general')}
                style={{
                  backgroundColor: '#F3F4F6',
                  padding: '16px 20px',
                  borderBottom: expandedCategories.general ? '1px solid #D1D5DB' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '20px', marginRight: '12px' }}>📄</span>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#4B5563' }}>General & Supplemental Forms</h2>
                    <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#4B5563' }}>
                      General purpose forms, fee waivers, and supplemental forms for various applications
                    </p>
                  </div>
                </div>
                <span style={{ fontSize: '20px' }}>
                  {expandedCategories.general ? '▼' : '►'}
                </span>
              </div>
              
              {expandedCategories.general && (
                <div style={{ padding: '16px' }}>
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '16px'
                  }}>
                    {filterForms(forms.general).map(form => (
                      <div 
                        key={form.id}
                        onClick={() => handleFormClick(form.id)}
                        style={{
                          border: '1px solid #E5E7EB',
                          borderRadius: '6px',
                          padding: '16px',
                          cursor: 'pointer',
                          transition: 'transform 0.2s, box-shadow 0.2s',
                          position: 'relative'
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          fontSize: '12px',
                          backgroundColor: '#F3F4F6',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          color: '#374151'
                        }}>
                          {form.type}
                        </span>
                        
                        <h3 style={{ 
                          margin: '0 0 8px 0', 
                          color: '#4B5563',
                          fontSize: '16px',
                          fontWeight: '600'
                        }}>
                          {form.number}
                        </h3>
                        
                        <h4 style={{ 
                          margin: '0 0 12px 0', 
                          color: '#1F2937',
                          fontSize: '14px',
                          fontWeight: '500'
                        }}>
                          {form.name}
                        </h4>
                        
                        <p style={{ 
                          margin: '0 0 16px 0', 
                          color: '#4B5563',
                          fontSize: '13px',
                          lineHeight: '1.4'
                        }}>
                          {form.description}
                        </p>
                        
                        <div style={{ 
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px',
                          color: '#6B7280'
                        }}>
                          <span>Fee: {form.fee}</span>
                          <span>Updated: {form.updated}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Coming Soon Section */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <h2 style={{ 
                  margin: 0, 
                  fontSize: '18px', 
                  fontWeight: '600', 
                  color: '#1F2937',
                  flex: 1
                }}>
                  More Forms Coming Soon
                </h2>
                <div style={{
                  backgroundColor: '#EBF5FF',
                  borderRadius: '6px',
                  padding: '4px 12px',
                  fontSize: '12px',
                  color: '#2563EB'
                }}>
                  In Development
                </div>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '16px',
                marginBottom: '16px'
              }}>
                {/* Coming Soon Placeholders */}
                <div style={{
                  border: '1px dashed #D1D5DB',
                  borderRadius: '6px',
                  padding: '16px',
                  backgroundColor: '#F9FAFB'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '20px', marginRight: '8px' }}>🌐</span>
                    <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '500', color: '#6B7280' }}>
                      DS-160 Online Nonimmigrant Visa Application
                    </h3>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: '#E5E7EB',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    marginBottom: '8px'
                  }}>
                    <div style={{
                      width: '70%',
                      height: '100%',
                      backgroundColor: '#2563EB'
                    }}></div>
                  </div>
                  <p style={{ margin: '0', fontSize: '12px', color: '#6B7280' }}>
                    Coming in August 2023
                  </p>
                </div>
                
                <div style={{
                  border: '1px dashed #D1D5DB',
                  borderRadius: '6px',
                  padding: '16px',
                  backgroundColor: '#F9FAFB'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '20px', marginRight: '8px' }}>🧠</span>
                    <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '500', color: '#6B7280' }}>
                      Form I-751 Petition to Remove Conditions
                    </h3>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: '#E5E7EB',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    marginBottom: '8px'
                  }}>
                    <div style={{
                      width: '45%',
                      height: '100%',
                      backgroundColor: '#2563EB'
                    }}></div>
                  </div>
                  <p style={{ margin: '0', fontSize: '12px', color: '#6B7280' }}>
                    Coming in October 2023
                  </p>
                </div>
                
                <div style={{
                  border: '1px dashed #D1D5DB',
                  borderRadius: '6px',
                  padding: '16px',
                  backgroundColor: '#F9FAFB'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '20px', marginRight: '8px' }}>🏛️</span>
                    <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '500', color: '#6B7280' }}>
                      E-3 Visa Forms for Australian Professionals
                    </h3>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: '#E5E7EB',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    marginBottom: '8px'
                  }}>
                    <div style={{
                      width: '20%',
                      height: '100%',
                      backgroundColor: '#2563EB'
                    }}></div>
                  </div>
                  <p style={{ margin: '0', fontSize: '12px', color: '#6B7280' }}>
                    Coming in December 2023
                  </p>
                </div>
                
                <div style={{
                  border: '1px dashed #D1D5DB',
                  borderRadius: '6px',
                  padding: '16px',
                  backgroundColor: '#F9FAFB'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '20px', marginRight: '8px' }}>🔄</span>
                    <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '500', color: '#6B7280' }}>
                      EOIR-26 Appeal of Immigration Judge Decision
                    </h3>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: '#E5E7EB',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    marginBottom: '8px'
                  }}>
                    <div style={{
                      width: '35%',
                      height: '100%',
                      backgroundColor: '#2563EB'
                    }}></div>
                  </div>
                  <p style={{ margin: '0', fontSize: '12px', color: '#6B7280' }}>
                    Coming in November 2023
                  </p>
                </div>
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center',
                borderTop: '1px solid #E5E7EB',
                paddingTop: '16px'
              }}>
                <p style={{ 
                  margin: 0, 
                  textAlign: 'center', 
                  fontSize: '14px', 
                  color: '#6B7280',
                  maxWidth: '600px' 
                }}>
                  Our immigration forms library is continuously growing. We're adding new forms and detailed guides every month to better support your immigration needs.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Request Form Modal */}
      {showRequestForm && (
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
            maxWidth: '500px',
            padding: '24px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{ marginTop: 0, marginBottom: '16px' }}>Request a Form</h2>
            <form onSubmit={handleFormRequest}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
                  Form Name/Number
                </label>
                <input 
                  type="text" 
                  placeholder="e.g., I-485 or Application to Adjust Status"
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
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
                  Brief Description
                </label>
                <textarea 
                  placeholder="Describe what you need this form for..."
                  rows="3"
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '6px',
                    fontSize: '14px',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
                  Urgency
                </label>
                <select
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
                  <option value="">Select Urgency Level</option>
                  <option value="low">Low - Need within 30 days</option>
                  <option value="medium">Medium - Need within 14 days</option>
                  <option value="high">High - Need within 7 days</option>
                  <option value="urgent">Urgent - Need within 48 hours</option>
                </select>
              </div>
              
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="Your email address"
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
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  placeholder="Your phone number"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div style={{ 
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '12px',
                marginTop: '20px'
              }}>
                <button 
                  type="button"
                  onClick={() => setShowRequestForm(false)}
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
                <button 
                  type="submit"
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
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Form Details Modal with Questionnaire */}
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
            {(() => {
              const selectedForm = getSelectedForm();
              if (!selectedForm) {
                console.error("No form found with ID:", showFormDetails);
                return <div>Error: Form not found</div>;
              }
              
              return (
                <>
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
                        {selectedForm.number}
                      </h2>
                      <p style={{ margin: '0', color: '#4B5563', fontSize: '14px' }}>
                        {selectedForm.name}
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
                        Please provide the following information to begin your {selectedForm.name} application.
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
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="Argentina">Argentina</option>
                          <option value="Australia">Australia</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Canada">Canada</option>
                          <option value="China">China</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Egypt">Egypt</option>
                          <option value="France">France</option>
                          <option value="Germany">Germany</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Italy">Italy</option>
                          <option value="Japan">Japan</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Russia">Russia</option>
                          <option value="South Korea">South Korea</option>
                          <option value="Spain">Spain</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="Vietnam">Vietnam</option>
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
                          <option value="Lawful Permanent Resident">Lawful Permanent Resident (Green Card)</option>
                          <option value="H-1B Visa Holder">H-1B Visa Holder</option>
                          <option value="F-1 Student">F-1 Student</option>
                          <option value="J-1 Exchange Visitor">J-1 Exchange Visitor</option>
                          <option value="B-1/B-2 Visitor">B-1/B-2 Visitor</option>
                          <option value="L-1 Visa Holder">L-1 Visa Holder</option>
                          <option value="DACA Recipient">DACA Recipient</option>
                          <option value="TPS">Temporary Protected Status (TPS)</option>
                          <option value="Asylum Applicant">Asylum Applicant</option>
                          <option value="Refugee">Refugee</option>
                          <option value="Undocumented">Undocumented</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', fontSize: '14px' }}>
                          Case Priority
                        </label>
                        <select
                          value={formResponses.priority || ''}
                          onChange={(e) => handleInputChange('priority', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #D1D5DB',
                            borderRadius: '6px',
                            fontSize: '14px',
                            backgroundColor: 'white'
                          }}
                        >
                          <option value="normal">Normal Processing</option>
                          <option value="urgent">Urgent - Time Sensitive</option>
                          <option value="expedited">Expedited Processing</option>
                          <option value="premium">Premium Processing (Additional Fee)</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  {currentPage === 2 && (
                    <div>
                      {/* Page 2 content would go here */}
                      <h3 style={{ marginTop: 0, marginBottom: '16px', fontSize: '16px', fontWeight: '600', color: '#2563EB' }}>
                        Additional Information
                      </h3>
                    </div>
                  )}
                  
                  {currentPage === 3 && (
                    <div>
                      {/* Page 3 content would go here */}
                      <h3 style={{ marginTop: 0, marginBottom: '16px', fontSize: '16px', fontWeight: '600', color: '#2563EB' }}>
                        Documents & Review
                      </h3>
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
                        onClick={currentPage < 3 ? handleNextPage : () => console.log("Creating case...")}
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
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
} 