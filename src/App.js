import './App.css';

import { Route, withRouter, Switch, Redirect } from 'react-router-dom';

import Header from './components/header/Header';
import RetroBackground from './components/background/RetroBackground';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Services from './components/services/Services';
import NotFound from './components/not-found/NotFound';

// 

const App = () => {
  return (
    <div className="App">
      <Header/>
      <RetroBackground/>
      <Switch>
        <Redirect exact from='/' to='/about'/>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/services' component={Services} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
