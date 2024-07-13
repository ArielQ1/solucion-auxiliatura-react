import { React, useState } from 'react';
import { useForm } from 'react-hook-form'
import Modal from "../components/Modal";
import conffeeti from 'canvas-confetti';


const Tercera = () => {
    const { handleSubmit } = useForm()
    const [estadoModal, cambiarEstadoModal] = useState(false);
    
    const onSubmit = handleSubmit((data) => {
        console.log(data)
        
    })

    const colorTitulo = () => {
        let notaEstudiante = window.localStorage.getItem('nota');
        return notaEstudiante >= 51 ? 'green' : 'red'
    }

    return (
        <div style={{display:"grid", placeContent:'center'}}>
            <h1>Tercera Pagina</h1>
            <p>Estudiante Aprobo o Reprobo?</p>
            <form onSubmit={onSubmit} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <button type="submit" onClick={()=>{
                    cambiarEstadoModal(true);
                    conffeeti();
                    }
                } style={{margin:'5px'}}>Aprobaste?</button>
                <Modal titulo={'Ponderacion'} estado={estadoModal} cambiarEstado={cambiarEstadoModal}>
                    <div className='contenidoModal'>
                        <p><strong>Nota de {window.localStorage.getItem('nombre')}</strong> </p>
                        <h1 style={{color:colorTitulo()}}>{
                        (()=>{
                            let notaEstudiante = window.localStorage.getItem('nota');
                            return notaEstudiante >= 51 ? 'Estudiante Aprobado' : 'Estudiante Reprobado'
                        })()
                        }</h1>

                        <button type="submit" onClick={()=>{
                            cambiarEstadoModal(false);
                            window.localStorage.removeItem('nombre');
                            window.localStorage.removeItem('nota');
                            window.localStorage.removeItem('fecha');
                        }}
                        >Aceptar</button>                           
                    </div>
                </Modal>
            </form>
        </div>
    )
}

export default Tercera;