import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { MovieDetails } from './pages/MovieDetails';
import { Navigation } from './components/Navigation';
import { Cast } from './components/Cast';
import { Reviews } from './components/Reviews';

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:movieId' element={<MovieDetails/>}>
        <Route path='cast' element={<Cast/>}></Route>
        <Route path='reviews' element={<Reviews/>}></Route>
      </Route>
    </Routes>
    </>
    
  );
}
export default App;