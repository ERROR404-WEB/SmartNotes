import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

  const initialNotes = []
  const [notes, setNotes] = useState(initialNotes)

  //fetch all notes

  const getNotes = async () => {
    //api call
    const response = await fetch("http://localhost:5000/api/notes/fetchallnotes", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4MmZjYzFiNWViMGUxMzRmODE0N2ExIn0sImlhdCI6MTY4NjMwNTk4NX0.FvKnczWEDdH31G7NU1PG_W4SIilUUuyD0J6zBz027po"
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);

  }
  //add node 

  const deleteNote = async (id) => {
    console.log("deleting the note with id " + id);
    const newNotes = notes.filter((note) => { return note._id !== id });

    const response = await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4MmZjYzFiNWViMGUxMzRmODE0N2ExIn0sImlhdCI6MTY4NjMwNTk4NX0.FvKnczWEDdH31G7NU1PG_W4SIilUUuyD0J6zBz027po"
      },
     
    });


    setNotes(newNotes);

  }

  //delete node 

  const addNote = async(title, description, tag) => {

    //api call

    const response = await fetch(`http://localhost:5000/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4MmZjYzFiNWViMGUxMzRmODE0N2ExIn0sImlhdCI6MTY4NjMwNTk4NX0.FvKnczWEDdH31G7NU1PG_W4SIilUUuyD0J6zBz027po"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();

    setNotes(notes.concat({ title, description, tag }));

  }


  //edit node

  const editNote = (id, title, description, tag) => { }



  return (
    <NoteContext.Provider value={{ notes, deleteNote, editNote, addNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;