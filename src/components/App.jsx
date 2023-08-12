import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import ThemeChanger from "./ThemeChanger";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentTheme, setCurrentTheme] = useState("light"); // Initial theme

  // Load notes from local storage when the component mounts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("modolist-notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Save notes to local storage whenever the notes state changes
  useEffect(() => {
    localStorage.setItem("modolist-notes", JSON.stringify(notes));
  }, [notes]);

  // Update the theme
  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className={`app ${currentTheme}`}>
      <Header currentTheme={currentTheme} />
      <CreateArea onAdd={addNote} />
      <ThemeChanger onThemeChange={handleThemeChange} />
      {/* // Inside App.jsx */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            currentTheme={currentTheme} // Pass the current theme
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
