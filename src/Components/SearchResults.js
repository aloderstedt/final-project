import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ gameResults }) => { // destructure the props for easier access

    return (
        <div className="col-12">
            <ul>
                {
                    gameResults.map(gameResults => (
                        <li key={gameResults.id}>
                            <Link to={`/searchgame/${gameResults.id}`} state={{ gameResults }}>
                                <h4 >{gameResults.name}</h4>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default SearchResults;
