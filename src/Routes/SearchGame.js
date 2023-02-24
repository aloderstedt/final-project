import React, { useState } from 'react';
import GameDetail from '../Components/GameDetail';
import SearchResults from '../Components/SearchResults';
//import GamePanel from './GamePanel';
//import { Link } from 'react-router-dom';

const SearchGame = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [gameResults, setGameResults] = useState([])
    const [selectedGame, setSelectedGame] = useState(null);

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let slug = searchTerm.split(' ').join('-').toLowerCase()

        setGameResults([])
        fetch(`https://rawg.io/api/games?key=bdd2d97f6aff4685be794f9b75bf3adf&search=${slug}`)
            .then(resp => resp.json())
            .then(({ results }) => {
                results === undefined ? alert('no games found') : setGameResults(results);
                console.log(results);
            })
        setSearchTerm("")
    }

    return (
        <div className='center-stuff'>
            <div className="search col-4">
                <br></br>
                <form className='' onSubmit={onSubmit}>
                    <input className='input-css' type="text" value={searchTerm} onChange={handleChange} />
                    <br></br>
                    <input type="submit" />
                </form>
                <SearchResults gameResults={gameResults} updateSelected={setSelectedGame} />
                {selectedGame && <GameDetail data={selectedGame} />}
            </div>
        </div>
    );
}

export default SearchGame;


