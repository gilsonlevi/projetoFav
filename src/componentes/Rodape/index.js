import React from 'react'
import styles from './Rodape.module.css'

export default function Rodape(props) {
  return (
    <div>
        <div className={styles.footer}>

          <p className={styles.rodape}>Obrigado e volte sempre</p>
          <p>Instagram: {props.instagram} </p>
          <p>Facebook: </p>
          <p>Twitter: </p>

          <p>O seu jeito fácil de fazer supermercado.
          Em caso de divergência de valores no site, o valor válido é o do carrinho de compras. Fotos ilustrativas. Compras sujeitas a confirmação de estoque.
          A fim de garantir o acesso de um maior número de clientes às nossas promoções, a compra de produtos com preços promocionais poderá ter sua quantidade limitada por cliente. Os preços, ofertas e condições são exclusivos para internet e válidos durante o dia de hoje, podendo sofrer alterações sem prévia notificação.
          Proibida a venda de bebidas alcoólicas para menores de idade, conforme Lei n.º 8069/90, art. 81, inciso II (Estatuto da Criança e do Adolescente).
          Preços e condições exclusivos para o favoritosupermercados.com.br, podendo sofrer alterações sem aviso prévio.</p>

        </div>
    </div>
  )
}
