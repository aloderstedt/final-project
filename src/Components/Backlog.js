import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useGameContext } from "../GameContext";

export const Backlog = () => {
    // const [, setGame] = useGameContext(); 
    const [games, updateGames] = useState([]);
    const [thisGame, setThisGame] = useState('');
    // const [chosenGame, updateChosenGame] = useState('');

    console.log(thisGame);

    const getBacklog = async () => {
        try {
            const response = await fetch('https://63ed97a45e9f1583bdb2b798.mockapi.io/final/backlog');
            const data = await response.json();
            console.log(data);
            updateGames(data);

        } catch (e) {
            console.log('There was an issue.', e);
        }
    }

    React.useEffect(() => {
        getBacklog();
    }, []);

    console.log(games);

    return (
        <div className="col-4 journal-lists" >
            <h1 className="center-stuff">Backlog</h1>
            <hr></hr>
            <ul>
                {
                    games.map(games => (
                        <li key={games.id}>
                            <Link to={`/backlog/${games.game.id}`} state={games}>
                                {/* When the title is clicked, we update the game context globally! */}
                                <h4 onClick={() => setThisGame(games)}>{games.game.name}</h4>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};
