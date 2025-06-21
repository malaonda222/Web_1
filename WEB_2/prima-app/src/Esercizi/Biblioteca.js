import React from 'react'

const Biblioteca = () => {
  return (
    <div>Biblioteca</div>
  )
}

const BookList = () => {
    console.log("Lista dei libri:");

    listaLibri.map(i =>(
        <div key={i}>
            console.log(`${libro}`)
        </div>
    ))}
        

const AddBookForm = (onAggiungi) => {
    return (
        <div>
            <p>form inserito libro</p>
            <button onClick={()=>{
                alert("libro inserito"); 
                const nuovoLibro = prompt("Inserisci il titolo del libro: ");
                listaLibri.push(nuovoLibro);
                console.log(`Libro aggiunto: "${nuovoLibro}"`);
                onAggiungi();
            }}>
                Libro aggiunto alla lista
            </button>
        </div>
    )

export default Biblioteca