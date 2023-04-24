import React, { useEffect } from "react";
import { Pregunta } from "../../hooks/Pregunta";

export const OpcionInicio = () => {
  
//   useEffect(() => {
//     console.log(option1)  
    
//   }, [])
  
    return (
    <div>
        <Pregunta
        titulo="¿Alguna vez tuvo/tiene algun problema de salud mental?"
        opciones={["Si","No"]}
      />

<Pregunta
        titulo="¿Alguien de su alrededor lo tuvo/tiene?"
        opciones={["Si","No"]}
      />
    </div>
     
  );
};
