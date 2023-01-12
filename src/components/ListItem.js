import React from "react";
import check from "../images/check.png";
import cross from "../images/delete-button.png";
import pencil from "../images/pencil.png";
import trash from "../images/bin.png";
import "./css/ListItem.css";

function ListItem(props) {

  function parseAttendance() {
    if(props.radioAnswers[0].value==="Graciously Attend") {
      return true;
    }
    return false;
  }

  function nameList() {
    let nameArr = [];
    props.names.forEach( (name, index) => {
      nameArr.push(<li key={"name"+props.index+index}><p className="name-display">{name}</p></li>);
    });
    return nameArr;
  }

  function responseList() {
    let responseArr = [];
    props.radioAnswers.forEach( (response, index) => {
      if(index!==0) {
        responseArr.push(<li key={"response"+props.index+index}><p className="response-name">{response.name}</p><p className="response-value">{response.value}</p></li>)
      } else {

      }
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
        <div className="attendance-display nested-list center">
          <img src={ parseAttendance() ? check : cross } className={ parseAttendance() ? "check" : "cross" } alt={ parseAttendance() ? "YES" : "NO"} />
        </div>
        <div className="responses">
          <ul className="response-list nested-list">
            {responseList()}
          </ul>
        </div>
        <div className="controls nested-list">
          <img src={pencil} value={props.id} alt="Edit" />
          <img src={trash} value={props.id} alt="Delete" />
        </div>
      </div>
    </li>
  )
}

export default ListItem;
