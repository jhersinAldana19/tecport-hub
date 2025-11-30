import React, { useRef } from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      command: () => navigate('/'),
      className: location.pathname === '/' ? 'active-link' : ''
    },
    {
      label: 'Organigrama',
      icon: 'pi pi-sitemap',
      command: () => navigate('/organigrama'),
      className: location.pathname === '/organigrama' ? 'active-link' : ''
    },
    {
      label: 'Cultura TECPORT',
      icon: 'pi pi-building',
      command: () => navigate('/cultura'),
      className: location.pathname === '/cultura' ? 'active-link' : ''
    },
    {
      label: 'Procesos',
      icon: 'pi pi-cog',
      command: () => navigate('/procesos'),
      className: location.pathname === '/procesos' ? 'active-link' : ''
    },
    {
      label: 'Equipos 3D',
      icon: 'pi pi-box',
      command: () => navigate('/equipos3d'),
      className: location.pathname === '/equipos3d' ? 'active-link' : ''
    },
    {
      label: 'Contacto Interno',
      icon: 'pi pi-envelope',
      command: () => navigate('/contacto'),
      className: location.pathname === '/contacto' ? 'active-link' : ''
    }
  ];

  const start = (
    <img 
      src={logo} 
      alt="TECPORT Logo" 
      className="navbar-logo cursor-pointer" 
      onClick={() => navigate('/')}
    />
  );

  return (
    <div className="tecport-navbar">
      <Menubar model={menuItems} start={start} />
    </div>
  );
}
