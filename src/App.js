import React, {useState} from "react";
import axios from "axios";
import './App.css';

function App() {

  const [nameArr, setNameArr] = useState([]);

  function getRSVPs() {
    axios({
      method: "get",
      url: "https://hunterknappwedding.herokuapp.com/rsvp",
      responseType: 'json'
    })
    .then( res => {
      const {data} = res;
      const namesArr = [];
      data.forEach( entry => {
        entry.names.forEach( name => {
          namesArr.push(name);
        });

      });
      console.log(namesArr);
      setNameArr(namesArr);
    })
    .catch( err => {
      console.log( err );
    });
  }

  return (
    <div className="App">
      <div className="db-render-pane">
        <ul>
          {nameArr}
        </ul>
        <button onClick={getRSVPs}>GetRSVPs</button>
      </div>
    </div>
  );
}

export default App;
