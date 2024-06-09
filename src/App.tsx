import * as C from './app.stiled'
import { useEffect } from "react";
import {Character} from './components/characterComponent/index'
import {  useCharacter} from "./Hooks/position";
function App() {
const moveChar= useCharacter()
  useEffect(()=>{
    window.addEventListener('keydown',movePerson)
  },[])
  const movePerson = (e: KeyboardEvent) => {
    switch (e.code) {
        case 'KeyA':
        case 'ArrowLeft':
            moveChar.moveLeft();
            break;
        case 'KeyD':
        case 'ArrowRight':
            moveChar.moveRight();
            break;
        default:
            break;
    }
}

  return (
    <C.Container>
      <C.Map>
        <Character x={moveChar.x} y ={moveChar.y} />
      </C.Map>

    </C.Container>
  );
}

export default App;
