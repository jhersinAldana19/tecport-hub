import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Card } from 'primereact/card';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';
import ButtonPrimary from '../components/ButtonPrimary';

// Simple 3D Reach Stacker representation (placeholder since we don't have the actual .gltf file)
function ReachStackerModel({ rotation }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current && rotation) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Base/Chassis */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[3, 0.5, 2]} />
        <meshStandardMaterial color="#ce5d2a" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Cabin */}
      <mesh position={[0.8, 1.5, 0]}>
        <boxGeometry args={[1.2, 1, 1.5]} />
        <meshStandardMaterial color="#003558" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Boom */}
      <mesh position={[-1, 2, 0]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[2, 0.3, 0.4]} />
        <meshStandardMaterial color="#df9b1b" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Wheels */}
      <mesh position={[1, 0.3, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[1, 0.3, -0.8]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[-1, 0.3, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[-1, 0.3, -0.8]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Spreader */}
      <mesh position={[-2.5, 3, 0]}>
        <boxGeometry args={[0.6, 0.3, 1.8]} />
        <meshStandardMaterial color="#676867" metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Scene({ autoRotate, lights }) {
  const controlsRef = useRef();

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <>
      <PerspectiveCamera makeDefault position={[8, 5, 8]} />
      <OrbitControls 
        ref={controlsRef}
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        autoRotate={autoRotate}
        autoRotateSpeed={2}
      />
      
      {lights && (
        <>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <pointLight position={[-10, 10, -10]} intensity={0.5} />
        </>
      )}
      
      <ReachStackerModel rotation={false} />
      
      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#cfd1d2" />
      </mesh>
      
      <Environment preset="sunset" />
    </>
  );
}

export default function Equipos3D() {
  const [autoRotate, setAutoRotate] = useState(false);
  const [lights, setLights] = useState(true);

  const techSpecs = [
    { label: 'Capacidad de Carga', value: '45 toneladas', icon: 'pi-box' },
    { label: 'Altura Máxima', value: '16 metros', icon: 'pi-arrow-up' },
    { label: 'Peso del Equipo', value: '72 toneladas', icon: 'pi-calculator' },
    { label: 'Año de Fabricación', value: '2023', icon: 'pi-calendar' },
    { label: 'Motor', value: 'Diesel 450 HP', icon: 'pi-cog' },
    { label: 'Uso Principal', value: 'Manipulación de contenedores', icon: 'pi-briefcase' }
  ];

  return (
    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold mb-3" style={{ color: '#003558' }}>Equipos 3D</h1>
        <p className="text-xl" style={{ color: '#676867' }}>
          Visualiza nuestros equipos portuarios en 3D interactivo
        </p>
      </div>

      <Message 
        severity="info" 
        text="NOTA: Para reemplazar con tu modelo 3D real, coloca tu archivo .gltf en /src/assets/models/reach-stacker.gltf y actualiza el componente para cargarlo con useGLTF de @react-three/drei"
        className="mb-4"
      />

      <div className="grid">
        <div className="col-12 lg:col-8">
          <Card title="Reach Stacker CVS Ferrari - Modelo 3D Interactivo">
            <div style={{ height: '600px', background: '#f8f9fa', borderRadius: '8px', position: 'relative' }}>
              <Suspense fallback={
                <div className="flex justify-content-center align-items-center h-full">
                  <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="4" />
                </div>
              }>
                <Canvas shadows>
                  <Scene autoRotate={autoRotate} lights={lights} />
                </Canvas>
              </Suspense>
            </div>

            <div className="flex gap-3 justify-content-center mt-4">
              <ButtonPrimary 
                label={autoRotate ? "Detener Rotación" : "Auto Rotar"}
                icon="pi pi-replay"
                onClick={() => setAutoRotate(!autoRotate)}
                severity={autoRotate ? "danger" : "primary"}
              />
              <ButtonPrimary 
                label={lights ? "Apagar Luces" : "Encender Luces"}
                icon="pi pi-sun"
                onClick={() => setLights(!lights)}
                outlined
              />
              <ButtonPrimary 
                label="Centrar Vista"
                icon="pi pi-home"
                onClick={() => window.location.reload()}
                outlined
              />
            </div>

            <div className="mt-4 p-3" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
              <p style={{ color: '#676867' }}>
                <i className="pi pi-info-circle mr-2"></i>
                <strong>Controles:</strong> Click y arrastra para rotar | Rueda del mouse para zoom | Click derecho y arrastra para mover
              </p>
            </div>
          </Card>
        </div>

        <div className="col-12 lg:col-4">
          <Card title="Ficha Técnica" style={{ height: '100%' }}>
            <div className="flex flex-column gap-3">
              {techSpecs.map((spec, index) => (
                <div key={index} className="flex align-items-start gap-3 p-3" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                  <i className={`pi ${spec.icon} text-2xl`} style={{ color: '#003558' }}></i>
                  <div>
                    <strong style={{ color: '#003558' }}>{spec.label}</strong>
                    <p className="mt-1 mb-0" style={{ color: '#676867' }}>{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <ButtonPrimary 
                label="Descargar Catálogo PDF"
                icon="pi pi-download"
                onClick={() => alert('Función de descarga en desarrollo')}
                style={{ width: '100%' }}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
