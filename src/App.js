import React, {useState} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import './index.css'

function App() {
  
  // Se define un estado para presupuesto inicial y el restante después de hacer gastos 
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])

  //Cuando agreguemos un nuevo gasto al array de gastos
  const agregarNuevoGasto = gasto => {
    guardarGastos([...gastos, gasto ])
  }

  const eliminarGasto = (id) => {

  }

  return (
      <div className="container"> 
        <header>
          <div className="contenido-principal contenido ">
            { mostrarpregunta ? 
              (
                <Pregunta
                guardarPresupuesto = {guardarPresupuesto}
                guardarRestante = {guardarRestante}
                actualizarPregunta = {actualizarPregunta}
                />
              ) : 
              (
                <div className="row">
                  <div className="one-half column">
                    <Formulario 
                      agregarNuevoGasto={agregarNuevoGasto}
                    />
                  </div>
                  <div className="one-half column">
                    <Listado 
                      gastos = {gastos}
                    />
                  </div>
                </div>
              )
            }

          </div>
        </header>
      </div>
  );
}

export default App;
