import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Root from './Routes/Root';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import NotFound from './Routes/NotFound';
import News from './Routes/News';
import GameDetail from './Components/GameDetail';
import SearchGame from './Routes/SearchGame';
import CompletedGame from './Components/CompletedGame';
import BacklogGame from './Components/BacklogGame';




function App() {
  return (
    <div>
      <Container id='nav-links' className='center-stuff'>
        <ButtonGroup className='button-group-stuff'>
          <Button variant='outline-primary'><Link className='text-white' to="/journal"><strong>Journal</strong></Link></Button>
          <Button variant='outline-success'><Link className='text-white' to="/news"><strong>News</strong></Link></Button>
          <Button variant='outline-danger'><Link className='text-white' to="/searchgame"><strong>Search Game</strong></Link></Button>
        </ButtonGroup>
      </Container>
      <Container>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/news' element={<News />} />
          <Route path='/searchgame' element={<SearchGame />} />
          <Route path='/searchgame/:id' element={<GameDetail />} />
          <Route path='/completed/:id' element={<CompletedGame />} />
          <Route path='/backlog/:id' element={<BacklogGame />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
