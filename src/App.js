import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Search from './components/Search'
function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/search' component={Search} exact />
            </Switch>
        </Router>
    );
}

export default App;
