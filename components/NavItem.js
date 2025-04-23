import React from 'react';

/**
 * NavItem Component - Unified navigation item that can be used as either a link or a button
 * 
 * @param {Object} props - Component props
 * @param {string} [props.href] - Optional URL for navigation (when used as a link)
 * @param {React.ReactNode} props.icon - Icon element to display
 * @param {string} props.text - Text to display
 * @param {boolean} props.active - Whether this item is active/selected
 * @param {boolean} props.collapsed - Whether the parent navigation is collapsed
 * @param {Function} [props.onClick] - Optional click handler (when used as a button)
 * @returns {JSX.Element} - Rendered component
 */
export default function NavItem({ href, icon, text, active, collapsed, onClick }) {
  // Common styles used for both link and button variations
  const commonStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: active ? '#EBF5FF' : 'transparent',
    color: active ? '#2563EB' : '#4B5563',
    cursor: onClick || href ? 'pointer' : 'default',
    transition: 'all 0.2s ease',
    margin: '4px 0',
    textDecoration: 'none',
    outline: 'none'
  };

  // Icon styles with adjustments for collapsed state
  const iconStyles = {
    fontSize: collapsed ? '18px' : '16px',
    marginRight: collapsed ? '0' : '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // If href is provided, render as a link
  if (href) {
    return (
      <a 
        href={href}
        style={commonStyles}
        onClick={onClick}
        role="menuitem"
        aria-current={active ? 'page' : undefined}
      >
        <span style={iconStyles}>{icon}</span>
        {!collapsed && <span>{text}</span>}
      </a>
    );
  }

  // Otherwise render as a button (div with onClick)
  return (
    <div 
      style={commonStyles}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-pressed={active}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick && onClick(e);
        }
      }}
    >
      <span style={iconStyles}>{icon}</span>
      {!collapsed && <span>{text}</span>}
    </div>
  );
} 