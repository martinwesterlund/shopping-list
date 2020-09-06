import React from "react";
import SwipeableViews from "react-swipeable-views";
import ItemContextProvider from "./contexts/ItemContext";
import ItemList from "./components/ItemList";
import BoughtItems from "./components/BoughtItems";
import { Backgrounds } from "./components/Backgrounds";

function App() {
  return (
    <div className="App">
      <Backgrounds></Backgrounds>
      <ItemContextProvider>
        <SwipeableViews>
          <ItemList></ItemList>
          <BoughtItems></BoughtItems>
        </SwipeableViews>
      </ItemContextProvider>
    </div>
  );
}

export default App;
