import React from "react";
import { useState } from "react";
import { Pregunta } from "../hooks/Pregunta";
import { Resultado } from "../hooks/Resultado";

export const Quiz = () => {

  
  
  const [sumaindices, setSumaIndices] = useState(0);
  

  const handleIndexSeleccionado = (index) => {
    setSumaIndices((sumaindices) => sumaindices + index);
 
  };

  

  return (
    <div className="container">
      <Pregunta 
        titulo="¿Se ha sentido poco interesado o incapaz de disfrutar de las actividades que antes le resultaban agradables?"
        opciones={["No me he sentido así", "Poco interés o placer en hacer cosas", "Bastante interés o placer en hacer cosas", "Gran interés o placer en hacer cosas"]}
        onIndexSeleccionado={handleIndexSeleccionado}
      />
      <Pregunta
        titulo="¿Ha tenido dificultad para conciliar o mantener el sueño, o ha estado durmiendo demasiado?"
        opciones={["No he tenido problemas para dormir", "He estado durmiendo un poco más o menos de lo normal", "He tenido dificultades para conciliar o mantener el sueño casi todas las noches", " He estado durmiendo mucho más o mucho menos de lo normal"]}
        onIndexSeleccionado={handleIndexSeleccionado}
      />
      <Pregunta
        titulo="¿Ha sentido cansancio o falta de energía?"
        opciones={["No me he sentido así", "Un poco de cansancio o falta de energía", "Bastante cansancio o falta de energía", "Gran cansancio o falta de energía"]}
       onIndexSeleccionado={handleIndexSeleccionado}
      />
      <Pregunta
        titulo="¿Ha tenido un apetito excesivo o ha perdido el apetito?"
       opciones={["No he tenido cambios en mi apetito", "He tenido un poco más o menos de apetito de lo normal", "He tenido mucho más o mucho menos de apetito de lo normal", "No he tenido apetito en absoluto o he comido en exceso"]}
       onIndexSeleccionado={handleIndexSeleccionado}
      />
      <Pregunta
        titulo="¿Ha tenido problemas para concentrarse, por ejemplo, leer noticias o mirar televisión?"
        opciones={["No he tenido problemas para concentrarme", "He tenido un poco de dificultad para concentrarme", "He tenido problemas para concentrarme casi todo el tiempo", "No puedo concentrarme en nada"]}
       onIndexSeleccionado={handleIndexSeleccionado}
      />
      <Pregunta
        titulo="¿Se ha sentido mal consigo mismo/a, como si fuera un fracaso o que ha defraudado a su familia o a usted mismo/a?"
       opciones={["No me he sentido así", "A veces me he sentido así", "Muchas veces me he sentido así", "Siempre me he sentido así"]}
       onIndexSeleccionado={handleIndexSeleccionado}
      />
      <Pregunta
        titulo="¿Ha tenido pensamientos de autolesionarse o de hacerse daño de alguna otra manera?"
        opciones={["No he tenido estos pensamientos", "He tenido estos pensamientos, pero no los he considerado seriamente", "He considerado seriamente la posibilidad de autolesionarme", " He tenido pensamientos concretos sobre autolesionarme o hacerme daño"]}
       onIndexSeleccionado={handleIndexSeleccionado}
      />
      <Pregunta
        titulo="¿Ha sentido que estaría mejor muerto/a o ha tenido pensamientos de suicidio?"
        opciones={[" No he tenido estos pensamientos", "He tenido estos pensamientos, pero no los he considerado seriamente", "He considerado seriamente la posibilidad de suicidarme", "He tenido pensamientos concretos sobre suicidarme"]}
       onIndexSeleccionado={handleIndexSeleccionado}
      />
      <Pregunta
        titulo="¿Se ha movido o hablado tan lento que otras personas
                      podrían haberlo notado? o lo contrario muy inquieto(a)
                      o agitado(a) que ha estado moviéndose mucho más de
                      lo normal "
        opciones={["Me siento igual", "Solo un poco", "Si bastante seguido", "Mucho y lo han notado"]}
       onIndexSeleccionado={handleIndexSeleccionado}
      />
      
        <Resultado sumaindices={sumaindices} />
    </div>
  );
};
