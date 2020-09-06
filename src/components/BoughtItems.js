import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrashAlt, faCheck} from "@fortawesome/free-solid-svg-icons";

const BoughtItems = () => {
  const { boughtItems, moveItem, removeItem } = useContext(ItemContext);
  return boughtItems ? (
    <div className="item-view">
      <div className="navbar">köpt. ({boughtItems.length})</div>
      <div className="item-list">
        <div className="item-container">
          {/* <FontAwesomeIcon class="bg-icon" icon={faShoppingCart} /> */}
          {boughtItems.map((item) => {
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
      <div className="form"></div>
    </div>
  ) : (
    <div className="item-view">
      <div
        
        className="navbar"
      >
        köpt. (0)
      </div>
      <div
        
        className="item-list"
      >
        
      </div>
      <div className="form"></div>
    </div>
  );
};

export default BoughtItems;
