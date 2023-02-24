// import { useGameContext } from "../GameContext";
import '../App.css'
import React from 'react';
import { Button, ButtonGroup } from "react-bootstrap";
import axios from "axios";
import { useLocation } from 'react-router-dom';
// import { Alert } from "react-bootstrap";

const GameDetail = () => {
    const location = useLocation();
    const game = location.state.gameResults;
    console.log(location.state.gameResults);

    const completedSubmit = (e) => {
        e.preventDefault();

        const data = { game }
        console.log(game)

        axios.post('https://63ed97a45e9f1583bdb2b798.mockapi.io/final/completedgames', data)
            .then((res) => {
                console.log(res)
                alert('Game Added!');
            })
            .catch((err) => {
                console.log(err)
            })
    };
    //sends game data to backlog list
    const backlogSubmit = (e) => {
        e.preventDefault();

        const data = { game }
        console.log(game)

        axios.post('https://63ed97a45e9f1583bdb2b798.mockapi.io/final/backlog', data)
            .then((res) => {
                console.log(res)
                alert('Game Added!')
            })
            .catch((err) => {
                console.log(err)
            })
    };

    return (
        <>
            <br></br>

            <br></br>
            <div className="detail-div col-6">
                <h1>{game.name}</h1>
                <p>Released: {game.released}</p>
                <p>Rating: {game.rating} / 5</p>
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
                <ButtonGroup>
                    <Button variant="outline-primary" onClick={completedSubmit}>Add To Completed List</Button>
                    <Button variant="outline-danger" onClick={backlogSubmit}>Add To Backlog List</Button>
                </ButtonGroup>
                <br></br>
                <br></br>
            </div>
            <br></br>
            <div className="ss-list">
                <ul>
                    {
                        game.short_screenshots.map((ss, i) => <li key={i}><img className="images" src={ss.image} alt='screenshot'></img></li>)

                    }
                </ul>
            </div>
        </>
    );
}

export default GameDetail;





