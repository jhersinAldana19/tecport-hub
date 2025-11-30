import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { Dialog } from 'primereact/dialog';
import { Avatar } from 'primereact/avatar';
import { confirmDialog, ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import ButtonPrimary from '../components/ButtonPrimary';

export default function Organigrama() {
  const [selection, setSelection] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [visible, setVisible] = useState(false);
  const toast = React.useRef(null);

  const [data] = useState([
    {
      expanded: true,
      type: 'person',
      data: {
        image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        name: 'María González',
        title: 'CEO',
        email: 'maria.gonzalez@tecport.com',
        team: 'Dirección General',
        description: 'Lidera la estrategia corporativa de TECPORT con más de 20 años de experiencia en el sector portuario.'
      },
      children: [
        {
          expanded: true,
          type: 'person',
          data: {
            image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
            name: 'Ana Rodríguez',
            title: 'CMO',
            email: 'ana.rodriguez@tecport.com',
            team: 'Marketing',
            description: 'Gestiona la estrategia de marketing y comunicación corporativa.'
          },
          children: [
            { 
              label: 'Marketing Digital',
              type: 'department'
            },
            { 
              label: 'Comunicación Corporativa',
              type: 'department'
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          data: {
            image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
            name: 'Carlos Mendoza',
            title: 'CTO',
            email: 'carlos.mendoza@tecport.com',
            team: 'Tecnología',
            description: 'Responsable de la innovación tecnológica y mantenimiento de equipos portuarios.'
          },
          children: [
            { 
              label: 'Desarrollo',
              type: 'department'
            },
            { 
              label: 'Mantenimiento',
              type: 'department'
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          data: {
            image: 'https://primefaces.org/cdn/primereact/images/avatar/ivanmagalhaes.png',
            name: 'Juan Pérez',
            title: 'CFO',
            email: 'juan.perez@tecport.com',
            team: 'Finanzas',
            description: 'Supervisa las operaciones financieras y estrategia económica de la empresa.'
          },
          children: [
            { 
              label: 'Contabilidad',
              type: 'department'
            },
            { 
              label: 'Tesorería',
              type: 'department'
            }
          ]
        }
      ]
    }
  ]);

  const nodeTemplate = (node) => {
    if (node.type === 'person') {
      return (
        <div className="flex flex-column" onClick={() => handleNodeClick(node)}>
          <div className="flex flex-column align-items-center">
            <Avatar 
              image={node.data.image} 
              size="large" 
              shape="circle"
              className="mb-3"
            />
            <span className="font-bold mb-2" style={{ color: '#003558' }}>{node.data.name}</span>
            <span style={{ color: '#ce5d2a', fontWeight: '600' }}>{node.data.title}</span>
          </div>
        </div>
      );
    }
    
    return (
      <div style={{ 
        padding: '0.75rem 1.5rem', 
        background: '#cfd1d2', 
        color: '#003558',
        borderRadius: '8px',
        fontWeight: '600'
      }}>
        {node.label}
      </div>
    );
  };

  const handleNodeClick = (node) => {
    if (node.type === 'person') {
      setSelectedNode(node.data);
      setVisible(true);
    }
  };

  const handleDelete = () => {
    confirmDialog({
      message: '¿Está seguro de que desea eliminar este nodo?',
      header: 'Confirmar Eliminación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        toast.current.show({ severity: 'success', summary: 'Eliminado', detail: 'Nodo eliminado correctamente', life: 3000 });
        setVisible(false);
      },
      reject: () => {
        toast.current.show({ severity: 'info', summary: 'Cancelado', detail: 'Operación cancelada', life: 3000 });
      }
    });
  };

  const handleEdit = () => {
    toast.current.show({ severity: 'info', summary: 'Editar', detail: 'Función de edición en desarrollo', life: 3000 });
  };

  return (
    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
      <Toast ref={toast} />
      <ConfirmDialog />
      
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold mb-3" style={{ color: '#003558' }}>Organigrama TECPORT</h1>
        <p className="text-xl" style={{ color: '#676867' }}>
          Estructura organizacional del equipo. Haga clic en cualquier miembro para ver más detalles.
        </p>
      </div>

      <div className="tecport-orgchart card overflow-x-auto">
        <OrganizationChart 
          value={data}
          selectionMode="multiple"
          selection={selection}
          onSelectionChange={(e) => setSelection(e.data)}
          nodeTemplate={nodeTemplate}
        />
      </div>

      {/* Dialog for node details */}
      <Dialog 
        header="Detalles del Miembro" 
        visible={visible} 
        style={{ width: '50vw' }} 
        onHide={() => setVisible(false)}
        breakpoints={{ '960px': '75vw', '641px': '100vw' }}
      >
        {selectedNode && (
          <div>
            <div className="flex flex-column align-items-center mb-4">
              <Avatar 
                image={selectedNode.image} 
                size="xlarge" 
                shape="circle"
                className="mb-3"
              />
              <h2 className="mb-2" style={{ color: '#003558' }}>{selectedNode.name}</h2>
              <span className="text-xl font-bold mb-2" style={{ color: '#ce5d2a' }}>{selectedNode.title}</span>
            </div>

            <div className="mb-3">
              <strong style={{ color: '#003558' }}>Correo:</strong>
              <p style={{ color: '#676867' }}>
                <i className="pi pi-envelope mr-2"></i>
                {selectedNode.email}
              </p>
            </div>

            <div className="mb-3">
              <strong style={{ color: '#003558' }}>Equipo:</strong>
              <p style={{ color: '#676867' }}>
                <i className="pi pi-users mr-2"></i>
                {selectedNode.team}
              </p>
            </div>

            <div className="mb-4">
              <strong style={{ color: '#003558' }}>Descripción:</strong>
              <p style={{ color: '#676867' }}>{selectedNode.description}</p>
            </div>

            <div className="flex gap-2 justify-content-end">
              <ButtonPrimary 
                label="Editar"
                icon="pi pi-pencil"
                onClick={handleEdit}
                outlined
              />
              <ButtonPrimary 
                label="Eliminar"
                icon="pi pi-trash"
                onClick={handleDelete}
                severity="danger"
                style={{ backgroundColor: '#ce5d2a', borderColor: '#ce5d2a' }}
              />
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
}
