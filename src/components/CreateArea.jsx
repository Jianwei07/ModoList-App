import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    createdDate: new Date().toLocaleDateString(),
    createdTime: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    const updatedValue =
      name === "title" || name === "content"
        ? capitalizeFirstLetter(value)
        : value;

    setNote((prevNote) => ({
      ...prevNote,
      [name]: updatedValue,
    }));
  }

  function handleDateChange(event) {
    setNote((prevNote) => ({
      ...prevNote,
      createdDate: event.target.value,
    }));
  }

  function handleTimeChange(event) {
    setNote((prevNote) => ({
      ...prevNote,
      createdTime: event.target.value,
    }));
  }

  function submitNote(event) {
    const { title, content, createdDate, createdTime } = note;
    const createdDateTime = new Date(`${createdDate} ${createdTime}`);
    props.onAdd({
      title,
      content,
      created: createdDateTime.toLocaleString(),
    });
    setNote({
      title: "",
      content: "",
      createdDate: new Date().toLocaleDateString(),
      createdTime: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <div className="datetime-pickers">
          <label>Date:</label>
          <input
            type="date"
            name="createdDate"
            value={note.createdDate}
            onChange={handleDateChange}
          />
          <label>Time:</label>
          <input
            type="time"
            name="createdTime"
            value={note.createdTime}
            onChange={handleTimeChange}
          />
        </div>
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
