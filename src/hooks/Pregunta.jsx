import { useEffect, useState } from "react";


export const Pregunta = ({titulo, opciones,onIndexSeleccionado }) => {
    const [respuesta, setRespuesta] = useState('');
    const [opcionesBloqueadas, setOpcionesBloqueadas] = useState(false);
    
    
    const handleRespuesta = (index) => {
      setRespuesta(index);
      setOpcionesBloqueadas(true);
      onIndexSeleccionado(index);
    };

    
    
  
    return (
      <div className="container mt-5">
        <div className="col-8">
        <h4 className="mb-3">{titulo}</h4>
        
        <form>
          {opciones.map((opcion,index) => (
            <div className="form-check mb-3" key={index}>
              <input 
                className="form-check-input" 
                type="radio" 
                name="respuesta" 
                value={opcion}
                checked={respuesta === index}
                onChange={() => handleRespuesta(index)}
                disabled={opcionesBloqueadas && respuesta !== opcion}
              />
              <label className="form-check-label">{opcion}</label>
            </div>
          ))} 
        </form>
        
        </div>
      </div>
    );
  }