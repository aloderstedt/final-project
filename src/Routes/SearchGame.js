import React, { useState } from 'react';
import GameDetail from '../Components/GameDetail';
import SearchResults from '../Components/SearchResults';
import { Button } from 'react-bootstrap';
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
        <>
            <br></br>
            <h1 className='heading center-stuff'>Search Any Game</h1>
            <div className="search">
                <form onSubmit={onSubmit}>
                    <input className='form-control' type="text" value={searchTerm} onChange={handleChange} />
                    <br></br>
                    <Button variant='outline-primary' type="submit" >Search</Button>
                </form>
                <SearchResults gameResults={gameResults} updateSelected={setSelectedGame} />
                {selectedGame && <GameDetail data={selectedGame} />}
        </div>
    </>
    );
}

export default SearchGame;


