import React from "react";

function ListItem(props) {

  function nameList() {
    let nameArr = [];
    props.names.forEach( name => {
      nameArr.push(<li>{name}</li>);
    });
    return nameArr;
  }



  return (
    <div className="list-item">
      <div className="row-display sub-list">
        <div className="names">
          <ul className="name-list nested-list">
            {nameList()}
          </ul>
        </div>
        <div className="responses">
          <ul className="response-list nested-list">
            <li>{props.radioAnswers.attendance}</li>
            <li>{props.radioAnswers.arrival}</li>
            <li>{props.radioAnswers.accomodations}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ListItem;
