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
      data.forEach( (entry, index) => {
        elemArr.push(<ListItem
                names={entry.names}
                radioAnswers={entry.radioAnswers}
                numOfGuests={entry.numOfGuests}
                index={index}
                id={entry._id}
                key={entry._id}
                />);
      });
      setListArr(elemArr);
    })
    .catch( err => {
      console.log( err );
    });
  }

  return (
    <div className="App">
      <div className="db-render-pane">

        <div className="main-display">
          <ul className="main-list">
          {/*<li className="list-header list-item">
            <div className="row-display sub-list">
              <div className="names">
                <ul className="name-list nested-list">
                  <p>Guest Names</p>
                </ul>
              </div>
              <div className="attendance-display center nested-list">
                <p>Attending</p>
              </div>
              <div className="responses">
                <ul className="response-list nested-list">
                  <p>Responses</p>
                </ul>
              </div>
              <div className="control-header nested-list">
                <p>Edit / Delete</p>
              </div>
            </div>
          </li>*/}
          {listArr}
          </ul>
          <button onClick={getRSVPs}>GetRSVPs</button>
        </div>

      </div>
    </div>
  );
}

export default App;
