import React from "react";
import "../styles/inicio.css";
import portada from "../assets/portada.png";
import nube from "../assets/nube.png";
import portadaAnimada from "../assets/portadaAnimada.mp4";
import mental from "../assets/mental.png";
import heart from "../assets/heart.png";
import brain from "../assets/brain.gif";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div>

      <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <video autoPlay muted loop className="videoPortada">
              <source src={portadaAnimada} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      </header>

      <section>
      <div className="container-fluid mt-5 contnube pb-5">
        <div className="row">
          <div className="col-6 d-flex align-items-center">
            <div className="card intro">
              <div className="card-body">
                <h1 className="card-title text-center">
                  ¿Qué es la salud mental?
                </h1>
                <p className="card-text mt-5">
                  La salud mental es un estado de bienestar donde la persona es
                  consciente de sus propias capacidades, puede afrontar las
                  tensiones normales de la vida, puede trabajar de forma
                  productiva y fructífera y es capaz de hacer una contribución a
                  su comunidad.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <img src={nube} alt="nubes" className="img-fluid nubes" />
          </div>
        </div>
      </div>
      </section>

      <section>
      <div className="container-fluid mt-5 contnube pb-1">
        <div className="row">
          <div className="col-12 d-flex align-items-center">
            <div className="card intro">
              <div className="card-body">
                <h1 className="card-title text-center">La depresión</h1>
                <p className="card-text mt-5">
                  La depresión es un trastorno del estado de ánimo que puede
                  afectar la forma en que una persona piensa, siente y actúa.
                  Las personas que padecen depresión pueden experimentar
                  sentimientos de tristeza, desesperanza, pérdida de interés en
                  actividades que antes disfrutaban, fatiga, dificultad para
                  concentrarse y pensamientos de muerte o suicidio. La depresión
                  es una de las enfermedades mentales más comunes en todo el
                  mundo. Según la Organización Mundial de la Salud (OMS), se
                  estima que 300 millones de personas en todo el mundo sufren de
                  depresión. En los Estados Unidos, se estima que alrededor del
                  7% de los adultos han experimentado un episodio de depresión
                  mayor en el último año. Sin embargo, es importante tener en
                  cuenta que la depresión puede afectar a cualquier persona,
                  independientemente de su edad, género, raza o antecedentes
                  culturales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      
      <section>
      <div className="container-fluid mt-5 contopciones pb-5">
        <div className="row">
          <h1 className="text-center mb-5 text-white">
            ¿Qué puedo hacer al respecto?
          </h1>

          <div className="col-md-4 d-flex align-items-center">
            <div className="card intro">
              <div className="card-body">
                <p>
                  {" "}
                  Buscar ayuda profesional: La depresión es un trastorno médico
                  que requiere atención profesional. Por lo tanto, es importante
                  animar a la persona a buscar ayuda de un profesional de la
                  salud mental, como un psicólogo o un psiquiatra.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <div className="card intro">
              <div className="card-body">
                <p>
                  {" "}
                  Ofrecer apoyo emocional: La depresión puede hacer que la
                  persona se sienta aislada y sola. Es importante que sepa que
                  alguien está ahí para ellos y que les brinda apoyo emocional.
                  Escuchar sin juzgar y ofrecer comprensión.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <div className="card intro">
              <div className="card-body">
                <p>
                  Ayudar en las tareas cotidianas: La depresión puede hacer que
                  las actividades cotidianas se sientan abrumadoras. Ayudar con
                  tareas como hacer la compra, cocinar, limpiar o cuidar a los
                  niños pueden ser de gran ayuda.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <div className="card intro">
              <div className="card-body">
                <p>
                  Fomentar la actividad física: El ejercicio puede ser una
                  herramienta útil para tratar la depresión. Fomentar la
                  actividad física, como caminar o correr juntos, puede ayudar a
                  mejorar el estado de ánimo de la persona.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 align-items-center">
            <div className="card intro">
              <div className="card-body">
                <img src={heart} alt="mental man" className="img-fluid head" />
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <div className="card intro">
              <div className="card-body">
                <p>
                  {" "}
                  Fomentar la alimentación saludable: La alimentación también
                  puede tener un impacto en la depresión. Fomentar una dieta
                  saludable y equilibrada puede ayudar a mejorar el estado de
                  ánimo y la energía de la persona.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section>
        <div className="container-fluid mt-5 contopciones pb-5">
          <div className="row">
            <div className="col-6 d-flex">
              <div className="card intro">
                <div className="card-body">
                  <h1 className="card-title text-center">
                    ¿Cómo puedo ayudar a alguien con depresión?
                  </h1>

                  <li className="card-text mt-5">
                    Ten presente que el otro te necesita y te valora, aunque te
                    parezca que no.
                  </li>
                  <li className="card-text mt-3">
                    Nunca digas “tranquilízate” ni “intenta animarte”, a menos
                    que también vayas a brindar instrucciones detalladas e
                    infalibles.
                  </li>
                  <li className="card-text mt-3">
                    Debes escucharlo con atención y sin interrumpirlo. Ponte en
                    su lugar y trata de comprender lo que siente.
                  </li>
                  <li className="card-text mt-3">
                    Entiende que se trata de una enfermedad. No es una debilidad
                    ni una falta de voluntad. Respeta su tiempo y su espacio.
                    Quién lo padece no se hace el enfermo y la "víctima" para
                    llamar la atención.
                  </li>
                  <p className="card-text mt-5 mb-3">
                    También es importante recordar que la depresión es una
                    enfermedad tratable y que hay ayuda disponible. Si la
                    persona con depresión está luchando por sí sola, es
                    importante animarla a buscar ayuda profesional y ofrecerle
                    apoyo emocional.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 d-flex">
              <div className="card intro">
                <div className="card-body">
                  {/* //agregar imagen gif importada brain */}
                  <img src={brain} alt="brain" className="brain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid mt-5 contopciones pb-5">
          <div className="row">
            <div className="col-12 d-flex">
              <div className="card intro">
                <div className="card-body">
                  <li className="card-text mt-3">
                    Tipos de depresión: Hay varios tipos de depresión, que
                    incluyen depresión mayor, trastorno depresivo persistente,
                    trastorno afectivo estacional y depresión posparto. Cada uno
                    de ellos tiene sus propios síntomas y formas de tratamiento.</li>

                    <li className="mt-3">Factores de riesgo: Algunos factores que pueden aumentar el
                    riesgo de desarrollar depresión incluyen antecedentes
                    familiares de depresión, estrés crónico, ciertos trastornos
                    médicos, abuso de sustancias y algunos medicamentos.</li>

                    <li className="mt-3">Tratamientos: Hay varios tratamientos disponibles para la
                    depresión, incluyendo psicoterapia y medicamentos
                    antidepresivos. A menudo, se utiliza una combinación de
                    ambos para lograr los mejores resultados.</li>

                    <li className="mt-3">Prevención: La prevención de la depresión puede incluir cambios en el
                    estilo de vida, como mantener una dieta saludable, hacer
                    ejercicio regularmente y participar en actividades sociales.
                    También es importante buscar tratamiento para otros
                    trastornos de salud mental que puedan aumentar el riesgo de
                    depresión, como la ansiedad.</li>

                    <li className="mt-3">Importancia de buscar ayuda: Si
                    sospechas que tú o alguien que conoces puede estar
                    experimentando depresión, es importante buscar ayuda de un
                    profesional de la salud mental. La depresión puede ser un
                    trastorno grave que puede tener un impacto significativo en
                    la calidad de vida de una persona, pero con el tratamiento
                    adecuado, la mayoría de las personas pueden recuperarse.
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid mt-5 pb-5">
          <div className="row no-gutters">
            <div className="col-6 ">
              
              <a href="/quiz" className="card cardcolor">
                <div className="card-body text-center">
                  <h1 className="text-center">Test de depresión</h1>
                </div>
              </a>
            </div>
            <div className="col-6 ">
              <a href="/centros" className="card cardcolor2">
                <div className="card-body text-center">
                  <h1>Centros de ayuda</h1>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
