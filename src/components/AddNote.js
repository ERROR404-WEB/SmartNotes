import React, { useContext } from 'react'
import { useState } from 'react';
import noteContext from '../context/notes/noteContext'


export default function AddNote() {

    const context = useContext(noteContext)
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });


    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
       
    }
    const handleClick = (e) => {
        e.preventDefault();
        addNote(
            note.title,
            note.description,
            note.tag
        );
    }
    return (
        <div className='container my-5' style={{width:"50%"}}>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title"  onChange={onChange}/>
                        
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" name="description" id="description" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" name="Tag" id="Tag" onChange={onChange}/>
                </div>
                
                <button type="submit" className="btn btn-primary " onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}
