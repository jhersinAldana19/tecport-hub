import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Organigrama from "./pages/Organigrama";
import Cultura from "./pages/Cultura";
import Procesos from "./pages/Procesos";
import Equipos3D from "./pages/Equipos3D";
import Contacto from "./pages/Contacto";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen flex flex-column">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/organigrama" element={<Organigrama />} />
          <Route path="/cultura" element={<Cultura />} />
          <Route path="/procesos" element={<Procesos />} />
          <Route path="/equipos3d" element={<Equipos3D />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
