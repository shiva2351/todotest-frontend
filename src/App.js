
import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Home />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
