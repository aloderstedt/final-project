import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import axios from "axios";
import '../App.css'
import { useCallback, useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";

const CompletedGame = () => {

    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);



    const location = useLocation();
    const game = location.state.game;
    const gameId = location.state.id;
    const data = location.state;

    const handleChange = (e) => {
        setNote(e.target.value);
    }

    const notesData = useCallback(async () => {
        const noteData = await fetch(`https://63ed97a45e9f1583bdb2b798.mockapi.io/final/completedgames/${gameId}/notes`)
            .then(noteData => noteData.json())
        setNotes(noteData);
    }, [gameId,])

    useEffect(() => {
        notesData()
            .catch(console.error);;
    }, [notesData])

    console.log(notes);

    const submitForm = (e) => {
        if (note !== '') {
            e.preventDefault()
            axios.post(`https://63ed97a45e9f1583bdb2b798.mockapi.io/final/completedgames/${gameId}/notes`, { note: note })
                .catch((err) => {
                    console.log(err);
                })
            alert('Note Added!');
            setNote('')
        } else {
            alert('Cannot Add An Empty Note!')
        }
    };

    const deleteNote = () => {
        console.log(notes);
        axios.delete(`https://63ed97a45e9f1583bdb2b798.mockapi.io/final/completedgames/${gameId}/notes/${notes.id}`, { notes })
            .catch(e => {
                console.log(e)
            })
        alert('Note Deleted!')
    }

    // const editNote = () => {
        
    // }

    const deleteFromCompleted = () => {

        axios.delete(`https://63ed97a45e9f1583bdb2b798.mockapi.io/final/completedgames/${gameId}`, data)
            .catch(e => {
                console.log(e)
            })
        alert('Game Removed From List!')
    };

    return (
        <>
            <br></br>
            <br></br>
            <div className="detail-div col-8">
                <h1>{game.name}</h1>
                <p className="text-red"><strong>Released: {game.released}</strong></p>
                <p className="text-blue"><strong>Rating: {game.rating} / 5</strong></p>
                <h3>Genre(s):</h3>
                {
                    game.genres.map(g => `| ${g.name} | `)
                }

                <h3>Platform(s):</h3>
                {
                    game.platforms.map(p => `| ${p.platform.name} | `)
                }
                <br></br>
                <br></br>
                {
                    <Button variant="outline-danger" onClick={deleteFromCompleted}>Delete Game</Button>
                }
                <br></br>
                <br></br>
                <h2>Notes:</h2>
                <div className="form-group">
                    <form className="col-12">
                        <textarea rows={3} className="form-control" value={note} onChange={handleChange} type="text" placeholder="Enter a note" id="textbox">
                        </textarea>
                        <br></br>
                        <br></br>
                        <Button variant="outline-primary" type="submit" onClick={submitForm}>Add Note</Button>
                    </form>
                    <br></br>
                    {<>

                    </>
                    }
                </div>
                <br></br>
                <div className="notes">
                    {<ol>
                        {
                            notes.map((n, i) =>
                                <li key={i}><p className="notes-text"><em>{n.note}</em>
                                    <IconButton onClick={deleteNote} aria-label="delete"><DeleteIcon /></IconButton>
                                    <IconButton aria-label="edit"><EditIcon /></IconButton></p></li>)
                        }
                    </ol>}
                </div>
            </div>
            <br></br>
            <div className="ss-list">
                {<ul>
                    {
                        game.short_screenshots.map((ss, i) => <li key={i}><img className="images" src={ss.image} alt='screenshot'></img></li>)
                    }
                </ul>}
            </div>
        </>
    );
}

export default CompletedGame;
