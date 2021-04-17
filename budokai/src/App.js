import './App.css';
import {Container,Row,Col, Nav} from 'react-bootstrap'
import NavBar from './NavBar'
import Form from './Form'
import Homepage from './Homepage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Tournamentpage from './Tournamentpage';
function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route exact path="/forum">
            <Form />
          </Route>
          <Route exact path="/Tournament">
            <Tournamentpage/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
