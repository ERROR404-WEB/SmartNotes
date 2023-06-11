import React, { useContext } from 'react'
import { useState } from 'react';
import noteContext from '../context/notes/noteContext'


export default function AddNote(props) {

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
        setNote({title:"",description:"",tag:""});
         props.showAlert("Note Added Successfully","success")
    }
    return (
        <div className='container my-5' style={{width:"80Vmin"}}>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange}/>
                        
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" name="description" id="description"value={note.description} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" name="tag" id="tag" value={note.tag} onChange={onChange}/>
                </div>
                
                <button type="submit"  disabled={note.title.length<5 || note.description.length<5} className="btn btn-primary " onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}
 