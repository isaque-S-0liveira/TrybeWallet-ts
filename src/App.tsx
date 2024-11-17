import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route index element={ <Login /> } />
      <Route path="*" element={ <h1>Not Found</h1> } />
    </Routes>
  );
}

export default App;
