import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  const { title, content, onDelete, id, currentTheme } = props;

  function handleClick() {
    onDelete(id);
  }

  return (
    <div className={`note note-${currentTheme}`}>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
