import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useGameContext } from "../GameContext";

export const CompletedList = () => {
    // const [, setGame] = useGameContext(); 
    const [games, updateGames] = useState([]);
    const [thisGame, setThisGame] = useState('');

    console.log(thisGame)

    const getCompletedList = async () => {
        try {
            const response = await fetch('https://63ed97a45e9f1583bdb2b798.mockapi.io/final/completedgames');
            const data = await response.json();
            console.log(data);
            updateGames(data);

        } catch (e) {
            console.log('There was an issue.', e);
        }
    }

    React.useEffect(() => {
        getCompletedList();
    }, []);

    return (
        <div className="col-4 journal-lists" >
            <h1 className="center-stuff">Completed</h1>
            <hr></hr>
            <ul>
                {
                    games.map(games => (
                        <li key={games.id}>
                            <Link to={`/completed/${games.game.id}`} state={games}>
                                <h4 onClick={() => setThisGame(games)}>{games.game.name}</h4>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};