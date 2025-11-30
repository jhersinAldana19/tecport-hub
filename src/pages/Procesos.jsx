import React, { useState, useRef } from 'react';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Messages } from 'primereact/messages';
import { Accordion, AccordionTab } from 'primereact/accordion';
import ButtonPrimary from '../components/ButtonPrimary';

export default function Procesos() {
  const stepperRef = useRef(null);
  const msgs = useRef(null);

  const processData = [
    {
      id: 1,
      title: 'Ingreso de Equipos',
      icon: 'pi pi-sign-in',
      description: 'Proceso de recepción e inspección inicial de equipos portuarios',
      steps: [
        {
          label: 'Solicitud',
          description: 'El cliente envía la solicitud con especificaciones del equipo'
        },
        {
          label: 'Inspección',
          description: 'Nuestro equipo técnico realiza una inspección preliminar'
        },
        {
          label: 'Documentación',
          description: 'Se completa toda la documentación y certificaciones necesarias'
        },
        {
          label: 'Aprobación',
          description: 'Aprobación final y registro en el sistema'
        }
      ]
    },
    {
      id: 2,
      title: 'Mantenimiento Predictivo',
      icon: 'pi pi-wrench',
      description: 'Sistema de mantenimiento basado en IA y análisis de datos',
      steps: [
        {
          label: 'Monitoreo',
          description: 'Sensores IoT monitorean el estado del equipo en tiempo real'
        },
        {
          label: 'Análisis',
          description: 'IA analiza patrones y predice necesidades de mantenimiento'
        },
        {
          label: 'Planificación',
          description: 'Se programa el mantenimiento preventivo optimizado'
        },
        {
          label: 'Ejecución',
          description: 'Equipo técnico realiza el mantenimiento planificado'
        }
      ]
    },
    {
      id: 3,
      title: 'Alquiler de Equipos',
      icon: 'pi pi-calendar',
      description: 'Proceso de alquiler temporal de maquinaria portuaria',
      steps: [
        {
          label: 'Cotización',
          description: 'Evaluación de necesidades y envío de cotización personalizada'
        },
        {
          label: 'Contrato',
          description: 'Firma de contrato y condiciones de alquiler'
        },
        {
          label: 'Entrega',
          description: 'Entrega del equipo con capacitación de operadores'
        },
        {
          label: 'Soporte',
          description: 'Soporte técnico continuo durante el período de alquiler'
        }
      ]
    },
    {
      id: 4,
      title: 'Venta y Certificación',
      icon: 'pi pi-dollar',
      description: 'Venta de equipos con certificación internacional',
      steps: [
        {
          label: 'Consulta',
          description: 'Asesoría técnica y selección del equipo adecuado'
        },
        {
          label: 'Negociación',
          description: 'Propuesta comercial y negociación de términos'
        },
        {
          label: 'Certificación',
          description: 'Obtención de certificaciones internacionales requeridas'
        },
        {
          label: 'Entrega',
          description: 'Entrega, instalación y puesta en marcha'
        }
      ]
    },
    {
      id: 5,
      title: 'Seguridad en el Puerto',
      icon: 'pi pi-shield',
      description: 'Protocolos de seguridad operativa y cumplimiento normativo',
      steps: [
        {
          label: 'Evaluación',
          description: 'Análisis de riesgos y evaluación de seguridad'
        },
        {
          label: 'Implementación',
          description: 'Implementación de protocolos y sistemas de seguridad'
        },
        {
          label: 'Capacitación',
          description: 'Capacitación del personal en procedimientos de seguridad'
        },
        {
          label: 'Auditoría',
          description: 'Auditorías periódicas y mejora continua'
        }
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const showMessage = (severity, summary, detail) => {
    msgs.current.show({ severity, summary, detail, life: 3000 });
  };

  const renderProcessStepper = (process) => {
    return (
      <div className="tecport-stepper mb-5">
        <Stepper ref={stepperRef} linear>
          {process.steps.map((step, index) => (
            <StepperPanel key={index} header={step.label}>
              <div className="flex flex-column h-12rem">
                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium p-4">
                  <div className="text-center">
                    <h3 style={{ color: '#003558' }}>{step.label}</h3>
                    <p style={{ color: '#676867', fontSize: '1.1rem' }}>{step.description}</p>
                  </div>
                </div>
              </div>
              <div className="flex pt-4 justify-content-between">
                <ButtonPrimary 
                  label="Anterior" 
                  severity="secondary" 
                  icon="pi pi-arrow-left" 
                  onClick={() => {
                    stepperRef.current.prevCallback();
                    showMessage('info', 'Paso anterior', `Volviendo a: ${process.steps[index - 1]?.label}`);
                  }}
                  disabled={index === 0}
                />
                <ButtonPrimary 
                  label={index === process.steps.length - 1 ? "Finalizar" : "Siguiente"}
                  icon="pi pi-arrow-right" 
                  iconPos="right"
                  onClick={() => {
                    if (index === process.steps.length - 1) {
                      showMessage('success', 'Proceso completado', `${process.title} finalizado correctamente`);
                    } else {
                      stepperRef.current.nextCallback();
                      showMessage('info', 'Siguiente paso', `Avanzando a: ${process.steps[index + 1]?.label}`);
                    }
                  }}
                />
              </div>
            </StepperPanel>
          ))}
        </Stepper>
      </div>
    );
  };

  return (
    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
      <Messages ref={msgs} />
      
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold mb-3" style={{ color: '#003558' }}>Procesos Internos TECPORT</h1>
        <p className="text-xl" style={{ color: '#676867' }}>
          Conoce nuestros procesos operativos paso a paso
        </p>
      </div>

      <Accordion activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
        {processData.map((process) => (
          <AccordionTab 
            key={process.id}
            header={
              <div className="flex align-items-center">
                <i className={`${process.icon} mr-3`} style={{ fontSize: '1.5rem', color: '#003558' }}></i>
                <span className="font-bold" style={{ color: '#003558' }}>{process.title}</span>
              </div>
            }
          >
            <p className="mb-4" style={{ color: '#676867', fontSize: '1.1rem' }}>{process.description}</p>
            {renderProcessStepper(process)}
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );
}
