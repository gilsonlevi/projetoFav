import React from 'react'
import styles from './Cabecalho.module.css'

export default function Cabecalho(props) {
  return (
        <>
        <div className={styles.navBar}>
          <img className={styles.img} src={props.logo} alt="imagem"/>
          <p className={styles.titulo}> {props.titulo}</p>
          <ul className={styles.nav}>
            <li className={styles.menu}><a className={styles.menu} href="/#">Home</a></li>
            <li className={styles.menu}><a className={styles.menu} href="/#">Sobre nós</a></li>
            <li className={styles.menu}><a className={styles.menu} href="/#">Contato</a></li>
          </ul>
        </div>
        </>    
  )
}
