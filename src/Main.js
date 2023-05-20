import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaTrash } from "react-icons/fa";

const Main = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setImportValue] = useState("");

  const dodajNotatke = () => {
    if (inputValue.trim() !== "") {
      const nowa = {
        id: uuidv4(),
        content: inputValue,
      };
    }
  };
};

export default Main;
