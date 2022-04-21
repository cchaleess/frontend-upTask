import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize text-center">
        Inicia sesión y administra tus
        <span className="text-slate-700"> proyectos</span>
      </h1>
      <form className="my-10 bg-white p-10 rounded-lg shadow ">
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
