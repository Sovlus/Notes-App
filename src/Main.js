import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaTrash } from "react-icons/fa";
import "./App.css";

const Main = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const dodajNotatke = () => {
    if (inputValue.trim() !== "") {
      const nowa = {
        id: uuidv4(),
        content: inputValue,
      };
      setNotes([...notes, nowa]);
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
        {notes.map((note) => (
          <div className='note' key={note.id}>
            <p>{note.content}</p>
            <button classname='trash' onClick={() => usun(note.id)}>
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
