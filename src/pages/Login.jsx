import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})

  const {setAuth} = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    if ([email, password].includes('')) {
      setAlerta({
        error: true,
        msg: 'Todos los campos son obligatorios'
      })
      return
    }

    try {
      const {data} = await clienteAxios.post(`/usuarios/login`, {
        email,
        password
      })
      setAlerta({})
      localStorage.setItem('token', data.token)
      setAuth(data);
      // Redireccionar
      //navigate('/')
    } catch (error) {
      console.log(error.response.data.msg)
      setAlerta({
        error: true,
        msg: error.response.data.msg,
      })
    }
  }

  const {msg} = alerta;


  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize text-center">
        Inicia sesión y administra tus
        <span className="text-slate-700"> proyectos</span>
      </h1>
      <form className="my-10 bg-white p-10 rounded-lg shadow" onSubmit={handleSubmit}>
        {msg && <Alerta alerta={alerta} />}
        <div className="my-5">
          <label
            className="uppercase text-gray-700 block text-xl font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu email"
            className="w-full border px-5 py-3 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

         />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-700 block text-xl font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu password"
            className="w-full border px-5 py-3 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-gray-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />
        </div>

        <input
          type="submit"
          value="Iniciar sesión"
          className="w-full bg-sky-600 hover:cursor-pointer text-white px-5 py-5 rounded-lg hover:bg-sky-700 focus:outline-none focus:shadow-outline my-5"
        />
      </form>

      <nav
        className="lg:flex lg:justify-between"
      >
        <Link to="registrar" 
          className="block text-center my-5 uppercase text-sm text-sky-600 ">No tienes cuenta?</Link>
        <Link to="/olvide-password"
          className="block text-center my-5 uppercase text-sm text-sky-600 ">
          Olvidaste tu contraseña?
        </Link>


      </nav>

    </>
  );
};

export default Login;
