import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header.jsx';
import Home from './page/Home.jsx';

function App() {
  return (
    <>
    <Header 
    brand= 'Geração Tech' 
    description='Aprendendo React'>
      <a href="#equipe">Equipe</a>
      <a href="#aprendizado">Aprendizado</a>
    </Header>
    <main className='container'>
      <Home/>
    </main>
    </>
  );
}

export default App;
