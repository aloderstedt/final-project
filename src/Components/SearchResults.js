import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = (props) => {

    return (
        <div className="col-12">
            <ul>
                {
                    props.gameResults.map(game => (
                        <li key={game.id}>

                            <Link to={{
                                pathname: `/game/${game.name}`,
                                gameProps: {
                                    game: game
                                }
                            }} state={{ game: props }}>
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