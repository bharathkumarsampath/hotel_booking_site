import './App.css';
import LoginPage from '../src/components/LoginPage/LoginPage'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route path="/login" exact component={LoginPage}/>
            <Route path="/home" exact component={Home}/>
            <Route  component={LoginPage}/>
          </Switch>
      </div>
      
      

    </BrowserRouter>
  );
}

export default App;
