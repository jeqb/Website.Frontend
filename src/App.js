import './App.css';
import Header from './components/header/Header';
import RetroBackground from './components/background/RetroBackground';
import About from './components/about/About';


const App = () => {
  return (
    <div className="App">
      <Header/>
      <RetroBackground/>
      {/*
      <div className="Content-Container">
        Hello world
      </div>
      */}
      <About />
    </div>
  );
}

export default App;
