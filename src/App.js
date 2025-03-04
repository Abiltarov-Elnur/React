import uuid from "react-uuid";
import React, { useState } from "react";

function App() {
  const initNotes = [
    {
      id: uuid(),
      name: "name1",
      desc: "long description 1",
      show: false, 
    },
    {
      id: uuid(),
      name: "name2",
      desc: "long description 2",
      show: false,
    },
    {
      id: uuid(),
      name: "name3",
      desc: "long description 3",
      show: false,
    },
  ];

  const [notes, setNotes] = useState(initNotes);

  function toggleDescription(id) {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, show: !note.show } : note
      )
    );
  }

  const result = notes.map((note) => (
    <p key={note.id}>
      {note.name}
      {note.show && <i> — {note.desc}</i>}
      <button onClick={() => toggleDescription(note.id)}>
        {note.show ? "Скрыть" : "Показать"}
      </button>
    </p>
  ));

  return <div>{result}</div>;
}

export default App;
