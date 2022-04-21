import React from "react";

const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize text-center">
        Restablece tu contraseña
      </h1>
      <form className="my-10 bg-white p-10 rounded-lg shadow ">

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
          />
        </div>

      
        <input
          type="submit"
          value="guardar nuevo password"
          className="w-full uppercase bg-sky-600 hover:cursor-pointer text-white px-5 py-5 rounded-lg hover:bg-sky-700 focus:outline-none focus:shadow-outline my-5"
        />
      </form>
    </>
  );
};

export default NuevoPassword;
