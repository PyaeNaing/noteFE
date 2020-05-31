import React from 'react';
import axios from 'axios';
import NotePopup from './NotePopup';
import '../styles/Notes.css';
import '../styles/NotePopup.css';

const Notes = (props) => {

    const options = {
        withCredentials: true
    };

    const [allNotes, setAllNotes] = React.useState([]);
    const [title, setTitle] = React.useState("");
    const [notes, setNotes] = React.useState("");
    const [userCount, setUserCounter] = React.useState("");

    React.useEffect(getNotes, []);

    function getNotes() {
        axios.get('/note/getAllNotes', options)
            .then((res) => {
                setAllNotes(res.data)
            })
            .catch(err => { console.log(err) });
        axios.get('/note/getClient', options)
            .then((res) => {
                console.log(res.data);
                setUserCounter(res.data);
            })
            .catch(err => { console.log(err) });
    }

    const createNote = (e) => {
        e.preventDefault();
        if (title !== "" & notes !== "") {
            axios.post("/note/createNotes", {
                title,
                notes
            }, options).then(res => {
                setTitle("");
                setNotes("");
                getNotes();
                console.log(res);
            }).catch(err => console.log(err));
        }
    }

    function NoteDisplay(props) {
        return (
            <div className="notes">
                {allNotes.map((note, i) => (
                    <div className="container">
                        <div className="box">
                            <div className="text">
                                <h4>{note.title}</h4>
                                <p>{note.notes}</p>
                            </div>
                        </div>
                        <NotePopup title={note.title} notes={note.notes} _id={note._id} update={getNotes} />
                    </div>
                ))}
            </div>
        )
    }

    return (

        <div className="notepage">
            <header className="header">
                <h3 className="title">
                    React Note App
                    <h4 className="subtitle">
                    </h4>
                </h3>
            </header>

            <div className="bar">

                <form onSubmit={createNote}>
                    <label> Title </label>
                    <br />
                    <input type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)} />
                    <br />
                    <label> Notes </label>
                    <br />
                    <input type="text" value={notes} placeholder="notes" onChange={(e) => setNotes(e.target.value)} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>

            </div>

            <NoteDisplay />

        </div>

    )
}

export default Notes;