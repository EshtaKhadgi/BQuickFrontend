import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Body from './Body/Body'
import Home from './pages/Home'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Router>
      <Header></Header>
      <Switch>
        <Route path ="/"  />
        <Body></Body>
      </Switch>
    </Router>
    </>
  );
}

export default App;
