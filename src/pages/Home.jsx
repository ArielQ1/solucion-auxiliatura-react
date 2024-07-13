import { React, useState } from 'react';
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Modal from '../components/Modal';



const Home = () => {
    const { register, handleSubmit, formState : { errors }, watch } = useForm()
    const [estadoModal, cambiarEstadoModal] = useState(false);
    
    const onSubmit = handleSubmit((data) => {
        console.log(data)
        
    })

    return (
        <div style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center', height:'500px'}}>
        <h1>Formulario de Registro</h1>
        <Container className="mt-5" style={{backgroundColor: '#646cff', width:'30vw', borderRadius:'10px', height:'300px', display:'grid', placeContent:'center' }}>
            <Form className="p-5" onSubmit={onSubmit} style={{display:'flex', flexDirection:'column', width:'100%', alignItems:'center'}}>
                <Form.Group>
                    <Form.Label style={{display:'block'}}>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" {...register("nombre", {
                        required: {value:true, message:'Nombre requerido'},
                        minLength: {value:3, message:'Nombre muy corto'},
                        maxLength: {value:25, message:'Nombre muy largo'}
                    })}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label style={{display:'block'}}>Fecha de Nacimiento</Form.Label>
                    <Form.Control type="date" {...register("fechaNacimiento", {
                        required: {value:true, message:'Fecha de nacimiento requerida'},
                        validate: value => {
                            const fechaNacimiento = new Date(value)
                            const fechaActual = new Date()
                            const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
                            return edad >= 18 ? true : 'Debes ser mayor de edad'
                        }
                    })} style={{marginBottom:'10px'}} />
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{display:'block'}}>Nota Estudiante</Form.Label>
                    <Form.Control type='number' {...register("notaEstudiante", {
                        required: {value:true, message:'Nota requerida'},
                        min: {value:0, message:'Nota muy baja tiene que ser mayor a 0'},
                        max: {value:100, message:'Nota muy alta no debe ser mayor a 100'}
                    })}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={()=>{
                    cambiarEstadoModal(true);
                    console.log(errors)
                    }} style={{margin:'5px'}}>
                    Validar
                </Button>
                <Modal estado={estadoModal} cambiarEstado={cambiarEstadoModal} titulo={"Estado de la Validacion de Datos"}>
                <div className="contenidoModal">  
                    <h2>Estudiante  {watch("nombre")}</h2>
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
            </Form>
        </Container>        
        </div>
    );
}

export default Home;