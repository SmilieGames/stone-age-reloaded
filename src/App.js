import './App.css';

import { Client } from 'boardgame.io/react';

import StoneAge from './components/StoneAge'
import StoneAgeRenderer from './components/StoneAgeRenderer'

const App = Client({
  game: StoneAge,
  board: StoneAgeRenderer,
  numPlayers: 1,
  debug: false
})

export default App;
