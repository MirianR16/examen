import { useState } from "react";
import Card from "../components/Card.jsx";


const modulos = [
  {
    id: 1,
    titulo: "Bases de Datos",
    descripcion: "Fundamentos de modelado y consultas SQL",
    imagen:
      "/bases-datos.svg",
  },
  {
    id: 2,
    titulo: "Programación Web",
    descripcion: "React en el frontend y Laravel en el backend",
    imagen:
      "/programacion-web.svg",
  },
  {
    id: 3,
    titulo: "Robótica",
    descripcion: "Arduino y control de circuitos electrónicos",
    imagen:
      "/robotica.svg",
  },
];

export default function Clases() {

  return (
    <section className="content">
        <h2>Módulos disponibles</h2>
        <div className="cards">
          {modulos.map((m) => (
            <Card
              key={m.id}
              imagen={m.imagen}
              titulo={m.titulo}
              descripcion={m.descripcion}
              onSuscribir={() => suscribir(m)}
            />
          ))}
        </div>
      </section>
  );
}
