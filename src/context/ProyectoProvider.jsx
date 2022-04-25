import { useEffect, useState, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";

const ProyectoContext = createContext();

const ProyectoProvider = ({ children }) => {


    const [proyectos, setProyectos] = useState([]);

    return (
        <ProyectoContext.Provider
            value={{ proyectos
            }}
            >
            {children}
        </ProyectoContext.Provider>
    )
}

export { ProyectoProvider };

export default ProyectoContext;