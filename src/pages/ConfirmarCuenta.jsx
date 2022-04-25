import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

const ConfirmarCuenta = () => {

  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const { id } = params;
 
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);



  const confirmarCuenta = async () => {
      try {    
        const {data} = await clienteAxios(`/usuarios/confirmar/${id}`);
//TODO probar setAlerta({})
        setAlerta({        
          msg: data.msg, 
          error: false,
        });
        setCuentaConfirmada(true)

      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        });      
      }
    }


  useEffect(() => {  
    confirmarCuenta();
  }, []);

  const { msg } = alerta;
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize text-center">
        Confirma tu cuenta
      </h1>
      <div className="mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-slate-300 border">
        {msg && <Alerta alerta={alerta} />}
   
      </div>

       {cuentaConfirmada && (
            <Link
              to="/"
              className="block text-center my-5 text-slate-600 uppercase text-sm"
            >Iniciar sesión</Link>
        )}
    </>
  );
};

export default ConfirmarCuenta;
