import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';

export default function Notes() {

  const context = useContext(noteContext)
  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes();
  }, [])
  return (
    <div>
      <AddNote/>
      <div className="container my-3">
      <h6>My Notes</h6>
      
      <div className="row">
        {notes.map((note) => {
          return <NoteItem note={note} />
        })}
      </div>
      </div>
    </div>
  )
}
