import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'

const Registrar = () => {


  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repetirPass, setRepetirPass] = useState('')
  const [alerta , setAlerta] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    if ([nombre, email, password, repetirPass].includes('')) {
      setAlerta({
        error: true,
        msg: 'Todos los campos son obligatorios'
      })
      return      
    }
    if (password !== repetirPass) {      
      setAlerta({
        error: true,
        msg: 'Las contraseñas no coinciden'
      })
      return
    }
    if (password.length < 6) {
      setAlerta({
        error: true,
        msg: 'La contraseña debe tener al menos 6 caracteres'
      })
      return
    }
    //ok, enviar el registro
    setAlerta({})
    try {
      const {data} =  await clienteAxios.post( `/usuarios`, {
        nombre,
        email,
        password
      })
      console.log(data)
      //Muestro alerta
      setAlerta({
        error: false,
        msg: data.msg
      })

      //Reinicio el formulario
      setNombre('')
      setEmail('')
      setPassword('')
      setRepetirPass('')
      


    } catch (error) {
      //acceder a la data del error con axios: error.response.data
      setAlerta({
        error: true,
        msg: error.response.data.msg
      })
    }
  }

  const {msg} = alerta

  return (
    <>
    <h1 className="text-sky-600 font-black text-6xl capitalize text-center">
      Crea tu cuenta     
    </h1>

    {msg && <Alerta alerta={alerta} />}
    <form className="my-10 bg-white p-10 rounded-lg shadow" onSubmit={handleSubmit}>
    <div className="my-5">
        <label
          className="uppercase text-gray-700 block text-xl font-bold mb-2"
          htmlFor="nombre"
        >
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          placeholder="Ingresa tu nombre"
          className="w-full border px-5 py-3 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-gray-800"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>




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

      <div className="my-5">
        <label
          className="uppercase text-gray-700 block text-xl font-bold mb-2"
          htmlFor="password2"
        >
          Repite tu Password
        </label>
        <input
          type="password"
          id="password2"
          placeholder="Repite tu password"
          className="w-full border px-5 py-3 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-gray-800"
          value={repetirPass}
          onChange={(e) => setRepetirPass(e.target.value)}
        />
      </div>
      <input
        type="submit"
        value="crear cuenta"
        className="w-full uppercase bg-sky-600 hover:cursor-pointer text-white px-5 py-5 rounded-lg hover:bg-sky-700 focus:outline-none focus:shadow-outline my-5"
     />
    </form>

    <nav
      className="lg:flex lg:justify-between"
    >
      <Link to="/" 
        className="block text-center my-5 uppercase text-sm text-sky-600 ">Ya tienes una cuenta?</Link>
      <Link to="/olvide-password"
        className="block text-center my-5 uppercase text-sm text-sky-600 ">
        Olvidaste tu contraseña?
      </Link>


    </nav>

  </>
  )
}

export default Registrar