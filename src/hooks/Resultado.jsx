import { useState } from "react";
import "../styles/preguntas.css";

export const Resultado = ({ sumaindices }) => {
  const [mostrar, setMostrar] = useState(false);

  // Puntuación de 0 a 4: Ausencia o mínima depresión.
  // Puntuación de 5 a 9: Depresión leve.
  // Puntuación de 10 a 14: Depresión moderada.
  // Puntuación de 15 a 19: Depresión moderadamente severa.
  // Puntuación de 20 o más: Depresión grave.

  const resultadoFinal = () => {
    if (sumaindices >= 0 && sumaindices <= 4) {
      return "Ausencia o mínima depresión";
    } else if (sumaindices >= 5 && sumaindices <= 9) {
      return "Depresión leve";
    } else if (sumaindices >= 10 && sumaindices <= 14) {
      return "Depresión moderada";
    } else if (sumaindices >= 15 && sumaindices <= 19) {
      return "Depresión moderadamente severa";
    } else if (sumaindices >= 20) {
      return "Depresión grave";
    }
  };

  const handleclick = () => {
    setMostrar(true);
  };

  return (
    <div className="container-fluid mt-5 text-center">
      
        <button className="btn btn-lg result mt-3 mb-3" onClick={handleclick}>
          Resultado
        </button>

        {mostrar && (
          <>
            <p className="text-center contpreguntas">{resultadoFinal()}</p>
          </>
        )}
      
        <p className="contpreguntas"> Es un test informativo, consulte a un profesional. </p>
    </div>
  );
};