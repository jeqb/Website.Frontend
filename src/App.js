import './App.css';

import { Route, withRouter, Switch, Redirect } from 'react-router-dom';

import Header from './components/header/Header';
import RetroBackground from './components/background/RetroBackground';
import About from './components/about/About';


const App = () => {
  return (
    <div className="App">
      <Header/>
      <RetroBackground/>
      <Switch>
        <Redirect exact from='/' to='/about'/>
        <Route exact path='/about' component={About}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
