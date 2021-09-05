import './App.css';
import { ProductListingPage } from './Pages/ProductListing';
import {NavBar} from './Components/Nav Bar/navBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ProductListingPage/>
    </div>
  );
}

export default App;
