import {useState} from "react";
import "../styles/preguntas.css";


export const Pregunta = ({titulo, opciones,onIndexSeleccionado }) => {
    const [respuesta, setRespuesta] = useState('');
    const [opcionesBloqueadas, setOpcionesBloqueadas] = useState(false);
    
    
    const handleRespuesta = (index) => {
      setRespuesta(index);
      setOpcionesBloqueadas(true);
      onIndexSeleccionado(index);
    };
  
    return (
      <div className="container mt-5 contpreguntas" style={{ backgroundColor: '#006A73' }}>
        <h4 className="mb-3 text-center pb-4 pt-4">{titulo}</h4> 
        <div className="col-8">
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
              <label className="form-check-label ml-5">{opcion}</label>
            </div>
          ))} 
        </form>
        
        </div>
      </div>
    );
  }