import { useState } from "react";



export const Pregunta = ({titulo, opciones}) => {
    const [respuesta, setRespuesta] = useState('');
    const [opcionesBloqueadas, setOpcionesBloqueadas] = useState(false);
    const [cuenta, setCuenta] = useState(0)

  
    // const handleRespuesta = (e) => {
    //   setRespuesta();
    //   setOpcionesBloqueadas(true);
      
    //   const valorindex = opciones.indexOf(respuesta);
    //   const isLargeNumber = (respuesta);
    //   console.log(valorindex)
    //   // console.log(opciones)
    // }

    const handleRespuesta = (indice) => {
      setRespuesta(indice);
      setOpcionesBloqueadas(true);
    };

    console.log(respuesta)
  
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
                // onChange={handleRespuesta} 
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