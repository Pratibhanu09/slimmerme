import ChangeColor from './components/ChangeColor';
import Fitlist from './components/FitList';
import { MessageContext } from './components/UI/PassContext';
function App() {
  return (
    <MessageContext.Provider value = 'Hello'>
    <div className="App">
      <h1>A Slimmer Me!</h1>
            <Fitlist />
    </div>
    <ChangeColor/>
    </MessageContext.Provider>
  );
}

export default App;

