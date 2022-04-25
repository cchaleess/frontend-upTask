
const Alerta = ({alerta}) => {
  return (
    <div
        className={`${alerta.error ? 'from-red-400 to-red-800' : 'from-sky-400 to-sky-600'} bg-gradient-to-br text-center rounded-xl uppercase p-3 text-white font-bold text-sm my-10`}
    >{alerta.msg}</div>
  )
}

export default Alerta