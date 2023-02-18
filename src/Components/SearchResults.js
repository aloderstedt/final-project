import React from 'react';
import { Link } from 'react-router-dom';
// import GameDetail from './GameDetail';

const SearchResults = (props) => {

    return (
        <div className="col-12">
            <ul>
                {
                    props.gameResults.map(game => (
                        <li key={game.id}>
                            {console.log(game.id)}
                            <Link to={{
                                pathname: `/searchgame/${game.id}`,
                                gameProps: {
                                    game: game
                                }
                            }}>
                                <h6>{game.name}</h6>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default SearchResults;
