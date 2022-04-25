import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import axios from 'axios'
import clienteAxios from '../config/clienteAxios'
const OlvidePassword = () => {

  const [email, setEmail] = useState('')
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(email === '' || email.length < 6) {
      setAlerta({
        error: true,
        msg: 'El email es obligatorio'
      })
      return
    }

    try {
      const { data } = await clienteAxios.post(`/usuarios/olvide-password`, { email })

      console.log(data)
      setAlerta({
        error: false,
        msg: data.msg,
      })
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
      Recupera tu cuenta
    </h1>
    {msg && <Alerta alerta={alerta} />}

    <form 
    onSubmit={handleSubmit}
    className="my-10 bg-white p-10 rounded-lg shadow ">

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

      <input
        type="submit"
        value="enviar instrucciones"
        className="w-full uppercase bg-sky-600 hover:cursor-pointer text-white px-5 py-5 rounded-lg hover:bg-sky-700 focus:outline-none focus:shadow-outline my-5"
      />
    </form>
    <nav
        className="lg:flex lg:justify-between"
      >
        <Link to="registrar" 
          className="block text-center my-5 uppercase text-sm text-sky-600 ">No tienes cuenta?</Link>
          </nav>
  </>
  )
}

export default OlvidePassword