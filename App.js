import logo from './logo.svg';
import './App.css';
import clientes from './data/clientes'
import TarjetaCliente from './components/TarjetaCliente'

function crearTarjetaCliente(clientes) {
  return <TarjetaCliente nombre={clientes.nombre} edad={clientes} fechaIngreso={} />
}
const listaDeClientes = clientes.map(crearTarjetaCliente);

function App() {
  return (
    <div>
      <TarjetaCliente nombre={} edad={} fechaIngreso={} />
      {listaDeClientes}
    </div>
    
  )
}
export default App;


