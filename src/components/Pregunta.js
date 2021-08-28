import React, { Fragment, useState } from 'react';
import Error from './Error'

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    const definirPresupuesto = (e) =>{
        guardarCantidad(parseInt(e.target.value, 10))
    }

    const agregarPresupuesto = e =>{
        e.preventDefault()

        // Validar presupuesto
        console.log(e)
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true)
            return
        }
        // Limpiar mensaje de error 
        guardarError(false)

        // Alamacenar presupuesto y restante 
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarPregunta(false)


    }


    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje={'El presupuesto es incorrecto'}/> : null}

            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
      )
}
 
export default Pregunta;