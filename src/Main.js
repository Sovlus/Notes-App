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
};

export default Main;
