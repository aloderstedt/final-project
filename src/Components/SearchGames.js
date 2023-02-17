import React, { useState } from 'react';
import SearchResults from './SearchResults';

const SearchGames = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [gameResults, setGameResults] = useState([])

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
        <div className="search col-2">
            <h1 className='center-stuff'>Game Search</h1>
            <form className='col-3' onSubmit={onSubmit}>
                <input type="text" value={searchTerm} onChange={handleChange} />
                <br></br>
                <input type="submit" />
            </form>
            <SearchResults gameResults={gameResults} />
        </div>
    );
}

export default SearchGames;
