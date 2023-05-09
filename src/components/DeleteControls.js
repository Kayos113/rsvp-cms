import React from "react";
import confirm from "../images/check.png";
import cancel from "../images/cancel.png";

function EditControls(props) {
  return(
    <div className="controls nested-list border">
      <img src={confirm} name={props.id} onClick={props.onConfirm} alt="Confirm" />
      <img src={cancel} name={props.id} onClick={props.onCancel} alt="Cancel" />
    </div>
  )
}

export default EditControls;
