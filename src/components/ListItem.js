import React from "react";
import "./css/ListItem.css";

function ListItem(props) {
  console.log(props);

  function nameList() {
    let nameArr = [];
    props.names.forEach( (name, index) => {
      nameArr.push(<li key={"name"+props.index+index}>{name}</li>);
    });
    return nameArr;
  }

  function responseList() {
    let responseArr = [];
    props.radioAnswers.forEach( (response, index) => {
      responseArr.push(<li key={"name"+props.index+index}><p className="response-name">{response.name}</p><p className="response-value">{response.value}</p></li>)
    });
    return responseArr;
  }

  return (
    <li className="list-item">
      <div className="row-display sub-list">
        <div className="names">
          <ul className="name-list nested-list">
            {nameList()}
          </ul>
        </div>
        <div className="responses">
          <ul className="response-list nested-list">
            {responseList()}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default ListItem;
