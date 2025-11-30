import React from 'react';
import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="tecport-footer">
      <div className="grid">
        <div className="col-12 md:col-4">
          <img src={logo} alt="TECPORT Logo" style={{ height: '50px', marginBottom: '1rem' }} />
          <p>Portal Institucional TECPORT</p>
          <p>Innovación y Seguridad Portuaria</p>
        </div>
        
        <div className="col-12 md:col-4">
          <h4>Enlaces Rápidos</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/">Inicio</a></li>
            <li><a href="/organigrama">Organigrama</a></li>
            <li><a href="/cultura">Cultura TECPORT</a></li>
            <li><a href="/procesos">Procesos</a></li>
          </ul>
        </div>
        
        <div className="col-12 md:col-4">
          <h4>Contacto</h4>
          <p><i className="pi pi-envelope mr-2"></i> contacto@tecport.com</p>
          <p><i className="pi pi-phone mr-2"></i> +1 234 567 890</p>
          <p><i className="pi pi-map-marker mr-2"></i> Puerto Principal</p>
        </div>
      </div>
      
      <div className="text-center mt-4 pt-3" style={{ borderTop: '1px solid #cfd1d2' }}>
        <p>&copy; {new Date().getFullYear()} TECPORT. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
