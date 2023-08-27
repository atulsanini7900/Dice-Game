import { useState } from 'react'
import GamePlay from './components/GamePlay';
import StartGame from './components/StartGame';



function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGame = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      {
        isGameStarted ? <GamePlay /> : < StartGame toggle={toggleGame} />

      }


    </>
  )
}

export default App
