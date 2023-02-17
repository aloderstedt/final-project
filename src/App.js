import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Root from './Routes/Root';
import Contact from './Routes/Contact';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
//import Alert from 'react-bootstrap/Alert';
//import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import NotFound from './Routes/NotFound';
import News from './Routes/News';
import GameDetail from './Components/GameDetail';



function App() {
  return (
    <div>
      <Container id='nav-links' className='center-stuff'>
        <ButtonGroup className='button-group-stuff'>
          <Button variant='outline-primary'><Link className='text-white' to="/Journal"><strong>Journal</strong></Link></Button>
          <Button variant='outline-success'><Link className='text-white' to="/News"><strong>News</strong></Link></Button>
          <Button variant='outline-danger'><Link className='text-white' to="/Contact"><strong>Contact</strong></Link></Button>
        </ButtonGroup>
      </Container>
      <Container>
      <Routes>
      <Route path='/' element={ <Root /> } />
      <Route path='/News' element={ <News /> } />
        <Route path='Contact' element={<Contact />} />
        <Route path='/game/:id' element={<GameDetail />} />
        <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
