import React from "react";
import "../styles/inicio.css";
import portada from "../assets/portada.png";

export const Inicio = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img src={portada} alt="portada" className="img-fluid imgPortada" />
          </div>
        </div>
      </div>

      <div class="container ">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-md-12">
            <div class="card intro">
              <div class="card-body">
                <h1 class="card-title text-center">¿Qué es la salud mental?</h1>
                <p class="card-text mt-5">
                  La salud mental es un estado de bienestar en el que la persona
                  es consciente de sus propias capacidades, puede afrontar las
                  tensiones normales de la vida, puede trabajar de forma
                  productiva y fructífera y es capaz de hacer una contribución a
                  su comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-center">Nuestras vida y salud</h1>
        <h3 className="text-center mb-5 mt-5">Depresión</h3>
        <p className="col-12">
          La depresión es un trastorno del estado de ánimo que puede afectar la
          forma en que una persona piensa, siente y actúa. Las personas que
          padecen depresión pueden experimentar sentimientos de tristeza,
          desesperanza, pérdida de interés en actividades que antes disfrutaban,
          fatiga, dificultad para concentrarse y pensamientos de muerte o
          suicidio. La depresión es una de las enfermedades mentales más comunes
          en todo el mundo. Según la Organización Mundial de la Salud (OMS), se
          estima que 300 millones de personas en todo el mundo sufren de
          depresión. En los Estados Unidos, se estima que alrededor del 7% de
          los adultos han experimentado un episodio de depresión mayor en el
          último año. Sin embargo, es importante tener en cuenta que la
          depresión puede afectar a cualquier persona, independientemente de su
          edad, género, raza o antecedentes culturales.
        </p>
        <h4 className="text-center mb-5 mt-5">
          {" "}
          información sobre cómo tratar a alguien que tiene depresión
        </h4>
        <p className="col-8">
          Buscar ayuda profesional: La depresión es un trastorno médico que
          requiere atención profesional. Por lo tanto, es importante animar a la
          persona a buscar ayuda de un profesional de la salud mental, como un
          psicólogo o un psiquiatra.<br></br> Ofrecer apoyo emocional: La
          depresión puede hacer que la persona se sienta aislada y sola. Es
          importante que sepa que alguien está ahí para ellos y que les brinda
          apoyo emocional. Escuchar sin juzgar y ofrecer palabras de aliento y
          comprensión puede ser muy útil. Ayudar en las tareas cotidianas: La
          depresión puede hacer que las actividades cotidianas se sientan
          abrumadoras. Ayudar con tareas como hacer la compra, cocinar, limpiar
          o cuidar a los niños pueden ser de gran ayuda. Fomentar la actividad
          física: El ejercicio puede ser una herramienta útil para tratar la
          depresión. Fomentar la actividad física, como caminar o correr juntos,
          puede ayudar a mejorar el estado de ánimo de la persona. Fomentar la
          alimentación saludable: La alimentación también puede tener un impacto
          en la depresión. Fomentar una dieta saludable y equilibrada puede
          ayudar a mejorar el estado de ánimo y la energía de la persona. Es
          importante tener en cuenta que cada persona es única y puede responder
          de manera diferente a los tratamientos. Lo más importante es animar a
          la persona a buscar ayuda profesional y brindar apoyo emocional y
          práctico.
        </p>
        <p className="col-8">
          Tipos de depresión: Hay varios tipos de depresión, que incluyen
          depresión mayor, trastorno depresivo persistente, trastorno afectivo
          estacional y depresión posparto. Cada uno de ellos tiene sus propios
          síntomas y formas de tratamiento. Factores de riesgo: Algunos factores
          que pueden aumentar el riesgo de desarrollar depresión incluyen
          antecedentes familiares de depresión, estrés crónico, ciertos
          trastornos médicos, abuso de sustancias y algunos medicamentos.
          Tratamientos: Hay varios tratamientos disponibles para la depresión,
          incluyendo psicoterapia y medicamentos antidepresivos. A menudo, se
          utiliza una combinación de ambos para lograr los mejores resultados.
          Prevención: La prevención de la depresión puede incluir cambios en el
          estilo de vida, como mantener una dieta saludable, hacer ejercicio
          regularmente y participar en actividades sociales. También es
          importante buscar tratamiento para otros trastornos de salud mental
          que puedan aumentar el riesgo de depresión, como la ansiedad.
          Importancia de buscar ayuda: Si sospechas que tú o alguien que conoces
          puede estar experimentando depresión, es importante buscar ayuda de un
          profesional de la salud mental. La depresión puede ser un trastorno
          grave que puede tener un impacto significativo en la calidad de vida
          de una persona, pero con el tratamiento adecuado, la mayoría de las
          personas pueden recuperarse.
        </p>
      </div>
    </div>
  );
};
