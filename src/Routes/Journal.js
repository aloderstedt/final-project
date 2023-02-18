//import GameList from "../Components/GameList";
import { CompletedList } from '../Components/CompletedList';
import { Backlog } from '../Components/Backlog';


export default function Journal() {
    return (
        <>
            <br></br>
            <h1 className="text-warning center-stuff">The Game Journal</h1>
            <div className='journal-layout'>
                <CompletedList />
                <Backlog />
            </div>
        </>
    )
}