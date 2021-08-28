import React, {useState} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import './index.css'

function App() {
  
  // Se define un estado para presupuesto inicial y el restante después de hacer gastos 
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)

  return (
      <div className="container"> 
        <header>
          <div className="contenido-principal contenido ">
            {presupuesto ? null : 
              <Pregunta
                guardarPresupuesto = {guardarPresupuesto}
                guardarRestante = {guardarRestante}
              />
            }

            <div className="row">
              <div className="one-half column">
                <Formulario />
              </div>
              <div className="one-half column">
                DOS
              </div>
            </div>
          </div>
        </header>
      </div>
  );
}

export default App;
