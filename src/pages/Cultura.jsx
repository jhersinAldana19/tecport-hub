import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import ButtonPrimary from '../components/ButtonPrimary';

export default function Cultura() {
  const [selectedCulture, setSelectedCulture] = useState(null);
  const [visible, setVisible] = useState(false);

  const cultureData = [
    {
      id: 1,
      icon: 'pi pi-flag',
      title: 'Misión',
      color: '#003558',
      summary: 'Proveer soluciones portuarias de excelencia con los más altos estándares de calidad y seguridad.',
      fullContent: 'Nuestra misión es proveer soluciones integrales de equipamiento y servicios portuarios de clase mundial, garantizando la excelencia operativa, la seguridad de nuestros colaboradores y la satisfacción de nuestros clientes. Nos comprometemos a ser líderes en innovación tecnológica y sostenibilidad ambiental en el sector portuario latinoamericano.'
    },
    {
      id: 2,
      icon: 'pi pi-eye',
      title: 'Visión',
      color: '#ce5d2a',
      summary: 'Ser la empresa líder en soluciones portuarias en América Latina para 2030.',
      fullContent: 'Aspiramos a ser reconocidos como la empresa líder en soluciones de equipamiento y servicios portuarios en América Latina para el año 2030, destacándonos por nuestra innovación tecnológica, compromiso con la sostenibilidad y excelencia en el servicio al cliente. Queremos ser el socio preferido de los principales puertos de la región.'
    },
    {
      id: 3,
      icon: 'pi pi-heart',
      title: 'Valores',
      color: '#df9b1b',
      summary: 'Integridad, Excelencia, Innovación, Seguridad y Trabajo en Equipo.',
      fullContent: `Nuestros valores fundamentales son:

• INTEGRIDAD: Actuamos con honestidad y transparencia en todas nuestras operaciones.
• EXCELENCIA: Buscamos la mejora continua y la calidad superior en todo lo que hacemos.
• INNOVACIÓN: Adoptamos nuevas tecnologías y metodologías para estar a la vanguardia.
• SEGURIDAD: La seguridad de nuestro personal y operaciones es nuestra máxima prioridad.
• TRABAJO EN EQUIPO: Colaboramos y nos apoyamos mutuamente para alcanzar objetivos comunes.
• COMPROMISO AMBIENTAL: Protegemos el medio ambiente en todas nuestras actividades.`
    },
    {
      id: 4,
      icon: 'pi pi-globe',
      title: 'Compromiso Ambiental',
      color: '#003558',
      summary: 'Reducción de huella de carbono y operaciones sostenibles en todos nuestros procesos.',
      fullContent: 'En TECPORT estamos comprometidos con la protección del medio ambiente. Implementamos prácticas sostenibles en todas nuestras operaciones, incluyendo la reducción de emisiones de carbono, uso eficiente de recursos, reciclaje de materiales y mantenimiento preventivo que reduce el desperdicio. Nuestro objetivo es lograr operaciones carbono-neutrales para 2035.'
    },
    {
      id: 5,
      icon: 'pi pi-bolt',
      title: 'Innovación',
      color: '#ce5d2a',
      summary: 'Incorporación de tecnología de punta y mantenimiento predictivo con IA.',
      fullContent: 'La innovación es parte de nuestro ADN. Invertimos constantemente en investigación y desarrollo para incorporar las últimas tecnologías en nuestros equipos y procesos. Utilizamos inteligencia artificial para mantenimiento predictivo, IoT para monitoreo en tiempo real, y realidad aumentada para capacitación de operadores. Nuestro laboratorio de innovación trabaja continuamente en soluciones que mejoren la eficiencia y seguridad portuaria.'
    },
    {
      id: 6,
      icon: 'pi pi-shield',
      title: 'Seguridad Portuaria',
      color: '#df9b1b',
      summary: 'Protocolos estrictos y certificaciones internacionales en seguridad operativa.',
      fullContent: 'La seguridad es nuestro valor fundamental. Cumplimos con todas las certificaciones internacionales de seguridad portuaria (ISPS Code, ISO 45001). Implementamos protocolos estrictos de inspección y mantenimiento, capacitación continua del personal, y sistemas de monitoreo 24/7. Nuestra tasa de incidentes es un 95% inferior al promedio de la industria.'
    }
  ];

  const handleCardClick = (item) => {
    setSelectedCulture(item);
    setVisible(true);
  };

  const cardHeader = (item) => (
    <div className="flex align-items-center justify-content-center" style={{ padding: '2rem', background: '#f8f9fa' }}>
      <i className={item.icon} style={{ fontSize: '4rem', color: item.color }}></i>
    </div>
  );

  const cardFooter = (item) => (
    <div className="flex justify-content-center">
      <ButtonPrimary 
        label="Ver más" 
        icon="pi pi-arrow-right"
        onClick={() => handleCardClick(item)}
      />
    </div>
  );

  return (
    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold mb-3" style={{ color: '#003558' }}>Cultura TECPORT</h1>
        <p className="text-xl" style={{ color: '#676867' }}>
          Conoce nuestros principios, valores y compromiso con la excelencia
        </p>
      </div>

      <div className="grid">
        {cultureData.map((item) => (
          <div key={item.id} className="col-12 md:col-6 lg:col-4">
            <div className="tecport-card">
              <Card 
                title={item.title}
                subTitle={item.summary}
                header={() => cardHeader(item)}
                footer={() => cardFooter(item)}
                className="cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dialog for full content */}
      <Dialog 
        header={selectedCulture?.title}
        visible={visible} 
        style={{ width: '50vw' }} 
        onHide={() => setVisible(false)}
        breakpoints={{ '960px': '75vw', '641px': '100vw' }}
      >
        {selectedCulture && (
          <div>
            <div className="flex justify-content-center mb-4">
              <i className={selectedCulture.icon} style={{ fontSize: '5rem', color: selectedCulture.color }}></i>
            </div>
            <p style={{ color: '#676867', whiteSpace: 'pre-line', lineHeight: '1.8', fontSize: '1.1rem' }}>
              {selectedCulture.fullContent}
            </p>
          </div>
        )}
      </Dialog>
    </div>
  );
}
