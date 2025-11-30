import React, { useState, useRef } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';
import { Message } from 'primereact/message';
import ButtonPrimary from '../components/ButtonPrimary';

export default function Contacto() {
  const toast = useRef(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    departamento: null,
    responsable: null,
    fecha: null,
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});

  const departamentos = [
    { label: 'Dirección General', value: 'direccion' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Tecnología', value: 'tecnologia' },
    { label: 'Finanzas', value: 'finanzas' },
    { label: 'Recursos Humanos', value: 'rrhh' },
    { label: 'Operaciones', value: 'operaciones' }
  ];

  const responsables = {
    direccion: [
      { label: 'María González - CEO', value: 'maria.gonzalez@tecport.com' }
    ],
    marketing: [
      { label: 'Ana Rodríguez - CMO', value: 'ana.rodriguez@tecport.com' }
    ],
    tecnologia: [
      { label: 'Carlos Mendoza - CTO', value: 'carlos.mendoza@tecport.com' }
    ],
    finanzas: [
      { label: 'Juan Pérez - CFO', value: 'juan.perez@tecport.com' }
    ],
    rrhh: [
      { label: 'Laura Martínez - HR Manager', value: 'laura.martinez@tecport.com' }
    ],
    operaciones: [
      { label: 'Roberto Silva - Operations Manager', value: 'roberto.silva@tecport.com' }
    ]
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.departamento) {
      newErrors.departamento = 'Seleccione un departamento';
    }

    if (!formData.responsable) {
      newErrors.responsable = 'Seleccione un responsable';
    }

    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es requerido';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.current.show({
        severity: 'success',
        summary: 'Mensaje Enviado',
        detail: `Tu mensaje ha sido enviado a ${formData.responsable}`,
        life: 5000
      });

      // Reset form
      setFormData({
        nombre: '',
        email: '',
        departamento: null,
        responsable: null,
        fecha: null,
        asunto: '',
        mensaje: ''
      });
      setErrors({});
    } else {
      toast.current.show({
        severity: 'error',
        summary: 'Error de Validación',
        detail: 'Por favor completa todos los campos requeridos',
        life: 3000
      });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }

    // Reset responsable when department changes
    if (field === 'departamento') {
      setFormData(prev => ({
        ...prev,
        responsable: null
      }));
    }
  };

  return (
    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
      <Toast ref={toast} />

      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold mb-3" style={{ color: '#003558' }}>Contacto Interno</h1>
        <p className="text-xl" style={{ color: '#676867' }}>
          Comunícate con los diferentes departamentos de TECPORT
        </p>
      </div>

      <div className="grid">
        <div className="col-12 lg:col-8">
          <Card title="Formulario de Contacto Interno">
            <form onSubmit={handleSubmit}>
              <div className="grid">
                {/* Nombre */}
                <div className="col-12 md:col-6">
                  <div className="field">
                    <label htmlFor="nombre" className="font-bold" style={{ color: '#003558' }}>
                      Nombre Completo *
                    </label>
                    <InputText
                      id="nombre"
                      value={formData.nombre}
                      onChange={(e) => handleInputChange('nombre', e.target.value)}
                      className={`w-full ${errors.nombre ? 'p-invalid' : ''}`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.nombre && <small className="p-error">{errors.nombre}</small>}
                  </div>
                </div>

                {/* Email */}
                <div className="col-12 md:col-6">
                  <div className="field">
                    <label htmlFor="email" className="font-bold" style={{ color: '#003558' }}>
                      Email Corporativo *
                    </label>
                    <InputText
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full ${errors.email ? 'p-invalid' : ''}`}
                      placeholder="tu.email@tecport.com"
                    />
                    {errors.email && <small className="p-error">{errors.email}</small>}
                  </div>
                </div>

                {/* Departamento */}
                <div className="col-12 md:col-6">
                  <div className="field">
                    <label htmlFor="departamento" className="font-bold" style={{ color: '#003558' }}>
                      Departamento *
                    </label>
                    <Dropdown
                      id="departamento"
                      value={formData.departamento}
                      options={departamentos}
                      onChange={(e) => handleInputChange('departamento', e.value)}
                      placeholder="Selecciona un departamento"
                      className={`w-full ${errors.departamento ? 'p-invalid' : ''}`}
                    />
                    {errors.departamento && <small className="p-error">{errors.departamento}</small>}
                  </div>
                </div>

                {/* Responsable */}
                <div className="col-12 md:col-6">
                  <div className="field">
                    <label htmlFor="responsable" className="font-bold" style={{ color: '#003558' }}>
                      Responsable *
                    </label>
                    <Dropdown
                      id="responsable"
                      value={formData.responsable}
                      options={formData.departamento ? responsables[formData.departamento] : []}
                      onChange={(e) => handleInputChange('responsable', e.value)}
                      placeholder="Selecciona un responsable"
                      className={`w-full ${errors.responsable ? 'p-invalid' : ''}`}
                      disabled={!formData.departamento}
                    />
                    {errors.responsable && <small className="p-error">{errors.responsable}</small>}
                  </div>
                </div>

                {/* Fecha (opcional) */}
                <div className="col-12 md:col-6">
                  <div className="field">
                    <label htmlFor="fecha" className="font-bold" style={{ color: '#003558' }}>
                      Fecha de Reunión (opcional)
                    </label>
                    <Calendar
                      id="fecha"
                      value={formData.fecha}
                      onChange={(e) => handleInputChange('fecha', e.value)}
                      showIcon
                      className="w-full"
                      placeholder="Selecciona una fecha"
                      minDate={new Date()}
                    />
                  </div>
                </div>

                {/* Asunto */}
                <div className="col-12 md:col-6">
                  <div className="field">
                    <label htmlFor="asunto" className="font-bold" style={{ color: '#003558' }}>
                      Asunto *
                    </label>
                    <InputText
                      id="asunto"
                      value={formData.asunto}
                      onChange={(e) => handleInputChange('asunto', e.target.value)}
                      className={`w-full ${errors.asunto ? 'p-invalid' : ''}`}
                      placeholder="Asunto del mensaje"
                    />
                    {errors.asunto && <small className="p-error">{errors.asunto}</small>}
                  </div>
                </div>

                {/* Mensaje */}
                <div className="col-12">
                  <div className="field">
                    <label htmlFor="mensaje" className="font-bold" style={{ color: '#003558' }}>
                      Mensaje *
                    </label>
                    <InputTextarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => handleInputChange('mensaje', e.target.value)}
                      rows={6}
                      className={`w-full ${errors.mensaje ? 'p-invalid' : ''}`}
                      placeholder="Escribe tu mensaje aquí..."
                    />
                    {errors.mensaje && <small className="p-error">{errors.mensaje}</small>}
                  </div>
                </div>

                {/* Submit */}
                <div className="col-12">
                  <ButtonPrimary
                    label="Enviar Mensaje"
                    icon="pi pi-send"
                    type="submit"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            </form>
          </Card>
        </div>

        <div className="col-12 lg:col-4">
          <Card title="Información de Contacto">
            <Message 
              severity="info" 
              text="Los mensajes serán enviados directamente al responsable seleccionado y recibirás una respuesta en un plazo de 24-48 horas."
            />

            <div className="mt-4">
              <h4 style={{ color: '#003558' }}>Departamentos Disponibles</h4>
              <ul style={{ color: '#676867', lineHeight: '2' }}>
                <li><i className="pi pi-building mr-2"></i>Dirección General</li>
                <li><i className="pi pi-megaphone mr-2"></i>Marketing</li>
                <li><i className="pi pi-desktop mr-2"></i>Tecnología</li>
                <li><i className="pi pi-dollar mr-2"></i>Finanzas</li>
                <li><i className="pi pi-users mr-2"></i>Recursos Humanos</li>
                <li><i className="pi pi-cog mr-2"></i>Operaciones</li>
              </ul>
            </div>

            <div className="mt-4 p-3" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ color: '#003558' }}>Contacto Directo</h4>
              <p style={{ color: '#676867' }}>
                <i className="pi pi-phone mr-2"></i>
                Interno: 1000<br/>
                <i className="pi pi-envelope mr-2"></i>
                contacto@tecport.com
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
