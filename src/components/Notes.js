import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

export default function Notes(props) {

  const context = useContext(noteContext)
  const { notes, getNotes,editNote } = context;
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    }
    else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [])
  const ref = useRef(null)
  const refClose = useRef(null)

  const [note, setNote] = useState({ id:"",etitle: "", edescription: "", etag: "" })

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }

  const handleClick = (e) => { 

    editNote (note.id,note.etitle,note.edescription,note.etag);
    
    refClose.current.click();
     props.showAlert("Note updated Successfully","success")
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <div>
      
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" disabled={note.etitle.length<5 || note.edescription.length<5} className="btn btn-primary" >Update Note</button>
            </div>
          </div>
        </div>
      </div>



      <AddNote showAlert={props.showAlert}/>
      <div className="container my-3">
        <h6>My Notes</h6>

        <div className="row">
          {notes.length === 0 && 'No notes to display'}
          {notes.map((note) => {
            return <NoteItem key ={ note._id} note={note} updateNote={updateNote} showAlert={props.showAlert}/>
          })}
        </div>
      </div>
    </div>
  )
}
