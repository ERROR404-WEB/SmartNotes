import NoteContext from "./noteContext";
import { useState } from "react";

const host = "https://smart-notes-backend.onrender.com";

const NoteState = (props) => {
 

  const initialNotes = []
  const [notes, setNotes] = useState(initialNotes)

  //fetch all notes

  const getNotes = async () => {
    //api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
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

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
     
    });

    
    setNotes(newNotes);

  }

  //delete node 

  const addNote = async(title, description, tag) => {

    //api call

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();

    setNotes(notes.concat({ title, description, tag }));

  }


  //edit node

  const editNote = async(id, title, description, tag) => { 

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json)

     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);



  }



  return (
    <NoteContext.Provider value={{ notes, deleteNote, editNote, addNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;