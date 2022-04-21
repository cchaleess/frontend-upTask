import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import NuevoPassword from './pages/NuevoPassword';
import OlvidePassword from './pages/OlvidePassword';
import ConfirmarCuenta from './pages/ConfirmarCuenta';

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
{/* *****Area PUBLICA ********/}   
     <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} /> {/* Rutas anidadas */}
        <Route path="registrar" element={<Registrar />} />
        <Route path="olvide-password" element={<OlvidePassword />} />
        <Route path="olvide-password/:token" element={<NuevoPassword />} />
        <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
        </Route>
         
      </Routes>

    </BrowserRouter>
  
  )
}

export default App
