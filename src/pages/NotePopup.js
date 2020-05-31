import React from 'react';
import Popup from "reactjs-popup";
import axios from 'axios';
import '../styles/NotePopup.css';

function NotePopup(props) {

    const [notes, setNotes] = React.useState(props.notes);
    const [id, setId] = React.useState(props._id);

    return (
        <Popup trigger={<button className="button"> View </button>} modal>
            {close => (
                <div className="modal">
                    <a className="close" onClick={close}>
                        &times;
        </a>
                    <div className="header"> {props.title} </div>
                    <textarea type="text" className="content" value={notes} onChange={(e) => setNotes(e.target.value)} />

                    <div className="actions">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                if(notes !== ""){

                                    axios.post("/note/editNotes", {
                                        id,
                                        notes
                                    }).then(res => {
                                        props.update();
                                        console.log(res);
                                    }).catch(err => console.log(err));
                                }
                                else{
                                    alert("no empty notes!")
                                }
                                close();
                            }}
                        >
                            
                            submit edit
                        </button>
                        <button
                            onClick={() => {
                                console.log("modal closed ");
                                close();
                            }}
                        >
                            
                            close modal
                         </button>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default NotePopup;