import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faList,
  faTrashAlt,
  faAngleDoubleRight,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import ItemForm from "./ItemForm";
import { Spiral } from "./Spiral";
const ItemList = () => {
  const { items, removeItem, moveItem } = useContext(ItemContext);
  return items ? (
    <div id="item-view">
      <div className="navbar"><FontAwesomeIcon class="navbar-icon" icon={faShoppingCart} /></div>
      <div className="item-list">
        {/* <FontAwesomeIcon class='bg-icon' icon={faList} /> */}
        {/* <Spiral></Spiral> */}
        <div className="item-container">
        {items.map((item) => {
          return (
            <div
              onDoubleClick={() => moveItem(item.id)}
              className="item"
              key={item.id}
            >
              {item.itemName}
              <FontAwesomeIcon
                className="trash"
                icon={faTrashAlt}
                onClick={() => removeItem(item.id)}
              />
            </div>
          );
        })}
        </div>
      </div>
      <ItemForm></ItemForm>
    </div>
  ) : (
    <div className="item-list">
      
    </div>
  );
};

export default ItemList;
