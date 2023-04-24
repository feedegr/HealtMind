import { useState } from "react";



export const Pregunta = ({titulo, opciones}) => {
    const [respuesta, setRespuesta] = useState('');
    const [opcionesBloqueadas, setOpcionesBloqueadas] = useState(false);

  
    const handleRespuesta = (e) => {
      setRespuesta(e.target.value);
      setOpcionesBloqueadas(true);

    }

    console.log(respuesta)
  
    return (
      <div className="container mt-5">
        <div className="col-8">
        <h4 className="mb-3">{titulo}</h4>
        <form>
          {opciones.map(opcion => (
            <div className="form-check mb-3">
              <input 
                className="form-check-input" 
                type="radio" 
                name="respuesta" 
                value={opcion} 
                checked={respuesta === opcion}
                onChange={handleRespuesta} 
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