import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/about-us'>
          <AboutUs />
        </Route>
        <Route path='/rent'>
          Rent
        </Route>
        <Route path='/delivery'>
          Delivery
        </Route>
        <Route path='/where-to-ride'>
          Where to ride
        </Route>
        <Route path='/contacts'>
          contacts
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
