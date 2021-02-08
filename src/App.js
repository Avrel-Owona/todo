import './App.css';
import 'bulma/css/bulma.min.css'
import Header from "./component/header/header";
import React, {useState} from "react";
import Card from "./component/card/card";

function App() {
  //Pour le tableau
  const [monState, setMonState] = useState([
    {tache: 'Créer une app web'}
  ])

  //Pour les inputs
  const [tache, setTache] = useState ()

  function creationCarte(e) {
    e.preventDefault()
    const nvTab = [{tache:tache}, ...monState]
    console.log(nvTab)
    setMonState(nvTab)
    setTache ('')
  }

  return (
      <div>
        <Header />
        <div className="container px-3" style={{width: '500px'}}>
          <h2 className="title mt-5">
            Rentrer une tache {tache}
          </h2>
          <form onSubmit={creationCarte}>
            <div className="field">
              <div className="control">
                <label htmlFor="tache" className="label">Tache </label>
                <input
                    value={tache}
                    className="input"
                    type="text"
                    id="tache"
                    placeholder="Tache"
                    onChange={e => setTache(e.target.value)}
                />
              </div>
            </div>
            <div className="control">
              <button
                  className="button is-link"
                  type="submit"
              >
                Créer une tache pour Leonard de vinci
              </button>
            </div>
          </form>
          {/*Va permettre de retourer un nouveau tableau avec des informations différentes*/}
          {
            monState.map((todo, index) => (

                  <Card
                      key = {index}
                      tache = {todo.tache}
                      divDel={()=>{
                        let delCard = [...monState].filter( (element, ind) => index!==ind);
                        setMonState(delCard)
                      }}
                  />
            ))
          }
        </div>
      </div>
  );
}

export default App;
