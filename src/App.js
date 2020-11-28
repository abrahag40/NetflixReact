import './App.css';
import './Row.css'
import Row from './Row'
import Request from './Requests'
import Banner from './Banner'
import Navbar from './Nav'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Banner />
      <div className="App container">
        <Row title="Tendencias" isLargeRow fetchUrl={Request.frtchTrending}/>
        <Row title="Netlix Originals" fetchUrl={Request.fetchNetflixOriginals} />
        <Row title="Acción" fetchUrl={Request.fetchActionMovies}/>
        <Row title="Comedia" fetchUrl={Request.fetchComedyMovies}/>
        <Row title="Horror" fetchUrl={Request.fetchHorrorMovies}/>
        <Row title="Romance" fetchUrl={Request.fetchRomanceMovies}/>
      </div>
    </div>
  );
}

export default App;
