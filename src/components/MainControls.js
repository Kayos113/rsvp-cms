import React from "react";
import pencil from "../images/pencil.png";
import trash from "../images/bin.png";

function MainControls(props) {
  return(
    <div className="controls nested-list border">
      <img src={pencil} name={props.id} onClick={props.onEdit} alt="Edit" />
      <img src={trash} name={props.id} onClick={props.onDelete} alt="Delete" />
    </div>
  )
}

export default MainControls;
