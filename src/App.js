import React, { useState, useRef, useEffect } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs';
import WhereToRide from './components/WhereToRide/WhereToRide';
import Contacts from './components/Contacts/Contacts';
import Rent from './components/Rent/Rent';
import Rules from './components/Rules/Rules';
import dataBikeTypes from './components/Rent/dataBikeTypes'
import dataBikes from './components/Rent/ChooseBike/dataBikes';
import Data from './context';
import Delivery from './components/Delivery/Delivery';
import Order from './components/Rent/Order/Order';

function App() {
  const [activeType, setActiveType]=useState([]) 
  const [activeBikeItem, setActiveBikeItem]=useState([])
  const selectedBikes = useRef([]);
  const itemsActiveType = useRef([]);

  useEffect(() => {
    itemsActiveType.current = itemsActiveType.current.slice(0, dataBikeTypes.length);
  }, [dataBikeTypes]);

  useEffect(() => {
      selectedBikes.current = selectedBikes.current.slice(0, selectedBikes.length);
  }, [dataBikes]);
  
  const chooseBikeType=(id, typeName)=>{
    itemsActiveType.current[id].classList.toggle('activeType')
    activeType.includes(typeName)===false ? setActiveType([...activeType, typeName]) : setActiveType(activeType.filter(i=>i!==typeName))
  }

  const selecteBikeItem=(id)=>{
    selectedBikes.current[id].classList.toggle('activeBikeItem')
    selectedBikes.current[id].classList[1]==='activeBikeItem' ? selectedBikes.current[id].innerHTML='Выбрано' : selectedBikes.current[id].innerHTML='Выбрать'
    activeBikeItem.includes(id)===false ? setActiveBikeItem([...activeBikeItem, id]) : setActiveBikeItem(activeBikeItem.filter(i=>i!==id))
  }

  return (
    <BrowserRouter>
      <Data.Provider value={{activeType, setActiveType, itemsActiveType, chooseBikeType, dataBikeTypes, selecteBikeItem, activeBikeItem, setActiveBikeItem, selectedBikes, dataBikes}}>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Rent/>
          </Route>
          <Route path='/about-us'>
            <AboutUs />
          </Route>
          <Route path='/rent'>
            <Rent/>
          </Route>
          <Route path='/order'>
            <Order />
          </Route>
          <Route path='/delivery'>
            <Delivery />
          </Route>
          <Route path='/where-to-ride'>
            <WhereToRide />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
          <Route path='/rules'>
            <Rules />
          </Route>
          <Route path='/personal-account'>
            personal-account
          </Route>
        </Switch>
        <Footer />
      </Data.Provider>
    </BrowserRouter>
  );
}

export default App;
