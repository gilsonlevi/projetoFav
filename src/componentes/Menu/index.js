import React from 'react'
import styles from './Menu.module.css'


export default function Menu() {
    return (
          <>
            <ul className={styles.nav}>
             <li className={styles.menu}><a className={styles.menu} href="#/">Home</a></li>
             <li className={styles.menu}><a className={styles.menu} href="#/">Sobre nós</a></li>
             <li className={styles.menu}><a className={styles.menu} href="#/">Contato</a></li>
            </ul>
          </>    
    )
  }

// export const Menu = () => {
//   return (
//     <>
//         <ul className={styles.nav}>
//             <li className={styles.menu}><a className={styles.menu} href="">Home</a></li>
//             <li className={styles.menu}><a className={styles.menu} href="">Sobre nós</a></li>
//             <li className={styles.menu}><a className={styles.menu} href="">Contato</a></li>
//         </ul>
//     </>
//   )
// }
