import './App.css';
import Componente1 from './Componente1';
import Clock from './Clock';
import Persona from './Esercizi/Persona';
import { persone } from './dati/dati';
import Tabellina from './Esercizi/Tabellina';
import StampaNumeri from './Esercizi/StampaNumeri';
import Range0_20 from './Esercizi/Range0_20';

function App() {
  let nome="Roberto";
  
  const data=new Date();
  const clicca=(nome, cognome)=>{

    alert("Cliccato da "+ nome+" "+cognome);
  }
  return (
    <div className="App">
      <h1>Prima App React {nome}</h1>
      <Persona nome={persone[0].nome} cognome={persone[0].cognome} eta={persone[0].eta}></Persona>
      <Persona nome={persone[1].nome} cognome={persone[1].cognome} eta={persone[1].eta}></Persona>
      <Persona nome={persone[2].nome} cognome={persone[2].cognome} eta={persone[2].eta}></Persona>
      
      {persone.map((persona) => {
        return <Persona key={persona.id}{...persona}></Persona>})}
      
      {persone.map((persona) => {
        return <Componente1 key={persona.id}{...persona} onCliccami></Componente1>
      })}

      <Tabellina num="3"></Tabellina>
      
      <StampaNumeri></StampaNumeri>

      <Range0_20></Range0_20>

      <button onClick={()=>{clicca("Rob", "Del")}} className="btn btn-primary">Cliccami</button>
      
      <h2>{data.toLocaleDateString()+" "+ data.toLocaleTimeString()}</h2>
      <Clock timezone="-6" country="USA"></Clock>
      <Clock timezone="0" country="Italy"></Clock>
      <Clock timezone="7" country="Japan"></Clock>
    </div>
  );
}

export default App;
