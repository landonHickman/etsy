import './App.css';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import {MAIN_CONTAINER} from './styles/styles'
import Products from './pages/Products';
import Category from './pages/Category';
import FindProduct from './pages/FindProduct';

function App() {
  return (
    <>
    <NavBar />
    <MAIN_CONTAINER>
    <Switch>
      <Route exact path='/' component={Products} />
      <Route exact path='/category' component={Category} />
      <Route exact path='/findProduct' component={FindProduct} />
    </Switch>
    </MAIN_CONTAINER>
    </>
  );
}

export default App;
