import '../App.css'
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from "axios";

const BacklogGame = () => {
    const location = useLocation();
    const game = location.state.game;
    const gameId = location.state.id;
    const data = location.state;
    console.log(location.state);

    const postCompleted = (e) => {
        e.preventDefault();

        axios.post('https://63ed97a45e9f1583bdb2b798.mockapi.io/final/completedgames', data)
            .then((res) => {
                console.log(res)
                alert('Game Moved!');
            });
        axios.delete(`https://63ed97a45e9f1583bdb2b798.mockapi.io/final/backlog/${gameId}`, data);

    };

    const deleteFromBacklog = () => {

        axios.delete(`https://63ed97a45e9f1583bdb2b798.mockapi.io/final/backlog/${gameId}`, data)
            .catch(e => {
                console.log(e)
            })
        alert('Game Removed From List!')
    };

    return (
        <>
            <br></br>

            <br></br>
            <div className="detail-div-two col-8">
                <h1>{game.name}</h1>
                <p className="text-red"><strong>Released: {game.released}</strong></p>
                <p className="text-blue"><strong>Rating: {game.rating} / 5</strong></p>
                <h3>Genre(s):</h3>
                {
                    game.genres.map(g => `| ${g.name} | `)
                }

                <h3>Platform(s):</h3>
                {
                    game.platforms.map(p => `| ${p.platform.name} | `)
                }
                <br></br>
                <br></br>
                {<ButtonGroup>
                    <Button variant="outline-primary" onClick={postCompleted}>Add To Completed List</Button>
                    <Button variant="outline-danger" onClick={deleteFromBacklog}>Delete Game</Button>
                </ButtonGroup>
                }
                <br></br>
                <br></br>
            </div>
            <br></br>
            <div className="ss-list">
                {<ul>
                    {
                        game.short_screenshots.map((ss, i) => <li key={i}><img className="images" src={ss.image} alt='screenshot'></img></li>)
                    }
                </ul>}
            </div>
        </>
    );
}

export default BacklogGame;