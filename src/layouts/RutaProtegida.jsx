import { Outlet, Navigate } from 'react-router-dom'
import  useAuth  from '../hooks/useAuth'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const RutaProtegida = () => {

const { auth, cargando } = useAuth();

if (cargando) {
  return <div>Cargando...</div>
}

  return (

    <>
        {auth._id ? (
            <>
            <div className='bg-gray-100'>
                <Header />
            </div>
            
            <div className="md:flex md:min-h-screen">
                <Sidebar />
                <main role="main" className="flex-1 p-10">
                   <Outlet />
                   </main>
                </div>
            </>

        ) : <Navigate to="/"/>}
    </>
    
  )
}

export default RutaProtegida