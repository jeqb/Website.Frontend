import './App.css';
import Header from './components/header/Header';
import RetroBackground from './components/background/RetroBackground';


const App = () => {
  return (
    <div className="App">
      <Header/>
      <RetroBackground/>
      <div className="Content-Container">
        Hello world
      </div>
    </div>
  );
}

export default App;
