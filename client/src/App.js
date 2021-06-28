import './App.css';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import {MAIN_CONTAINER} from './styles/styles'
import Products from './pages/Products';
import Category from './pages/Category';
import FindProduct from './pages/FindProduct';
import AvgPrice from './pages/AvgPrice';
import CategoryPrice from './pages/CategoryPrice';

function App() {
  return (
    <>
    <NavBar />
    <MAIN_CONTAINER>
    <Switch>
      <Route exact path='/' component={Products} />
      <Route exact path='/category' component={Category} />
      <Route exact path='/findProduct' component={FindProduct} />
      <Route exact path='/AvgPrice' component={AvgPrice} />
      <Route exact path='/categoryPrice' component={CategoryPrice} />
    </Switch>
    </MAIN_CONTAINER>
    </>
  );
}

export default App;
