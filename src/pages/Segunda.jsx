import { React, useState } from "react";
import { useForm } from 'react-hook-form'
import Modal from "../components/Modal";

const Segunda = () => {

    const [ estadoModal, cambiarEstadoModal ] = useState(false)
    const { handleSubmit } = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        
    })
    return (
        <div style={{display:"grid", placeContent:'center'}}>
            <h1>Segunda Pagina</h1>
            <p>Calvule y Muestre la Edad de la Persona</p>
            <form onSubmit={onSubmit} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <button type="submit" onClick={()=>{
                    cambiarEstadoModal(true);
                    }} style={{margin:'5px'}}>Calcular Edad</button>
            
                <Modal titulo={'Los Datos de la persona'} estado={estadoModal} cambiarEstado={cambiarEstadoModal}>
                    <div className="contenidoModal">
                        <p><strong>Nombre:</strong> {window.localStorage.getItem('nombre')}</p>
                        <p><strong>Fecha de Nacimiento:</strong> {
                            (() => {
                                let fechaNacimiento = new Date(window.localStorage.getItem('fecha'))
                                let formato = { day: 'numeric', month: 'long', year: 'numeric' }
                                return fechaNacimiento.toLocaleDateString('es-ES', formato)
                            })()
                        }</p>
                        <h1><strong>Edad:</strong> {
                            (() => {
                                const fechaNacimiento = new Date(window.localStorage.getItem('fecha'))
                                const fechaActual = new Date()
                                const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
                                return edad
                            })()
                        }</h1>
                        <button type="submit" onClick={()=>cambiarEstadoModal(false)} >Aceptar</button> 
                    </div>
                </Modal>
            </form>
        </div>
    )
}

export default Segunda;