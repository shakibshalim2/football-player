import logo from './logo.svg';
import './App.css';
import playerData from './fakeData/data.json';
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import Cart from './components/Player/Cart/Cart';
function App() {
  const [player, setPlayer] = useState([])
const [cart, setCart] = useState([]);


  useEffect(() => {
setPlayer(playerData);
  }, []);

  const handlePlayer = (player) => {
  const newPlayer = [...cart, player];
    setCart(newPlayer);
    
        }
  return (
    <div className="App">
      <h1>Player loaded: {player.length}</h1>
      <h3>Player added: {cart.length}</h3>
      <Cart cart={cart}></Cart>
   <ul>
     {
      player.map(player => <Player player={player} handlePlayer={handlePlayer} key={player.id}></Player>)
     }
   </ul>
    </div>
  );
}

export default App;
