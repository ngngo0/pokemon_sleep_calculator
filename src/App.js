import CurrysAndStews from './pages/CurrysAndStews';
import DessertsAndDrinks from './pages/DessertsAndTeas';
import Salads from './pages/Salads';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<CurrysAndStews/>} />
        <Route path='DessertsAndDrinks' element={<DessertsAndDrinks/>} />
        <Route path='Salads' element={<Salads/>} />
      </Route>
    </Routes>
  )
}

export default App;
