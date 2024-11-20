import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route index element={ <Login /> } />
      <Route path="/carteira" element={ <h1>Carteira</h1> } />
      <Route path="*" element={ <h1>Not Found</h1> } />
    </Routes>
  );
}

export default App;
