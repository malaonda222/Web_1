import './App.css';
import Componente1 from './Componente1';
import Clock from './Clock';

function App() {
  let nome="Lisa";
  const persona1={
    nome:"Roberto", cognome:"Del", eta:"48"
  }

  const persona2={
    nome:"Gino", cognome:"Fim", eta:"35"
  }

  const data=new Date()
  return (
    <div className="App">
      <h1>Prima App React {nome}</h1>
      <Componente1 {...persona1}/>
      <Componente1 {...persona2}/>
      <Componente1 nome="Mario" cognome="Dom" eta="39"></Componente1>

      <h2>
          {data.toLocaleDateString()+" "+ data.toLocaleTimeString()}
      </h2>
      <Clock timezone="-6" country="USA"></Clock>
      <Clock timezone="0" country="Italy"></Clock>
      <Clock timezone="7" country="Japan"></Clock>
    </div>
  );
}

export default App;
