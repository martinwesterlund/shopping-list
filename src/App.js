import React from "react";
import SwipeableViews from 'react-swipeable-views';
import ItemContextProvider from "./contexts/ItemContext";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";
import BoughtItems from "./components/BoughtItems";
import HelpBtn from "./components/HelpBtn";

function App() {
  
  return (
    <div className="App">
      
      <HelpBtn></HelpBtn>
       <ItemContextProvider>
        {/* <Navbar></Navbar> */}
        
        <SwipeableViews>
        <ItemList></ItemList>
        <BoughtItems></BoughtItems>
        
        </SwipeableViews>
        
        {/*<SwipeableViews>
          <ItemList></ItemList>
          <BoughtItems></BoughtItems>
          </SwipeableViews>
        <ItemForm></ItemForm>*/}
      </ItemContextProvider> 
      {/* <main className='flexbox'>
        <Board id='board-1' className='board'>
          <Card id='card-1' className='card' draggable='true'>
            <p>Card One</p>
          </Card>
        </Board>

        <Board id='board-2' className='board'>
          <Card id='card-2' className='card' draggable='true'>
            <p>Card Two</p>
          </Card>
        </Board>
      </main> */}
    </div>
  );
}

export default App;
