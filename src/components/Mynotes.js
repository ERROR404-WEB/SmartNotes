import React from 'react'
import Notes from './Notes'
export default function Mynotes({showAlert,updateProgress}) {
  return (
    <div>
        <Notes showAlert={showAlert} updateProgress={updateProgress} />

    </div>
  )
}
