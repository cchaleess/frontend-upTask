import {useContext} from 'react'
import ProyectoProvider from '../context/ProyectoProvider'

const useProyectos = () => {
  return useContext(ProyectoProvider)
}

export default useProyectos