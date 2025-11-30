# Portal Institucional TECPORT

Portal web institucional desarrollado con React, PrimeReact y react-three-fiber siguiendo el manual de marca TECPORT.

## 🎨 Manual de Marca

### Colores Principales
- Azul corporativo: `#003558`
- Naranja: `#ce5d2a`
- Gris oscuro: `#676867`

### Colores Secundarios
- Blanco: `#ffffff`
- Amarillo: `#df9b1b`
- Gris claro: `#cfd1d2`

### Tipografías
- **Títulos**: Montserrat Bold
- **Subtítulos**: Montserrat Bold
- **Texto general**: Open Sans Regular

## 🚀 Inicio Rápido

### Prerequisitos
- Node.js (v16 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# Navegar al directorio
cd tecport-portal

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:8080`

## 📁 Estructura del Proyecto

```
src/
├── assets/
│   ├── images/          # Logo, isotipo y banners
│   └── models/          # Modelos 3D (.gltf)
├── components/
│   └── ButtonPrimary.jsx  # Componente de botón base
├── layout/
│   ├── Navbar.jsx       # Barra de navegación
│   └── Footer.jsx       # Pie de página
├── pages/
│   ├── Home.jsx         # Página de inicio con carousel
│   ├── Organigrama.jsx  # Estructura organizacional
│   ├── Cultura.jsx      # Misión, visión y valores
│   ├── Procesos.jsx     # Procesos internos
│   ├── Equipos3D.jsx    # Visualización 3D de equipos
│   └── Contacto.jsx     # Formulario de contacto
├── App.tsx              # Componente principal y rutas
└── index.css            # Estilos globales y diseño del sistema
```

## 🖼️ Reemplazar Assets

### Logo e Isotipo
1. Coloca tu logo en: `src/assets/images/logo.png`
2. Coloca tu isotipo en: `src/assets/images/isotipo.png`

### Imágenes del Banner
Reemplaza las siguientes imágenes (recomendado: 1920x600px):
- `src/assets/images/banner-1.jpg`
- `src/assets/images/banner-2.jpg`
- `src/assets/images/banner-3.jpg`

### Modelos 3D
Para agregar tu modelo 3D de equipos:

1. Coloca tu archivo `.gltf` o `.glb` en: `src/assets/models/reach-stacker.gltf`

2. Actualiza el componente `src/pages/Equipos3D.jsx`:

```jsx
import { useGLTF } from '@react-three/drei';

function ReachStackerModel() {
  const { scene } = useGLTF('/src/assets/models/reach-stacker.gltf');
  return <primitive object={scene} scale={0.5} />;
}
```

## 🧩 Componentes PrimeReact Utilizados

- **Menubar**: Navegación principal
- **Carousel**: Banner de inicio
- **OrganizationChart**: Organigrama interactivo
- **Card**: Tarjetas de contenido
- **Dialog**: Ventanas modales
- **Stepper**: Procesos paso a paso
- **Accordion**: Contenido expandible
- **Forms**: InputText, Dropdown, Calendar, etc.
- Y más...

## 🎯 Secciones del Portal

1. **Inicio**: Hero con carousel de 3 imágenes y acceso rápido
2. **Organigrama**: Estructura organizacional interactiva con detalles de cada miembro
3. **Cultura TECPORT**: Misión, visión, valores y compromisos
4. **Procesos**: Procesos internos con Stepper interactivo
5. **Equipos 3D**: Visualización 3D de equipos portuarios
6. **Contacto Interno**: Formulario de contacto con validación

## 🔧 Tecnologías

- **React 18**: Framework principal
- **TypeScript**: Tipado estático
- **PrimeReact**: Biblioteca de componentes UI
- **PrimeFlex**: Sistema de grid CSS
- **react-three-fiber**: Renderizado 3D
- **@react-three/drei**: Helpers para Three.js
- **React Router DOM**: Navegación
- **Vite**: Build tool

## 📦 Dependencias Principales

```json
{
  "primereact": "latest",
  "primeicons": "latest",
  "primeflex": "latest",
  "@react-three/fiber": "^8.18",
  "@react-three/drei": "^9.122.0",
  "three": "latest"
}
```

## 🎨 Personalización de Estilos

Los estilos personalizados de TECPORT están en `src/index.css`:

- Variables CSS del manual de marca
- Estilos del Navbar con hover personalizado
- Estilos del carousel hero
- Estilos de cards y componentes
- Estilos responsive

### Navbar Hover
El navbar tiene un hover especial que **solo cambia el color del texto e ícono** a blanco, **sin cambiar el fondo**.

## 🌐 Despliegue

```bash
# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview
```

Los archivos compilados estarán en la carpeta `dist/`

## 📝 Notas Importantes

1. **Orden de las secciones**: Mantener el flujo UX: Navbar → Hero → Organigrama → Cultura → Procesos → Equipos 3D → Contacto → Footer

2. **Accesibilidad**: El proyecto incluye roles ARIA básicos y contraste de color correcto

3. **Responsive**: Todos los componentes son responsive y se adaptan a móviles, tablets y desktop

4. **Hover del Navbar**: El efecto hover SOLO cambia color de texto/icono, NO el fondo

5. **ButtonPrimary**: Usar siempre el componente `ButtonPrimary` como botón base en lugar de crear botones custom

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

TECPORT - [contacto@tecport.com](mailto:contacto@tecport.com)

---

Desarrollado con ❤️ siguiendo el manual de marca TECPORT
