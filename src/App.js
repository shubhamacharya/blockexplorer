
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarCust from './components/Navbar';
import Home from './components/Home';
import SearchComponent from './components/SearchComponent';
import NFT from './components/NFT';

// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

function App() {
  

  return (
    <div className="App">
       <NavbarCust />
      
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/search' component={SearchComponent}/>
                <Route path='/nft' component={NFT}/>
              </Switch>

     
      
    </div>
  
  );
}

export default App;