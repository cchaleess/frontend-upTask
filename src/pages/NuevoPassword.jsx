import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

const NuevoPassword = () => {

  const params = useParams();
  const { token } = params;

  const [password, setPassword] = useState('')
  const [tokenValido, setTokenValido] = useState(false)
  const [alerta, setAlerta] = useState({})
  const [passwordModificado , setPasswordModificado] = useState(false);

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        //TODO mover a cliente de axios
        const data = await clienteAxios(`/usuarios/olvide-password/${token}`);
        //console.log(data)
        setTokenValido(true)       
      } catch (error) {
        console.log(error.response.data.msg);
        setAlerta({
          error: true,
          msg: error.response.data.msg,
        });      
      }
    };
    comprobarToken();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault()

    if(password === '' || password.length < 6) {
      setAlerta({
        error: true,
        msg: 'La contraseña es obligatoria y debe tener al menos 6 caracteres'
      })
      return
    }

    try {
      const  {data} = await clienteAxios.post(`/usuarios/olvide-password/${token}`, { password });
      //console.log(data)
      setAlerta({
        error: false,
        msg: data.msg,
      })
      setPasswordModificado(true)
    } catch (error) {

      console.log(error.response.data.msg)
      setAlerta({
        error: true,
        msg: error.response.data.msg,
      })
    }


  }

const { msg } = alerta;

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize text-center">
        Restablece tu contraseña
      </h1>

      {msg && <Alerta alerta={alerta} />}

      {tokenValido && (
            <form className="my-10 bg-white p-10 rounded-lg shadow " onSubmit={handleSubmit}>

            <div className="my-5">
              <label
                className="uppercase text-gray-700 block text-xl font-bold mb-2"
                htmlFor="password"
              >
                Nuevo Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Ingresa tu nuevo password"
                className="w-full border px-5 py-3 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-gray-800"
                onChange={(e) => setPassword(e.target.value)}
                value={password}      
                />
              </div>     
            
              <input
                type="submit"
                value="guardar nuevo password"
                className="w-full uppercase bg-sky-600 hover:cursor-pointer text-white px-5 py-5 rounded-lg hover:bg-sky-700 focus:outline-none focus:shadow-outline my-5"
              />
            </form>
       )}

            {passwordModificado && (
            <Link
              to="/"
              className="block text-center my-5 text-slate-600 uppercase text-sm"
            >Iniciar sesión</Link>
        )}

    </>
  );
};

export default NuevoPassword;
