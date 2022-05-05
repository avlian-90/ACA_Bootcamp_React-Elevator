import House from './components/House';
import Elevator from './components/Elevator';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="building">
        <House />
        <Elevator />
        <House />
      </div>
    </div>
  );
}

export default App;
