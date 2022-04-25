import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import NuevoPassword from './pages/NuevoPassword';
import OlvidePassword from './pages/OlvidePassword';
import ConfirmarCuenta from './pages/ConfirmarCuenta';
import {AuthProvider} from './context/AuthProvider';
import {ProyectoProvider} from './context/ProyectoProvider';
import Proyectos from './pages/Proyectos';
import RutaProtegida from './layouts/RutaProtegida';
import NuevoProyecto from './pages/NuevoProyecto';

function App() {

  //console.log(import.meta.env.VITE_BACKEND_URL);

  return (
    
    <BrowserRouter>
      <AuthProvider>
        <ProyectoProvider>
      <Routes>
{/* *****Area PUBLICA ********/}   
     <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} /> {/* Rutas anidadas */}
        <Route path="registrar" element={<Registrar />} />
        <Route path="olvide-password" element={<OlvidePassword />} />
        <Route path="olvide-password/:token" element={<NuevoPassword />} />
        <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
        </Route>
{/* *****Area PRIVADA ********/}
        <Route path="/proyectos" element={<RutaProtegida />}>
          <Route index element={<Proyectos />} />
          <Route path="crear-proyecto" element={<NuevoProyecto />} />
        </Route>
    
      </Routes>
      </ProyectoProvider>
      </AuthProvider>
    </BrowserRouter>
  
  )
}

export default App
