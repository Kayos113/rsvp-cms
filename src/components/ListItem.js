import React, { useState } from "react";
import MainControls from "./MainControls";
import EditControls from "./EditControls"

import check from "../images/check.png";
import cross from "../images/delete-button.png";
import arrow from "../images/downward-arrow.png";

import axios from "axios";

import "./css/ListItem.css";

function ListItem(props) {

  let tempNameHolder = props.names;
  const [arrowState, setArrowState] = useState(false);
  const [editState, setEditState] = useState(false);
  const [attendanceState, setAttendanceState] = useState(parseAttendance());
  const [nameArr, setNameArr] = useState(tempNameHolder);
  const id = props.id;

  function parseAttendance() {
    if(props.radioAnswers[0].value==="Graciously Attend") {
      return true;
    }
    return false;
  }

  function nameList() {
    let elemArr = [];
    nameArr.forEach( (name, index) => {
      let elem = (
        editState ?
        <li key={"name-edit"+props.index+index}><input type="text" id={index} placeholder={name} onChange={onTextInput}/></li> :
        <li key={"name"+props.index+index}><p className="name-display">{name}</p></li>
      );
      elemArr.push(elem);
    });
    return elemArr;
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

  function onEdit(event) {
    setEditState(!editState);
  }

  function onCancel(event) {
    setAttendanceState(parseAttendance());
    setNameArr(props.names);
    onEdit(event);
  }

  function onSave(event) {
    console.log(event.target.name);

    onEdit(event);
  }

  function onDelete(event) {
    const url = "https://hunterknappwedding.herokuapp.com/rsvp/"+id;
    axios.delete(url)
    .then( res => {
      console.log(res);
    })
    .catch( err => {
      console.log( err );
    });
  }

  function onTextInput(event) {
    const { id, value } = event.target;
    let tempArr = [...nameArr];
    tempArr[id] = value;
    setNameArr(tempArr);
  }

  function partyControlClick(event) {
    setArrowState(!arrowState);
  }

  function attendanceSliderClicked() {
    setAttendanceState(!attendanceState);
  }

  return (
    <li className="list-item">
      <div className="row-display party-header">
        <img className={"party-control arrow-"+arrowState} src={arrow} alt={props.names[0]+" party control"} onClick={partyControlClick}/>
        <h3>{props.names[0]} - Party of {editState ? <input type="number" placeholder={props.numOfGuests} /> : props.numOfGuests}</h3>
      </div>
      <div className={arrowState+" row-display sub-list"}>
        <div className="names">
          <ul className="name-list nested-list">
            {nameList()}
          </ul>
        </div>
        <div className="attendance-display nested-list border">
          { //START OF ATTENDANCE
            editState ? // True - Editing
            <div className="attendance-slider-container slider" onClick={attendanceSliderClicked}>
              <div className={"attendance-slider-circle slider-"+attendanceState}>
                <img src={ attendanceState ? check : cross} alt=""/>
              </div>
            </div> : // False - Not Editing
            <img src={ attendanceState ? check : cross } className={ attendanceState ? "check" : "cross" } alt={ attendanceState ? "YES" : "NO"} />
          //END OF ATTENDANCE
        }
        </div>
        <div className="responses border">
          <ul className="response-list nested-list">
            {responseList()}
          </ul>
        </div>
        {
        editState ?
        <EditControls id={id} onSave={onSave} onCancel={onCancel} /> :
        <MainControls id={id} onEdit={onEdit} onDelete={onDelete} />
        }
      </div>
    </li>
  )
}

export default ListItem;
