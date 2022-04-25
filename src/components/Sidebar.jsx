import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


export const Sidebar = () => {

    const { auth } = useAuth();

  return (
   
    <aside className='md:w-80 lg:w-96 px-5 py-10 bg-white border-r border-gray-400'>
        <p>Hola: {auth.nombre}</p>
        <Link to='crear-proyecto' className='bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'>Nuevo Proyecto</Link>
        <Link to='proyectos' className='bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'>Proyectos</Link>
        <Link to='nueva-tarea' className='bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'>Nueva Tarea</Link>
        <Link to='tareas' className='bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'>Tareas</Link>
        <Link to='usuarios' className='bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'>Usuarios</Link>
       
    </aside>


  )
}
export default Sidebar;