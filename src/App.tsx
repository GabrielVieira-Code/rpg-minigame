import * as C from './app.stiled'
import {Character} from './components/characterComponent/index'
function App() {

  return (
    <C.Container>
      <C.Map>
        <Character x={0} y ={2} />
      </C.Map>

    </C.Container>
  );
}

export default App;
