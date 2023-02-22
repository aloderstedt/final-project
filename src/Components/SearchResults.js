import React from 'react';
import { Link } from 'react-router-dom';
import { useGameContext } from '../GameContext';
// import GameDetail from './GameDetail';

const SearchResults = ({ gameResults }) => { // destructure the props for easier access
    const [, setGame] = useGameContext()

    return (
        <div className="col-12">
            <ul>
                {
                    gameResults.map(gameResults => (
                        <li key={gameResults.id}>
                            <Link to={{
                                pathname: `/searchgame/${gameResults.id}`
                            }}>
                                {/* When the title is clicked, we update the game context globally! */}
                                <h4 onClick={() => setGame(gameResults)}>{gameResults.name}</h4>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default SearchResults;
