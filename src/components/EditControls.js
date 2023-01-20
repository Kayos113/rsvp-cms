import React from "react";
import save from "../images/floppy-disk.png";
import cancel from "../images/cancel.png";

function EditControls(props) {
  return(
    <div className="controls nested-list border">
      <img src={cancel} name={props.id} onClick={props.onCancel} alt="Cancel" />
      <img src={save} name={props.id} onClick={props.onSave} alt="Save" />
    </div>
  )
}

export default EditControls;
