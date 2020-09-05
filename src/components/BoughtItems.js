import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrashAlt, faCheck} from "@fortawesome/free-solid-svg-icons";

const BoughtItems = () => {
  const { boughtItems, moveItem, removeItem } = useContext(ItemContext);
  return boughtItems ? (
    <div id="bought-items-view">
      <div className="navbar"><FontAwesomeIcon class="navbar-icon" icon={faCheck} /></div>
      <div className="bought-items-list">
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
    <div id="bought-items-view">
      <div className="navbar"><FontAwesomeIcon class="navbar-icon" icon={faCheck} /></div>
      <div className="bought-items-list"></div>
      <div className="form"></div>
    </div>
  );
};

export default BoughtItems;
