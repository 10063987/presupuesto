import React, { useState } from 'react';
import Error from './Error'
import { nanoid } from 'nanoid'

const Formulario = () => {

    // const [nombregasto, guardarNombreGasto] = useState('')
    // const [cantidadgasto, guardarGasto] = useState(0)
    const [gasto, actualizarGasto] = useState({
        concepto: '',
        cantidad: ''
    })

    const [error, actualizarError] = useState(false)

    const actualizarStateGasto = (e) => {
        actualizarGasto({
            ...gasto, [e.target.name] : e.target.value
        })
    }

    const {concepto, cantidad} = gasto 


    const submitGasto = (e) => {
        e.preventDefault()

        // Validar
        if(concepto.trim() === '' || cantidad.trim() === ''){
            // Mensaje de error si hay
            actualizarError(true)
            return
        }
        actualizarError(false)

        // Asignar ID
        console.log(gasto)
        gasto.id = nanoid()
        console.log(gasto)

        // Crear gasto

        // Pasar gasto al componente principal


        // Reiniciar formulario 




    }


    return ( 
        <>
            <form 
                onSubmit={submitGasto}
            >
                <h2>Agrega tus gastos aquí</h2>
                { error ? <Error mensaje={'Todos los campos son necesarios'} />  :  null }
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input
                        type="text"
                        name="concepto"
                        className="u-full-width"
                        placeholder="Gasolina? Cine?"
                        onChange = {actualizarStateGasto}
                        value = {concepto}
                    />
                </div>
                <div className="campo">
                    <label>Cantidad Gasto</label>
                    <input
                        type="number"
                        name="cantidad"
                        className="u-full-width"
                        placeholder="$300"
                        onChange = {actualizarStateGasto}
                        value={cantidad}
                    />
                </div>
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar gasto"
                />
            </form>
        </>
     );
}
 
export default Formulario;