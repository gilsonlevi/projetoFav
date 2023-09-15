import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
import Conteudo,{OlaMundo} from './componentes/Conteudo';
// import Estados from './exemplos/Estados';
//Arquivo App JSX
//Componente funcional = porque ele é uma função
function App() {

  // alert("Olá")
  
  
  OlaMundo();
  
  //Todo componente deve retornar um html entre parenteses
  return (
    // O react substitui className por classe porque class é palavra reservada do JS
    <>
    {/* Nosso cabecalho tem uma propriedade  */}

    <Cabecalho logo="imagens/header-logo.png" titulo="Seu Jeito Favorito" subtitulo="Melhor site de vendas da historia"/>
    <Conteudo img="imagens/imgCafe.png"/>
    <Rodape logo= "imagens/header-logo.png"/>
    {/* <Estados/> */}
    </>
  );
}

export default App;
