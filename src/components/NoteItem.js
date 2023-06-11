import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'


export default function NoteItem({ note,updateNote,showAlert }) {
    const context = useContext(noteContext)
    const { deleteNote } = context;

    const handleDelete = (id) => {
        deleteNote(id);
       showAlert("Note Deleted Successfully","success")
    }
    return (
        <div className='col-md-3 my-3 '>
            <div className="card " style={{boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.100)"}}>

                <h6 className="card-header">{note.title}</h6>
                <div className="card-body">
                    
                    <p className="card-text">{note.description}</p>
                  
                    <div className="d-flex ">
                    <i className="fa-solid fa-trash  fa-xs" onClick={()=>{ handleDelete(note._id);}}></i>
                    <div className="mx-auto"></div>
                    <i className="fa-solid fa-pen-to-square fa-xs"  onClick={()=>{updateNote(note)}}></i>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}
