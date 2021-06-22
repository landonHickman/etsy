import './App.css';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Examples from './pages/Examples';
import {MAIN_CONTAINER} from './styles/styles'
import Products from './pages/Products';

function App() {
  return (
    <>
    <NavBar />
    <MAIN_CONTAINER>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/examples' component={Examples} />
      <Route exact path='/products' component={Products} />
    </Switch>
    </MAIN_CONTAINER>
    </>
  );
}

export default App;
