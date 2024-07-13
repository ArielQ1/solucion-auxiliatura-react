import React from "react";
import "./estilosModal.css";


const Modal = ({children, estado, cambiarEstado, titulo}) => {
    return(
        <>
            {
                estado&& 
                
                    <div className="principal">
                        <div className="contenedorModal">
                            <div className="encabezadoModal">
                                <h3>{titulo}</h3>
                            </div>
                            <button className="botonCerrar" type="submit" onClick={()=>cambiarEstado(false)}>×</button>
                            {children}
                        </div>
                    </div>
            }
        </>
    );
}
export default Modal;