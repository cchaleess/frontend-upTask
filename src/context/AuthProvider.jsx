import React, {useState, useEffect, createContext  } from 'react'
import clienteAxios from '../config/clienteAxios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {        
       const autenticarUsuario = async () => {
         const token = localStorage.getItem('token');
            if(!token) { 
                setCargando(false); // Si no hay token, no carga
                return}

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }        
            }

        
        try {
            const {data} = await clienteAxios.get('/usuarios/perfil', config);
            setAuth(data);
            navigate('/proyectos');
            
        }
        catch(error) {
            console.log(error.response.data.msg)
            setAuth({});
        }
        finally {
            setCargando(false);
        }
      }
        autenticarUsuario();
    }, []);

  
    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando                  
            }}
         >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }

export default AuthContext;
