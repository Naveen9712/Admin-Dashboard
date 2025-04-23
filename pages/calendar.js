import React, { useState } from 'react';
import NavItem from '../components/NavItem';

export default function Calendar() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showMeetingPopup, setShowMeetingPopup] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [meetingDuration, setMeetingDuration] = useState(30);
  const [timeZone, setTimeZone] = useState('(GMT-05:00) Central Time - Chicago');
  
  // Sample data for the calendar
  const currentMonth = selectedDate.toLocaleString('default', { month: 'long' });
  const currentYear = selectedDate.getFullYear();
  
  // Sample booked appointments with prices
  const bookedAppointments = [
    // Monday
    {
      date: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 1)).setHours(10, 0, 0, 0),
      duration: 60,
      client: "Michael Smith",
      type: "Green Card Consultation",
      price: 95
    },
    {
      date: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 1)).setHours(13, 30, 0, 0),
      duration: 30,
      client: "Sarah Johnson",
      type: "H1B Visa Discussion",
      price: 65
    },
    {
      date: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 1)).setHours(15, 0, 0, 0),
      duration: 60,
      client: "David Kim",
      type: "DACA Renewal",
      price: 95
    },
    
    // Tuesday
    {
      date: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 2)).setHours(9, 30, 0, 0),
      duration: 30,
      client: "Jennifer Wong",
      type: "Initial Consultation",
      price: 65
    },
    {
      date: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 2)).setHours(11, 0, 0, 0),
      duration: 90,
      client: "Robert Chen",
      type: "Family Visa Strategy",
      price: 150
    },
    {
      date: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 2)).setHours(14, 0, 0, 0),
      duration: 60,
      client: "Maria Garcia",
      type: "Citizenship Application",
      price: 95
    },
    
    // Wednesday
    {
      date: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 3)).setHours(10, 0, 0, 0),
      duration: 30,
      client: "James Wilson",
      type: "Status Check",
      price: 65
    },
    {
      date: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 3)).setHours(11, 0, 0, 0),
      duration: 60,
      client: "Sophia Lee",
      type: "Student Visa",
      price: 95
    },
    {
      date: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 3)).setHours(13, 0, 0, 0),
      duration: 60,
      client: "Omar Hassan",
      type: "Work Permit Review",
      price: 95
    },
    {
      date: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 3)).setHours(16, 30, 0, 0),
      duration: 30,
      client: "Emma Rodriguez",
      type: "Follow-up Meeting",
      price: 65
    },
    
    // Thursday
    {
      date: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 4)).setHours(9, 0, 0, 0),
      duration: 90,
      client: "Daniel Brown",
      type: "Complex Case Review",
      price: 150
    },
    {
      date: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 4)).setHours(11, 0, 0, 0),
      duration: 30,
      client: "Linda Patel",
      type: "Document Review",
      price: 65
    },
    {
      date: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 4)).setHours(14, 30, 0, 0),
      duration: 60,
      client: "Thomas Nguyen",
      type: "Green Card Process",
      price: 95
    },
    
    // Friday
    {
      date: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 5)).setHours(10, 30, 0, 0),
      duration: 30,
      client: "Ana Cordova",
      type: "Initial Consultation",
      price: 65
    },
    {
      date: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 5)).setHours(13, 0, 0, 0),
      duration: 90,
      client: "John Thompson",
      type: "Full Case Strategy",
      price: 150
    }
  ];
  
  // Function to check if a time slot is booked
  const isTimeSlotBooked = (day, timeSlot) => {
    const slotDate = new Date(day.date);
    slotDate.setHours(timeSlot.hour, timeSlot.minute, 0, 0);
    
    return bookedAppointments.some(appointment => {
      const appointmentDate = new Date(appointment.date);
      const appointmentEndTime = new Date(appointmentDate);
      appointmentEndTime.setMinutes(appointmentDate.getMinutes() + appointment.duration);
      
      return slotDate >= appointmentDate && slotDate < appointmentEndTime;
    });
  };
  
  // Function to get appointment details for a time slot
  const getAppointmentDetails = (day, timeSlot) => {
    const slotDate = new Date(day.date);
    slotDate.setHours(timeSlot.hour, timeSlot.minute, 0, 0);
    
    return bookedAppointments.find(appointment => {
      const appointmentDate = new Date(appointment.date);
      const appointmentEndTime = new Date(appointmentDate);
      appointmentEndTime.setMinutes(appointmentDate.getMinutes() + appointment.duration);
      
      return slotDate >= appointmentDate && slotDate < appointmentEndTime;
    });
  };
  
  // Generate the dates for the current week (Monday to Friday only)
  const generateWeekDays = () => {
    const days = [];
    const currentDay = new Date(selectedDate);
    const today = new Date();
    
    // Find the first day of the work week (Monday)
    let dayOfWeek = currentDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
    if (dayOfWeek === 0) dayOfWeek = 7; // Treat Sunday as day 7
    currentDay.setDate(currentDay.getDate() - dayOfWeek + 1); // Move to Monday
    
    // Generate 5 days starting from Monday
    for (let i = 0; i < 5; i++) {
      const date = new Date(currentDay);
      const isToday = date.toDateString() === today.toDateString();
      days.push({
        date,
        dayName: date.toLocaleString('default', { weekday: 'long' }),
        dayNumber: date.getDate(),
        isToday
      });
      currentDay.setDate(currentDay.getDate() + 1);
    }
    return days;
  };
  
  const weekDays = generateWeekDays();
  
  // Generate time slots from 9 AM to 8 PM
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 20; hour++) {
      const hourFormat = hour <= 12 ? hour : hour - 12;
      const amPm = hour < 12 ? 'AM' : 'PM';
      
      // Add half-hour slot
      slots.push({
        time: `${hourFormat}:00 ${amPm}`,
        hour,
        minute: 0
      });
      
      if (hour < 20) {
        slots.push({
          time: `${hourFormat}:30 ${amPm}`,
          hour,
          minute: 30
        });
      }
    }
    return slots;
  };
  
  const timeSlots = generateTimeSlots();
  
  const handleTimeSlotClick = (day, timeSlot) => {
    const meetingDate = new Date(day.date);
    meetingDate.setHours(timeSlot.hour, timeSlot.minute);
    
    setSelectedTime({
      date: meetingDate,
      formattedDate: meetingDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
      formattedTime: timeSlot.time
    });
    
    setShowBookingForm(true);
  };
  
  const handleMeetingClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowMeetingPopup(true);
  };
  
  const handleCloseMeeting = () => {
    setShowMeetingPopup(false);
  };
  
  const handleNextWeek = () => {
    const nextWeek = new Date(selectedDate);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setSelectedDate(nextWeek);
  };
  
  const handlePrevWeek = () => {
    const prevWeek = new Date(selectedDate);
    prevWeek.setDate(prevWeek.getDate() - 7);
    setSelectedDate(prevWeek);
  };
  
  const handleCloseForm = () => {
    setShowBookingForm(false);
  };
  
  const handleMeetingBook = (e) => {
    e.preventDefault();
    alert('Meeting booked successfully!');
    setShowBookingForm(false);
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
        <nav style={{ marginTop: '20px' }}>
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
            active={true} 
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
                <div style={{ fontSize: '12px', color: '#6B7280' }}>sarah@legalflow.com</div>
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
          }}>Meeting Calendar</h1>
          
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
          {/* Calendar Header */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '24px' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ 
                backgroundColor: '#E1E1E1', 
                borderRadius: '50%', 
                width: '42px', 
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px'
              }}>
                C
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>30 mins</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', fontSize: '14px' }}>
                  <span>One to many</span>
                  <span>•</span>
                  <span>30 mins</span>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <select 
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
                style={{ 
                  padding: '8px 12px', 
                  borderRadius: '4px', 
                  border: '1px solid #ccc',
                  backgroundColor: 'white'
                }}
              >
                <option value="(GMT-05:00) Central Time - Chicago">(GMT-05:00) Central Time - Chicago</option>
                <option value="(GMT-04:00) Eastern Time">(GMT-04:00) Eastern Time</option>
                <option value="(GMT-07:00) Pacific Time">(GMT-07:00) Pacific Time</option>
              </select>
              
              <div style={{ 
                display: 'flex',
                alignItems: 'center', 
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #ccc'
              }}>
                <button style={{ 
                  padding: '6px 12px',
                  backgroundColor: 'white',
                  border: 'none',
                  borderRight: '1px solid #ccc',
                  cursor: 'pointer'
                }}>
                  Today
                </button>
                <button onClick={handlePrevWeek} style={{ 
                  padding: '6px 12px',
                  backgroundColor: 'white',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  &lt;
                </button>
                <button onClick={handleNextWeek} style={{ 
                  padding: '6px 12px',
                  backgroundColor: 'white',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  &gt;
                </button>
              </div>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>24 hr</span>
                <div style={{ 
                  width: '36px', 
                  height: '20px', 
                  backgroundColor: '#ccc',
                  borderRadius: '10px',
                  position: 'relative',
                  cursor: 'pointer'
                }}>
                  <div style={{ 
                    position: 'absolute',
                    width: '16px',
                    height: '16px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    top: '2px',
                    right: '2px'
                  }}></div>
                </div>
              </label>
            </div>
          </div>
          
          {/* Calendar */}
          <div style={{ 
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}>
            {/* Days of the week */}
            <div style={{ 
              display: 'flex',
              borderBottom: '1px solid #E5E7EB' 
            }}>
              <div style={{ 
                width: '80px', 
                padding: '16px',
                borderRight: '1px solid #E5E7EB',
                backgroundColor: '#f9f9f9'
              }}></div>
              
              {weekDays.map((day, index) => (
                <div 
                  key={index}
                  style={{ 
                    flex: 1,
                    padding: '16px',
                    textAlign: 'center',
                    backgroundColor: day.isToday ? '#EBF5FF' : '#f9f9f9',
                    borderRight: index < 6 ? '1px solid #E5E7EB' : 'none'
                  }}
                >
                  <div style={{ fontWeight: 'bold' }}>{day.dayName}</div>
                  <div style={{ 
                    marginTop: '4px',
                    backgroundColor: day.isToday ? '#2563EB' : 'transparent',
                    color: day.isToday ? 'white' : 'inherit',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto'
                  }}>
                    {day.dayNumber}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Time slots */}
            <div style={{ height: '600px', overflowY: 'auto' }}>
              {timeSlots.map((timeSlot, tIndex) => (
                <div 
                  key={tIndex}
                  style={{ 
                    display: 'flex',
                    borderBottom: tIndex < timeSlots.length - 1 ? '1px solid #E5E7EB' : 'none',
                    height: '48px'
                  }}
                >
                  <div style={{ 
                    width: '80px', 
                    padding: '12px 16px',
                    borderRight: '1px solid #E5E7EB',
                    fontSize: '14px',
                    color: '#6B7280',
                    textAlign: 'right'
                  }}>
                    {timeSlot.time}
                  </div>
                  
                  {weekDays.map((day, dIndex) => (
                    <div 
                      key={dIndex}
                      style={{ 
                        flex: 1,
                        borderRight: dIndex < 6 ? '1px solid #E5E7EB' : 'none',
                        padding: '4px',
                        cursor: 'pointer',
                        backgroundColor: day.isToday ? '#F9FAFB' : 'transparent',
                        position: 'relative'
                      }}
                      onClick={() => {
                        const isBooked = isTimeSlotBooked(day, timeSlot);
                        if (!isBooked) {
                          handleTimeSlotClick(day, timeSlot);
                        }
                      }}
                    >
                      {isTimeSlotBooked(day, timeSlot) ? (
                        <div 
                          style={{
                            backgroundColor: '#EBF5FF',
                            borderLeft: '3px solid #2563EB',
                            height: '100%',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            color: '#2563EB',
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer'
                          }}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent the empty slot handler from firing
                            const appointment = getAppointmentDetails(day, timeSlot);
                            if (appointment) {
                              handleMeetingClick(appointment);
                            }
                          }}
                        >
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}>
                            <span>{getAppointmentDetails(day, timeSlot)?.client}</span>
                            <span style={{
                              backgroundColor: '#4CAF50',
                              color: 'white',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              fontSize: '11px',
                              fontWeight: 'bold'
                            }}>
                              ${getAppointmentDetails(day, timeSlot)?.price}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '100%',
                          opacity: 0.5
                        }}>
                          <span style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: '#2563EB',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '14px',
                            fontWeight: 'bold'
                          }}>+</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Booking Form Modal */}
          {showBookingForm && selectedTime && (
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
                width: '90%',
                maxWidth: '600px',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '24px'
              }}>
                <h2 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  marginBottom: '16px' 
                }}>
                  30 mins
                </h2>
                
                <div style={{ 
                  padding: '16px 0',
                  borderBottom: '1px solid #E5E7EB',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{ 
                    backgroundColor: '#E1E1E1', 
                    borderRadius: '50%', 
                    width: '36px', 
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    C
                  </div>
                  <span>Chand Parvathaneni</span>
                </div>
                
                <div style={{ 
                  padding: '16px 0',
                  borderBottom: '1px solid #E5E7EB'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    marginBottom: '8px'
                  }}>
                    <span style={{ color: '#666' }}>📅</span>
                    <span>{selectedTime.formattedDate}, {selectedTime.formattedTime} - {meetingDuration} mins</span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    marginBottom: '8px'
                  }}>
                    <span style={{ color: '#666' }}>🌍</span>
                    <span>{timeZone}</span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px'
                  }}>
                    <span style={{ color: '#666' }}>💻</span>
                    <span>Zoom Meeting</span>
                  </div>
                </div>
                
                <form onSubmit={handleMeetingBook}>
                  <div style={{ marginTop: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                      First Name *
                    </label>
                    <input 
                      type="text"
                      required
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        marginBottom: '16px'
                      }}
                    />
                    
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                      Last Name *
                    </label>
                    <input 
                      type="text"
                      required
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        marginBottom: '16px'
                      }}
                    />
                    
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      required
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        marginBottom: '16px'
                      }}
                    />
                    
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '16px'
                    }}>
                      <input 
                        type="checkbox" 
                        id="smsUpdates" 
                        style={{ marginRight: '8px' }}
                      />
                      <label htmlFor="smsUpdates">Send me updates for this event by SMS</label>
                    </div>
                    
                    {/* SMS fields would be shown conditionally */}
                    
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                      Please share anything that will help prepare for our meeting.
                    </label>
                    <textarea 
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        marginBottom: '24px',
                        height: '100px',
                        resize: 'vertical'
                      }}
                      placeholder="Enter your answer here..."
                    ></textarea>
                    
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
                      <button 
                        type="button" 
                        onClick={handleCloseForm}
                        style={{
                          padding: '10px 16px',
                          backgroundColor: '#f1f1f1',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        Back
                      </button>
                      
                      <button 
                        type="submit" 
                        style={{
                          padding: '10px 24px',
                          backgroundColor: '#2563EB',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: '500'
                        }}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </form>
                
                <div style={{ 
                  marginTop: '24px', 
                  borderTop: '1px solid #E5E7EB',
                  paddingTop: '16px',
                  fontSize: '12px',
                  color: '#6B7280',
                  textAlign: 'center'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#2563EB' }}>ImmiHub</span>
                    <span>Scheduler</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Add the Meeting Popup */}
          {showMeetingPopup && selectedAppointment && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000
            }}>
              <div style={{
                width: '90%',
                maxWidth: '1000px',
                backgroundColor: '#1A1A1A',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '80vh'
              }}>
                {/* Meeting Header */}
                <div style={{
                  padding: '16px',
                  backgroundColor: '#2D2D2D',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: 'white',
                  borderBottom: '1px solid #3D3D3D'
                }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '18px' }}>Initial Consultation: {selectedAppointment.client}</h3>
                    <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#BBBBBB' }}>Meeting ID: 123 456 7890 • Green Card Consultation for Family Member</p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ cursor: 'pointer', backgroundColor: '#4CAF50', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>${selectedAppointment.price}</span>
                    <span style={{ cursor: 'pointer', backgroundColor: '#444', padding: '6px 12px', borderRadius: '4px', fontSize: '14px' }}>⏱️ 27:22</span>
                    <button 
                      onClick={handleCloseMeeting}
                      style={{ 
                        backgroundColor: '#EA4335', 
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '6px 12px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                      }}
                    >
                      Leave
                    </button>
                  </div>
                </div>
                
                {/* Meeting Content */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                  {/* Main Video */}
                  <div style={{ 
                    flex: 1, 
                    backgroundColor: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <div style={{ 
                      width: '100%', 
                      height: '100%', 
                      backgroundImage: 'url(https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center 20%',
                      backgroundColor: '#333'
                    }}>
                      <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '20px',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        fontSize: '14px'
                      }}>
                        {selectedAppointment.client}
                      </div>
                      <div style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        width: '180px',
                        height: '120px',
                        backgroundColor: '#333',
                        backgroundImage: 'url(https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)',
                        backgroundSize: '90%',
                        backgroundPosition: 'center 20%',
                        border: '2px solid #444',
                        borderRadius: '8px'
                      }}></div>
                    </div>
                  </div>
                  
                  {/* Controls */}
                  <div style={{
                    padding: '16px',
                    backgroundColor: '#2D2D2D',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '24px',
                    borderTop: '1px solid #3D3D3D'
                  }}>
                    <button style={{ 
                      backgroundColor: '#EA4335',
                      border: 'none',
                      color: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}>
                      <span style={{ fontSize: '24px' }}>🎤</span>
                      <span style={{ fontSize: '12px' }}>Muted</span>
                    </button>
                    
                    <button style={{ 
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '5px',
                      cursor: 'pointer'
                    }}>
                      <span style={{ fontSize: '24px' }}>📹</span>
                      <span style={{ fontSize: '12px' }}>Video</span>
                    </button>
                    
                    <button style={{ 
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '5px',
                      cursor: 'pointer'
                    }}>
                      <span style={{ fontSize: '24px' }}>🙋</span>
                      <span style={{ fontSize: '12px' }}>Raise Hand</span>
                    </button>
                    
                    <button style={{ 
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '5px',
                      cursor: 'pointer'
                    }}>
                      <span style={{ fontSize: '24px' }}>💬</span>
                      <span style={{ fontSize: '12px' }}>Chat</span>
                    </button>
                    
                    <button style={{ 
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '5px',
                      cursor: 'pointer'
                    }}>
                      <span style={{ fontSize: '24px' }}>📋</span>
                      <span style={{ fontSize: '12px' }}>Notes</span>
                    </button>
                    
                    <button style={{ 
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '5px',
                      cursor: 'pointer'
                    }}>
                      <span style={{ fontSize: '24px' }}>📁</span>
                      <span style={{ fontSize: '12px' }}>Documents</span>
                    </button>
                    
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginLeft: '20px',
                      padding: '0 12px',
                      borderLeft: '1px solid #444'
                    }}>
                      <div style={{ color: '#FF6B6B', fontSize: '14px', fontWeight: 'bold', marginBottom: '15px' }}>
                        Ends in 3 mins
                      </div>
                      <div style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        width: '100%'
                      }}>
                        <button style={{ 
                          cursor: 'pointer', 
                          backgroundColor: 'white', 
                          color: 'black', 
                          padding: '8px 12px', 
                          borderRadius: '6px',
                          fontSize: '13px',
                          border: 'none',
                          fontWeight: 'normal'
                        }}>
                          Extend 5 mins for
                        </button>
                        <div style={{ position: 'relative' }}>
                          <select 
                            style={{
                              appearance: 'none',
                              padding: '8px 30px 8px 12px',
                              backgroundColor: '#333',
                              color: 'white',
                              border: '1px solid #444',
                              borderRadius: '6px',
                              fontSize: '13px',
                              cursor: 'pointer',
                              backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'right 10px top 50%',
                              backgroundSize: '10px auto'
                            }}
                          >
                            <option value="paid">$15</option>
                            <option value="free">Free</option>
                          </select>
                        </div>
                      </div>
                    </div>
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