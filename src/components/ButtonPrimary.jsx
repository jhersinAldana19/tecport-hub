import React from 'react';
import { Button } from 'primereact/button';

/**
 * TECPORT Primary Button Component
 * Base button component used throughout the portal
 * Styled according to TECPORT brand guidelines
 */
export default function ButtonPrimary({ 
  label = "Submit", 
  icon, 
  onClick, 
  loading = false,
  disabled = false,
  severity = "primary",
  outlined = false,
  className = "",
  ...props 
}) {
  return (
    <div className={`card flex justify-content-center ${className}`}>
      <Button 
        label={label}
        icon={icon}
        onClick={onClick}
        loading={loading}
        disabled={disabled}
        severity={severity}
        outlined={outlined}
        style={{
          backgroundColor: outlined ? 'transparent' : '#003558',
          borderColor: '#003558',
          color: outlined ? '#003558' : '#ffffff',
          fontWeight: '600',
          padding: '0.75rem 1.5rem',
          transition: 'all 0.3s ease'
        }}
        {...props}
      />
    </div>
  );
}
