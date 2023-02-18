import React, { useState } from 'react';
import SearchResults from './SearchResults';
//import GamePanel from './GamePanel';
//import { Link } from 'react-router-dom';

const SearchComponent = () => {

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

//     const items = gameResults.map((game) => {
//         return (
//         <li key={game.id}>
//                 <Link to={`/games/${game.id}`} >
//                 <GamePanel game={game} />
// 		</Link>
// 	  </li >
//           )
//   });
    
    return (
        <div className='center-stuff'>
            <div className="search col-4">
                <br></br>
            {/* <h1 className='center-stuff'>Game Search</h1> */}
            <form className='col-3' onSubmit={onSubmit}>
                <input type="text" value={searchTerm} onChange={handleChange} />
                <br></br>
                <input type="submit" />
            </form>
            <SearchResults gameResults={gameResults} />
            </div>
        </div>
    );
}

export default SearchComponent;


