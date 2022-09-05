import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App (){
  return (
        <div className="App">
          <NavBar/>
          <div className="titulo">
            <br />
          <h2>¡Bienvenidos al sitio oficial de The Three Of Quarantine!</h2>
          <br />
          <p>
            <i>
                "... rock crudo y de alma góspel: interpretaciones minimalistas que dejan entreoír un lejano traqueteo, crujen en estrépito y se silencian..."
            </i>
          </p>
          <br />
          <hr />
          </div>
            <ItemListContainer/>
        </div>
  )
}

export default App;
