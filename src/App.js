import Navbar from './components/Navbar';
import ingredientBox from './components/PokemonIngredient';
import CurrysAndStews from './pages/CurrysAndStews';
import DessertsAndDrinks from './pages/DessertsAndTeas';
import Salads from './pages/Salads';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<CurrysAndStews/>}/>
        <Route path='/CurrysAndStews' element={<CurrysAndStews/>} />
        <Route path='/DessertsAndDrinks' element={<DessertsAndDrinks/>} />
        <Route path='/Salads' element={<Salads/>} />
      </Routes>

    </>
  )
}

export default App;
