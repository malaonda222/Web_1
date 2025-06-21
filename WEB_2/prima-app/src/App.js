import './App.css';
import Componente1 from './Componente1';
import Clock from './Clock';
import Persona from './Esercizi/Persona';
import { persone } from './dati/dati';
import Tabellina from './Esercizi/Tabellina';
import StampaNumeri from './Esercizi/StampaNumeri';
import Range0_20 from './Esercizi/Range0_20';
import Componente2 from './Esercizi/Componente2';
import Componente3 from './Esercizi/Componente3';


const persone2 = [{
  id: 10,
  nome: "Lisa",
  cognome: "Enol",
  eta: "30"
},{
  id: 11,
  nome: "Mario",
  cognome: "Rossi",
  eta: "45"
}];


const animali = [{
  id: 22,
  nome: "Mira",
  razza: "Persiano"
},{
  id: 23,
  nome: "Otto",
  razza: "Birmano"
}]

const invio = (nominativo) => {
  alert(nominativo + "Sto inviando i dati");
}

const stampaNome=(nome)=>{
    alert(nome)
  }
 
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

      <h1>Componente Principale</h1>
      <Componente2 nome="Alice" cognome="Bimbi" eta="39"></Componente2>
      <Componente2 nome="prova 2" cognome="Din" eta="22"/>
      <Componente2 nome="prova 3" cognome="Ricci" eta="45"/>

      {
        persone2.map(pers => {
          return <p key={pers.id} onclick={ () => invio(pers.nome)}>{pers.cognome}</p>
        })
      }

      {
        animali.map((anim, index) => {
          return <p key={index}>{anim.nome} {anim.razza}</p>
        })
      }
      <button onClick={()=>{clicca("Rob", "Del")}} className="btn btn-primary">Cliccami</button>
      <br></br>
      <br></br>
      <button onClick={invio}>INVIA</button>

      <h2>{data.toLocaleDateString()+" "+ data.toLocaleTimeString()}</h2>
      <Clock timezone="-6" country="USA"></Clock>
      <Clock timezone="0" country="Italy"></Clock>
      <Clock timezone="7" country="Japan"></Clock>

      <>
      <Componente3 onStampa={stampaNome}></Componente3>
      </>

    </div>
  );
}

export default App;
