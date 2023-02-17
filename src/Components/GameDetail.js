import React from "react";
import { useLocation } from "react-router-dom";

const GameDetail = () => {

    const location = useLocation()
    const game = location.state
    console.log(game);

    return (

        <div className="text-light">
        <br></br>    
            <h1>{game.game.gameResults[0].name}</h1>
            {/* <p>Released: {game.released}</p> */}
            <h3>Genre(s):</h3>
            {/* {
                game.from.map(g => `${g.name} | `)
            }

            <h3>Platform(s):</h3>
            {
                game.platforms.map(p => `${p.platform.name} | `)
            }

            <ul>
                {
                    game.short_screenshots.map(ss => <li><img src={ss.image} alt='screenshot'></img></li>)
                }
            </ul> */}
        </div>
    );
}

export default GameDetail;

