import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { useNavigate } from 'react-router-dom';
import ButtonPrimary from '../components/ButtonPrimary';
import banner1 from '../assets/images/banner-1.jpg';
import banner2 from '../assets/images/banner-2.jpg';
import banner3 from '../assets/images/banner-3.jpg';

export default function Home() {
  const navigate = useNavigate();

  const bannerData = [
    {
      id: 1,
      image: banner1,
      title: 'Portal Institucional TECPORT',
      subtitle: 'Innovación, Seguridad y Excelencia en Operaciones Portuarias'
    },
    {
      id: 2,
      image: banner2,
      title: 'Equipos de Alta Tecnología',
      subtitle: 'Mantenimiento Predictivo y Certificación Internacional'
    },
    {
      id: 3,
      image: banner3,
      title: 'Equipo Profesional',
      subtitle: 'Comprometidos con la Excelencia y la Seguridad'
    }
  ];

  const bannerTemplate = (item) => {
    return (
      <div className="hero-carousel" style={{ position: 'relative' }}>
        <img src={item.image} alt={item.title} className="hero-image" />
        <div className="hero-overlay">
          <div>
            <h1 className="hero-title">{item.title}</h1>
            <p className="hero-subtitle">{item.subtitle}</p>
            <div className="flex gap-3 justify-content-center">
              <ButtonPrimary 
                label="Ver Organigrama" 
                icon="pi pi-sitemap"
                onClick={() => navigate('/organigrama')}
              />
              <ButtonPrimary 
                label="Equipos 3D" 
                icon="pi pi-box"
                onClick={() => navigate('/equipos3d')}
                outlined
                style={{ 
                  backgroundColor: 'transparent',
                  borderColor: '#ffffff',
                  color: '#ffffff'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Carousel 
        value={bannerData} 
        itemTemplate={bannerTemplate}
        numVisible={1}
        numScroll={1}
        autoplayInterval={5000}
        circular
        showIndicators
        showNavigators
      />

      {/* Quick Access Section */}
      <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-3" style={{ color: '#003558' }}>Acceso Rápido</h2>
          <p className="text-xl" style={{ color: '#676867' }}>Explore nuestras secciones principales</p>
        </div>

        <div className="grid">
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-card shadow-2 p-4 border-round text-center cursor-pointer hover:shadow-4 transition-all transition-duration-300"
                 onClick={() => navigate('/organigrama')}>
              <div className="text-6xl mb-3" style={{ color: '#003558' }}>
                <i className="pi pi-sitemap"></i>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#003558' }}>Organigrama</h3>
              <p style={{ color: '#676867' }}>Conozca nuestra estructura organizacional</p>
            </div>
          </div>

          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-card shadow-2 p-4 border-round text-center cursor-pointer hover:shadow-4 transition-all transition-duration-300"
                 onClick={() => navigate('/cultura')}>
              <div className="text-6xl mb-3" style={{ color: '#ce5d2a' }}>
                <i className="pi pi-building"></i>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#003558' }}>Cultura TECPORT</h3>
              <p style={{ color: '#676867' }}>Nuestra misión, visión y valores</p>
            </div>
          </div>

          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-card shadow-2 p-4 border-round text-center cursor-pointer hover:shadow-4 transition-all transition-duration-300"
                 onClick={() => navigate('/procesos')}>
              <div className="text-6xl mb-3" style={{ color: '#df9b1b' }}>
                <i className="pi pi-cog"></i>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#003558' }}>Procesos</h3>
              <p style={{ color: '#676867' }}>Conoce nuestros procesos internos</p>
            </div>
          </div>

          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-card shadow-2 p-4 border-round text-center cursor-pointer hover:shadow-4 transition-all transition-duration-300"
                 onClick={() => navigate('/equipos3d')}>
              <div className="text-6xl mb-3" style={{ color: '#003558' }}>
                <i className="pi pi-box"></i>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#003558' }}>Equipos 3D</h3>
              <p style={{ color: '#676867' }}>Visualiza nuestros equipos en 3D</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
