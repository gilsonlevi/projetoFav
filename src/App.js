import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
import Conteudo,{OlaMundo} from './componentes/Conteudo';
//Arquivo App JSX
//Componente funcional = porque ele é uma função
function App() {
  OlaMundo();
  
  //Todo componente deve retornar um html entre parenteses
  return (
    // O react substitui className por classe porque class é palavra reservada do JS
    <>
    {/* Nosso cabecalho tem uma propriedade  */}

    <Cabecalho logo= "header-logo.png" titulo="Seu Jeito Favorito" subtitulo="Melhor site de vendas da historia"/>
    <Conteudo/>
    <Rodape instagram= "@favorito" logo= "header-logo.png"/>
    </>
  );
}

export default App;
