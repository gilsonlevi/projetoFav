import React, { useState } from 'react'
import styles from './Estados.module.css'

const Estados = () => {

    const [nome, setNome]=useState("Google")
    const [url, setUrl]=useState("http://www.google.com")
    const [favoritos, setFavoritos]=useState([])

    function adicionaFavoritos(nome,url){
      let favorito = {nome, url}
      favoritos.push(favorito)
      setFavoritos(favoritos)
      console.log(favoritos)
      // setFavorito([...favorito, favorito])
    }

    function handleNome(valor) {
        setNome(valor)
    }

    function handleUrl(valor) {
        setUrl(valor)
    }


  return (
    <div className={styles.container}>
    <h1>Estados</h1>
    <h1>{nome}</h1>
    <input type="text" value={nome} onChange={(e)=>handleNome(e.target.value)}/>
    <h1>{url}</h1>
    <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)}/>
    <button onClick={()=> adicionaFavoritos(nome, url)}>Adicionar</button>
    <h1>Favoritos</h1>

    <ul>
      {favoritos.map((elemento) => (
        <li>{elemento.nome}</li>
      ))}
    </ul>

    </div>
  )
}

export default Estados