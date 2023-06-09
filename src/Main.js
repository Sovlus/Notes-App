import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaTrash } from "react-icons/fa";
import "./App.css";

const Main = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [noteColors, setNoteColors] = useState({});

  const dodajNotatke = () => {
    if (inputValue.trim() !== "") {
      const nowa = {
        id: uuidv4(),
        content: inputValue,
      };
      const color = getRandomColor();
      setNotes([...notes, nowa]);
      setNoteColors({ ...noteColors, [nowa.id]: color });
      setInputValue("");
    }
  };

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const usun = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    const { [id]: deletedColor, ...restColors } = noteColors;
    setNoteColors(restColors);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className='Main'>
      <h1>Notes</h1>
      <div className='input'>
        <input
          type='text'
          placeholder='twoja treść'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='butt' onClick={dodajNotatke}>
          Dodaj Notatke
        </button>
      </div>
      <div className='notes'>
        {notes.map((note, index) => (
          <div
            className='note'
            key={note.id}
            style={{ backgroundColor: noteColors[note.id] || getRandomColor() }}
          >
            <p>{note.content}</p>
            <button className='trash' onClick={() => usun(note.id)}>
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
