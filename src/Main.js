import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaTrash } from "react-icons/fa";

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

  const usun = (id) => {
    const updatedNotes = notes.filter((none) => notes.id !== id);
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
        <button onClick={dodajNotatke}>Dodaj Notatke</button>
      </div>
      <div className='notes'>
        {notes.map((note) => (
          <div className='note' key={note.id}>
            <p>{note.content}</p>
            <button onClick={() => usun(note.id)}>
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
