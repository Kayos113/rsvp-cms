import React, {useState} from "react";
import ListItem from "./components/ListItem";
import axios from "axios";
import './App.css';

function App() {

  const [listArr, setListArr] = useState([]);

  function getRSVPs() {
    axios({
      method: "get",
      url: "https://hunterknappwedding.herokuapp.com/rsvp",
      responseType: 'json'
    })
    .then( res => {
      const {data} = res;
      const elemArr = [];
      data.forEach( entry => {

        elemArr.push(<ListItem
                names={entry.names}
                radioAnswers={entry.radioAnswers}
                />);

      });
      console.log(elemArr);
      setListArr(elemArr);
    })
    .catch( err => {
      console.log( err );
    });
  }

  return (
    <div className="App">
      <div className="db-render-pane">
        <ul className="main-list">
          {listArr}
        </ul>
        <button onClick={getRSVPs}>GetRSVPs</button>
      </div>
    </div>
  );
}

export default App;
