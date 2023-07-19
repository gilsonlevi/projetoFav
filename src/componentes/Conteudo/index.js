import React from 'react'

//Esse componente exporta uma função
//Uma função representa o conteúdo
export default function Conteudo() {
  return (
    <>
      <h2>Bem vindo ao site</h2>
      <article>
          <h3>
            Arroz parborizado
          </h3>
          <p>39,90</p>
      </article>
    </>
  )
}

export function OlaMundo(){
    console.log("Olá mundo")
}
