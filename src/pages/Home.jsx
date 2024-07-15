import { React, useState } from 'react';
import { useForm } from 'react-hook-form'
import Modal from '../components/Modal';
import '../style/HomePage.css' 


const Home = () => {
    const { register, handleSubmit, formState : { errors }, watch } = useForm()
    const [estadoModal, cambiarEstadoModal] = useState(false);
    
    const onSubmit = handleSubmit((data) => {
        console.log(data)
        
    })

    return (
        <div className='section'>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={onSubmit}>
                        <h2>Formulario de Registro</h2>
                        <div className="inputbox">
                            <input type="text" {...register("nombre", {
                            required: {value:true, message:'Nombre requerido'},
                            minLength: {value:3, message:'Nombre muy corto'},
                            maxLength: {value:25, message:'Nombre muy largo'}
                            })} />
                            <label >Nombres</label>
                        </div>
                        <div className="inputbox">
                            <input type="date" {...register("fechaNacimiento", {
                            required: {value:true, message:'Fecha de nacimiento requerida'},
                            })} />
                            <label >Fecha Nacimiento</label>
                        </div>
                        <div className="inputbox">
                            <input type="number" {...register("notaEstudiante", {
                            required: {value:true, message:'Nota requerida'},
                            min: {value:0, message:'Nota muy baja tiene que ser mayor a 0'},
                            max: {value:100, message:'Nota muy alta no debe ser mayor a 100'}
                            })} />
                            <label >Nota </label>
                        </div>
                        <button type="submit" onClick={()=>{
                            cambiarEstadoModal(true);
                            console.log(errors)
                        }}>Validar</button>
                    </form>
                </div>
            </div>
            <Modal estado={estadoModal} cambiarEstado={cambiarEstadoModal} titulo={"Estado de la Validacion de Datos"}>
                <div className="contenidoModal">  
                    <strong>Nombre: </strong><p>{watch("nombre")}</p>
                    <strong>Fecha de Nacimiento: </strong><p>{watch("fechaNacimiento")}</p>
                    <strong>Nota: </strong><p>{watch("notaEstudiante")}</p>
                    {errors.nombre && <p style={{color:'red'}}>{errors.nombre.message}</p>}
                    {errors.fechaNacimiento && <p style={{color:'red'}}>{errors.fechaNacimiento.message}</p>}
                    {errors.notaEstudiante && <p style={{color:'red'}}>{errors.notaEstudiante.message}</p>}
                    {!errors.nombre && !errors.fechaNacimiento && !errors.notaEstudiante  && <button type="submit" onClick={()=> {
                        cambiarEstadoModal(false);
                        window.localStorage.setItem('nombre', watch("nombre"));
                        window.localStorage.setItem('nota', watch("notaEstudiante"));
                        window.localStorage.setItem('fecha', watch("fechaNacimiento"));
                        }} >Enviar</button>}
                </div>
            </Modal>
        </div>
    );
}

export default Home;