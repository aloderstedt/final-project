import { useGameContext } from "../GameContext";
import { GameNote } from "./GameNote";
import axios from "axios";
import '../App.css'
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
// import ButtonGroup from "react-bootstrap/ButtonGroup";


const CompletedGame = () => {
    //Sends game data to completed games list
    const [game] = useGameContext();
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);

    const handleChange = (e) => {
        setNote(e.target.value);
    }

    useEffect(() => {
        axios.get(`https://63ed97a45e9f1583bdb2b798.mockapi.io/final/completedgames/${game.id}/notes`)
            .then(res => {
                setNotes(res);
            })
    }, [game.id]);

    const submitForm = (e) => {
        e.preventDefault()
        axios.post(`https://63ed97a45e9f1583bdb2b798.mockapi.io/final/completedgames/${game.id}/notes`, { note: note })
            .then((res) => {
            }).catch((err) => {
                console.log(err);
            })
        setNote('')
    };

    const deleteFromCompleted = () => {
        const data = { game };
        axios.delete(`https://63ed97a45e9f1583bdb2b798.mockapi.io/final/completedgames/${game.id}`, data)
            .catch(e => {
                console.log(e)
            }) 
        alert('Game Removed!')
    };

return (
    <>
        <br></br>

        <br></br>
        <div className="detail-div col-6">
            <h1>{game.game.name}</h1>
            <p className="text-red"><strong>Released: {game.game.released}</strong></p>
            <p className="text-blue"><strong>Rating: {game.game.rating} / 5</strong></p>
            <h3>Genre(s):</h3>
            {
                 game.game.genres.map(g => `| ${g.name} | `)
            }

             <h3>Platform(s):</h3>
            {
                 game.game.platforms.map(p => `| ${p.platform.name} | `)
             }
            <br></br>
             <br></br>
            {
                 <Button variant="outline-danger" onClick={deleteFromCompleted}>Delete Game</Button> 
            }
            <br></br>
            <br></br>
            <h2>Notes:</h2>
            <div className="container">
            <form className="col-12">
                <input value={note} onChange={handleChange} type="text" placeholder="Enter a note" id="textbox">
                </input>
                <br></br>
                <br></br>
                <Button variant="outline-primary" type="submit" onClick={submitForm}>Add Note</Button>
                </form>
            </div>
            <br></br>
            <GameNote notes={notes} />
            {/* <ul>
                {
                    notes.map(notes => (
                        <h6>{ notes.data.note }</h6>
                 ))   
            }
            </ul> */}
        </div>
         <div className="ss-list">
             { <ul>
                {
                    game.game.short_screenshots.map((ss, i) => <li key={i}><img className="images" src={ss.image} alt='screenshot'></img></li>)
                 }
            </ul> }
         </div>
    </>
);
}

export default CompletedGame;
