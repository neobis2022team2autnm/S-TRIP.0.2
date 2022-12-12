import React from "react";

import "./style.scss";

function Modal(props) {
  return (
    <div
      className="task-popap"
      onClick={() => (props.onClose ? props.onClose() : "")}
    >
      <div
        className="task-popap_content custom-scroll"
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
