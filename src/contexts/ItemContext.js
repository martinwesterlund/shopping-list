import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")));
  const [boughtItems, setBoughtItems] = useState(
    JSON.parse(localStorage.getItem("boughtItems"))
  );

  const addItem = (itemName) => {
    items
      ? setItems([...items, { id: uuidv4(), itemName }])
      : setItems([{ id: uuidv4(), itemName }]);
  };
  const moveItem = (id) => {
    if (items.filter((item) => item.id === id).length > 0) {
      let boughtItem = items.filter((item) => item.id === id)[0];
      boughtItems ? setBoughtItems([...boughtItems, { id, itemName: boughtItem.itemName }]) : setBoughtItems([{ id, itemName: boughtItem.itemName }]);
      setItems(items.filter((item) => item.id !== id));
    } else {
      let item = boughtItems.filter((item) => item.id === id)[0];
      setItems([...items, { id, itemName: item.itemName }]);
      setBoughtItems(boughtItems.filter((item) => item.id !== id));
    }
  };
  const removeItem = (id) => {
    if (items.filter((item) => item.id === id).length > 0) {
      setItems(items.filter((item) => item.id !== id));
    } else {
      setBoughtItems(boughtItems.filter((item) => item.id !== id));
    }
  };

  useEffect(() => {
    console.log('Sparar datan')
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("boughtItems", JSON.stringify(boughtItems));
  });
  
  return (
    <ItemContext.Provider
      value={{
        items,
        boughtItems,
        addItem,
        moveItem,
        removeItem,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
