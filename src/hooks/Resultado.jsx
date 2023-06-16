import { useEffect, useState } from "react";
import "../styles/preguntas.css";

export const Resultado = ({ sumaindices, respuestasCompletas }) => {
  const [mostrar, setMostrar] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);

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

  const todasLasPreguntasRespondidas =
    Object.keys(respuestasCompletas).length === 9;

  useEffect(() => {
    setBloqueado(todasLasPreguntasRespondidas);
  }, [respuestasCompletas]);



  const handleclick = () => {
    setMostrar(true);
  };

  return (
    <div className="container-fluid mt-5 text-center">
      <button
        className="btn btn-lg result mt-3 mb-3"
        onClick={handleclick}
        disabled={!bloqueado}
      >
        Resultado
      </button>

      {mostrar && (
        <>
          <p className="text-center contfinal">{resultadoFinal()}</p>
        </>
      )}

      <p className="contpreguntas">
        {" "}
        Es un test informativo, consulte a un profesional.{" "}
      </p>
    </div>
  );
};
