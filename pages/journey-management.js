import React, { useState } from 'react';
import { Bell, Calendar, Users, FileText, CheckCircle, User, Settings, LogOut, BarChart2, Shield, File, Home as HomeIcon, Menu, AlertTriangle, PlusCircle, Trash2, Edit, ArrowUp, ArrowDown, Eye, Save, X, BookOpen, HelpCircle, Clock, AlertOctagon } from 'lucide-react';

export default function JourneyManagement() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('types');
  const [activeJourneyType, setActiveJourneyType] = useState(null);
  const [journeyTypes, setJourneyTypes] = useState([
    {
      id: 1,
      title: 'F1 Visa Journey',
      description: 'International student visa process for studying in the US',
      stages: [
        {
          id: 1,
          name: 'University Acceptance',
          description: 'Receive acceptance letter from a SEVP-approved school',
          active: true,
          order: 1
        },
        {
          id: 2,
          name: 'I-20 Form',
          description: 'Receive I-20 form from your school to start visa process',
          active: true,
          order: 2
        },
        {
          id: 3,
          name: 'SEVIS Fee Payment',
          description: 'Pay the Student and Exchange Visitor Information System (SEVIS) fee',
          active: true,
          order: 3
        },
        {
          id: 4,
          name: 'DS-160 Form',
          description: 'Complete the online nonimmigrant visa application',
          active: true,
          order: 4
        },
        {
          id: 5,
          name: 'Visa Interview',
          description: 'Attend visa interview at US embassy or consulate',
          active: true,
          order: 5
        },
        {
          id: 6,
          name: 'Arrival in US',
          description: 'Enter the US and check in with your school',
          active: true,
          order: 6
        }
      ]
    },
    {
      id: 2,
      title: 'H1B Visa Journey',
      description: 'Employment visa for specialty occupations in the US',
      stages: [
        {
          id: 1,
          name: 'Job Offer',
          description: 'Receive job offer from US employer',
          active: true,
          order: 1
        },
        {
          id: 2,
          name: 'LCA Filing',
          description: 'Employer files Labor Condition Application with DOL',
          active: true,
          order: 2
        },
        {
          id: 3,
          name: 'H1B Petition',
          description: 'Employer files H1B petition with USCIS',
          active: true,
          order: 3
        },
        {
          id: 4,
          name: 'Visa Approval',
          description: 'Receive H1B approval notice',
          active: true,
          order: 4
        },
        {
          id: 5,
          name: 'Visa Interview',
          description: 'Attend visa interview if outside the US',
          active: true,
          order: 5
        },
        {
          id: 6,
          name: 'Entry to US',
          description: 'Enter the US and begin employment',
          active: true,
          order: 6
        }
      ]
    }
  ]);
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
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
    tabs: {
      display: 'flex',
      borderBottom: '1px solid #E5E7EB',
      marginBottom: '1.5rem'
    },
    tab: {
      padding: '0.75rem 1rem',
      cursor: 'pointer',
      fontWeight: '500',
      fontSize: '0.875rem',
      borderBottom: '2px solid transparent'
    },
    tabActive: {
      color: '#2563EB',
      borderBottomColor: '#2563EB'
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
    buttonDanger: {
      backgroundColor: '#EF4444',
      color: '#FFFFFF'
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
      color: '#1F2937',
      fontSize: '1rem'
    },
    cardContent: {
      padding: '1.5rem'
    },
    journeyTypeList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    journeyTypeItem: {
      padding: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid #E5E7EB',
      backgroundColor: '#FFFFFF',
      cursor: 'pointer'
    },
    journeyTypeItemActive: {
      borderColor: '#2563EB',
      backgroundColor: '#EBF5FF'
    },
    journeyTypeTitle: {
      fontWeight: '600',
      color: '#1F2937',
      marginBottom: '0.25rem'
    },
    journeyTypeDescription: {
      fontSize: '0.875rem',
      color: '#6B7280'
    },
    journeyTypeActions: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '0.5rem',
      marginTop: '0.5rem'
    },
    stageList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      marginTop: '1rem'
    },
    stageItem: {
      padding: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid #E5E7EB',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    stageOrder: {
      width: '2rem',
      height: '2rem',
      borderRadius: '9999px',
      backgroundColor: '#EBF5FF',
      color: '#2563EB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      marginRight: '1rem'
    },
    stageContent: {
      flex: '1'
    },
    stageName: {
      fontWeight: '600',
      color: '#1F2937',
      marginBottom: '0.25rem'
    },
    stageDescription: {
      fontSize: '0.875rem',
      color: '#6B7280'
    },
    stageActions: {
      display: 'flex',
      gap: '0.5rem'
    },
    formGroup: {
      marginBottom: '1rem'
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151'
    },
    input: {
      width: '100%',
      padding: '0.5rem 0.75rem',
      borderRadius: '0.375rem',
      border: '1px solid #D1D5DB',
      fontSize: '0.875rem',
      outline: 'none'
    },
    textarea: {
      width: '100%',
      padding: '0.5rem 0.75rem',
      borderRadius: '0.375rem',
      border: '1px solid #D1D5DB',
      fontSize: '0.875rem',
      minHeight: '6rem',
      outline: 'none',
      resize: 'vertical'
    },
    checkbox: {
      marginRight: '0.5rem'
    },
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem'
    },
    column: {
      flex: '1'
    },
    formActions: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '0.5rem',
      marginTop: '1rem'
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0.25rem 0.5rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500'
    },
    badgeSuccess: {
      backgroundColor: '#ECFDF5',
      color: '#059669'
    },
    badgeWarning: {
      backgroundColor: '#FEF3C7',
      color: '#D97706'
    },
    previewPanel: {
      backgroundColor: '#FFFFFF',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      border: '1px solid #E5E7EB',
      padding: '1rem',
      marginTop: '1rem'
    },
    previewTitle: {
      fontWeight: '600',
      color: '#1F2937',
      marginBottom: '0.5rem'
    },
    mobilePreview: {
      width: '320px',
      height: '500px',
      border: '8px solid #1F2937',
      borderRadius: '2rem',
      margin: '0 auto',
      overflow: 'hidden',
      position: 'relative'
    },
    mobileHeader: {
      backgroundColor: '#2563EB',
      color: '#FFFFFF',
      padding: '1rem',
      textAlign: 'center',
      fontWeight: '600'
    },
    mobileContent: {
      padding: '1rem',
      backgroundColor: '#F9FAFB',
      height: 'calc(100% - 4rem)',
      overflowY: 'auto'
    },
    timeline: {
      position: 'relative',
      marginLeft: '1rem',
      paddingLeft: '2rem',
      borderLeft: '2px solid #E5E7EB'
    },
    timelineItem: {
      position: 'relative',
      paddingBottom: '1.5rem'
    },
    timelineDot: {
      position: 'absolute',
      left: '-2.5rem',
      width: '1.5rem',
      height: '1.5rem',
      borderRadius: '9999px',
      backgroundColor: '#2563EB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF'
    },
    timelineTitle: {
      fontWeight: '600',
      color: '#1F2937',
      marginBottom: '0.25rem'
    },
    timelineDesc: {
      fontSize: '0.75rem',
      color: '#6B7280'
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
            <div style={styles.navLink} onClick={() => window.location.href = '/applications'}>
              {collapsed ? (
                <FileText size={20} style={styles.navIcon} />
              ) : (
                <>
                  <FileText size={20} style={styles.navIcon} />
                  <span style={styles.navText}>Applications</span>
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
            <div style={{...styles.navLink, ...styles.navLinkActive}}>
              {collapsed ? (
                <BookOpen size={20} />
              ) : (
                <>
                  <BookOpen size={20} />
                  <span style={{marginLeft: '0.5rem'}}>Journey Management</span>
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
            <h1 style={styles.headerTitle}>Journey Management</h1>
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
          {/* Tabs */}
          <div style={styles.tabs}>
            <div 
              style={{
                ...styles.tab, 
                ...(activeTab === 'types' ? styles.tabActive : {})
              }}
              onClick={() => setActiveTab('types')}
            >
              Journey Types & Stages
            </div>
            <div 
              style={{
                ...styles.tab, 
                ...(activeTab === 'modules' ? styles.tabActive : {})
              }}
              onClick={() => setActiveTab('modules')}
            >
              Information Modules
            </div>
          </div>

          {/* Main Content - Journey Types & Stages */}
          {activeTab === 'types' && (
            <div style={styles.flexRow}>
              {/* Journey Types List */}
              <div style={styles.column}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                  <h2 style={{fontSize: '1.25rem', fontWeight: '600', color: '#1F2937'}}>Journey Types</h2>
                  <button style={styles.button}>
                    <PlusCircle size={16} />
                    <span>Add Journey Type</span>
                  </button>
                </div>
                
                <div style={styles.journeyTypeList}>
                  {journeyTypes.map(journeyType => (
                    <div 
                      key={journeyType.id} 
                      style={{
                        ...styles.journeyTypeItem,
                        ...(activeJourneyType === journeyType.id ? styles.journeyTypeItemActive : {})
                      }}
                      onClick={() => setActiveJourneyType(journeyType.id)}
                    >
                      <div style={styles.journeyTypeTitle}>{journeyType.title}</div>
                      <div style={styles.journeyTypeDescription}>{journeyType.description}</div>
                      <div style={styles.journeyTypeActions}>
                        <button style={{...styles.button, ...styles.buttonSecondary, padding: '0.25rem 0.5rem'}}>
                          <Edit size={14} />
                          <span>Edit</span>
                        </button>
                        <button style={{...styles.button, ...styles.buttonDanger, padding: '0.25rem 0.5rem'}}>
                          <Trash2 size={14} />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Journey Stages */}
              <div style={styles.column}>
                {activeJourneyType !== null && (
                  <>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                      <h2 style={{fontSize: '1.25rem', fontWeight: '600', color: '#1F2937'}}>
                        {journeyTypes.find(j => j.id === activeJourneyType)?.title} Stages
                      </h2>
                      <button style={styles.button}>
                        <PlusCircle size={16} />
                        <span>Add Stage</span>
                      </button>
                    </div>
                    
                    <div style={styles.stageList}>
                      {journeyTypes.find(j => j.id === activeJourneyType)?.stages.map(stage => (
                        <div key={stage.id} style={styles.stageItem}>
                          <div style={styles.stageOrder}>{stage.order}</div>
                          <div style={styles.stageContent}>
                            <div style={styles.stageName}>{stage.name}</div>
                            <div style={styles.stageDescription}>{stage.description}</div>
                          </div>
                          <div style={styles.stageActions}>
                            <button style={{padding: '0.25rem', color: '#4B5563'}}>
                              <ArrowUp size={16} />
                            </button>
                            <button style={{padding: '0.25rem', color: '#4B5563'}}>
                              <ArrowDown size={16} />
                            </button>
                            <button style={{padding: '0.25rem', color: '#4B5563'}}>
                              <Edit size={16} />
                            </button>
                            <button style={{padding: '0.25rem', color: '#EF4444'}}>
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Preview Panel */}
                    <div style={styles.previewPanel}>
                      <div style={styles.previewTitle}>Mobile Preview</div>
                      <div style={styles.mobilePreview}>
                        <div style={styles.mobileHeader}>
                          {journeyTypes.find(j => j.id === activeJourneyType)?.title}
                        </div>
                        <div style={styles.mobileContent}>
                          <div style={styles.timeline}>
                            {journeyTypes.find(j => j.id === activeJourneyType)?.stages.map(stage => (
                              <div key={stage.id} style={styles.timelineItem}>
                                <div style={styles.timelineDot}>{stage.order}</div>
                                <div style={styles.timelineTitle}>{stage.name}</div>
                                <div style={styles.timelineDesc}>{stage.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                
                {activeJourneyType === null && (
                  <div style={{...styles.card, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', height: '100%'}}>
                    <p style={{color: '#6B7280', textAlign: 'center'}}>
                      Select a journey type from the list to view and edit its stages.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Main Content - Information Modules */}
          {activeTab === 'modules' && (
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem'}}>
                <h2 style={{fontSize: '1.25rem', fontWeight: '600', color: '#1F2937'}}>Information Modules</h2>
                <button style={styles.button}>
                  <PlusCircle size={16} />
                  <span>Add Information Module</span>
                </button>
              </div>
              
              <div style={styles.card}>
                <p style={{padding: '1.5rem', color: '#6B7280'}}>
                  This tab will contain the informational content modules. You'll be able to add and edit modules with fields for title, description, detailed content, URL links to resources, and module sections.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
} 