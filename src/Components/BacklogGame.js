import { useGameContext } from "../GameContext";
import '../App.css'
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from "axios";

const BacklogGame = () => {
    //Sends game data to completed games list
    const [game] = useGameContext();

    const postCompleted = (e) => {
        e.preventDefault();

        const data = { game }

        axios.post('https://63ed97a45e9f1583bdb2b798.mockapi.io/final/completedgames', data.game)
            .then((res) => {
                console.log(res)
                alert('Game Moved!');
            }); 
        axios.delete(`https://63ed97a45e9f1583bdb2b798.mockapi.io/final/backlog/${game.id}`, data);
        
    };

    const deleteFromBacklog = () => {
        const data = { game };
        axios.delete(`https://63ed97a45e9f1583bdb2b798.mockapi.io/final/backlog/${game.id}`, data)
            .catch(e => {
                console.log(e)
            })
        alert('Game Removed From List!')
    };

// We have to get chips after we get fish...
// async getFishAndChips() {
//         const fish = await fetch(this.fishApiUrl).then(response => response.json());
//         this.fish = fish;

//         const fishIds = fish.map(fish => fish.id),
//             chipReqOpts = { method: 'POST', body: JSON.stringify({ fishIds }) };

//         const chips = await fetch(this.chipsApiUrl, chipReqOpts).then(response => response.json());
//         this.chips = chips;
//     }


return (
    <>
        <br></br>

        <br></br>
        <div className="detail-div col-6">
            <h1>{game.game.name}</h1>
            <p className="text-red"><strong>Released: {game.game.released}</strong></p>
            <p className="text-blue"><strong>Rating: {game.game.rating} / 5</strong></p>
            <h3>Genre(s):</h3>
            {
                 game.game.genres.map(g => `| ${g.name} | `)
            }

             <h3>Platform(s):</h3>
            {
                 game.game.platforms.map(p => `| ${p.platform.name} | `)
             }
            <br></br>
             <br></br>
            { <ButtonGroup>
                <Button variant="outline-primary" onClick={postCompleted}>Add To Completed List</Button>
                 <Button variant="outline-danger" onClick={deleteFromBacklog}>Delete Game</Button>
             </ButtonGroup> 
            }
            <br></br>
            <br></br>
        </div>
        <br></br>
         <div className="ss-list">
             { <ul>
                {
                    game.game.short_screenshots.map((ss, i) => <li key={i}><img className="images" src={ss.image} alt='screenshot'></img></li>)

                 }
            </ul> }
         </div>
    </>
);
}

export default BacklogGame;