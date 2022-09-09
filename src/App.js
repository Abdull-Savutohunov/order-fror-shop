import Order from './pages/Order';
import './style/App.css';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Order/>} />
      
    </Routes>
  );
}

export default App;
