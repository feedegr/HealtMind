import React from "react";
import "../styles/centrosayuda.css";

export const CentrosAyuda = () => {
  const tarjetas = [
    {
      titulo: "Instituto Ulloa",
      direccion: 'Avenida Pueyrredón 510 1 "A" y "B"',
      ciudad: "Capital Federal",
      telefono: "011 15-2159-5457",
      horario: "9:00-21:00",
    },
    {
      titulo: "Centro Racker",
      direccion: "Rodríguez Peña 1674",
      ciudad: "Capital Federal",
      telefono: "+54 11 2240 5828 (Solo Wpp)",
      
    },
    {
      titulo: "Fundación Foro para La Salud Mental Argentina",
      direccion: "Av. Olazábal 2015",
      ciudad: "Capital Federal",
      telefono: "011 4787-1140",
      
    },
    {
      titulo: "Hospital General de Agudos “Dr. Juan A. Fernández”",
      direccion: "Cerviño 3356",
      ciudad: "Capital Federal",
      telefono: "4808-2600",
      
    },
    {
      titulo: "Hospital General de Agudos “Dr. Bernardino Rivadavia”",
      direccion: "Av. Las Heras 2670",
      ciudad: "Capital Federal",
      telefono: "4809-2000/01",

    },
    {
      titulo: "Hospital General de Agudos “Dr. Ignacio Pirovano”",
      direccion: "Monroe 3555",
      ciudad: "Capital Federal",
      telefono: "4542-5552",

    },
    {
      titulo: "Hospital de Emergencias Psiquiátricas “Dr. Torcuato”",
      direccion: "Av. Warnes 2630",
      ciudad: "Capital Federal",
      telefono: "4521-5555",
    },
    {
      titulo: "Hospital General de Agudos “Dr. Enrique Tornú”",
      direccion: "Combatientes de Malvinas 3002",
      ciudad: "Capital Federal",
      telefono: "4521-3600/8700",
    },
    
  ];

  return (
  


    <div>
      <div className="container mt-5 centrostyle pb-5">
        <div className="row">
          {tarjetas.map((tarjeta, index) => (
            <div className="col-md-6" key={index}>
              <div className="card cardcentro">
                <div className="card-body">
                  <h2 className="card-title">{tarjeta.titulo}</h2>
                </div>
                <div className="card-text">
                  <p>{tarjeta.direccion}</p>
                  <p>{tarjeta.ciudad}</p>
                  <p>{tarjeta.telefono}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mt-5 mastitulo mb-3">¡Aún hay más centros! Fijate acá:</h1>
            <a  href="https://www.ayudapsicologica.com.ar/recursos-y-telefonos-de-ayuda/hospitales-con-servicio-de-salud-mental-en-caba-y-gran-buenos-aires/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center acont"> Centros</a>
            </div> 
            </div>
      </div>
    </div>
  );
};
