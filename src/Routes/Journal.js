//import GameList from "../Components/GameList";
import { CompletedList } from '../Components/CompletedList';
import SearchGames from '../Components/SearchGames';
import { Backlog } from '../Components/Backlog';


export default function Journal() {
    return (
        <>
            <h1 className="text-primary center-stuff">The Game Journal</h1>
            <div className='journal-layout'>
            <div>
                <SearchGames />
            </div>
            <div>
                <CompletedList />
            </div>
            <div>
                <Backlog />
            </div>
            </div>
        </>
    )
}