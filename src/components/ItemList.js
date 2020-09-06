import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import ItemForm from "./ItemForm";
import { motion } from "framer-motion";

const ItemList = () => {
  const { items, removeItem, moveItem } = useContext(ItemContext);
  return items ? (
    <div className="item-view">
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
        className="navbar"
      >
        att köpa. ({items.length})
      </motion.div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 0.95, height: "65vh" }}
        transition={{ delay: 1.2 }}
        className="item-list"
      >
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
      </motion.div>
      <ItemForm></ItemForm>
    </div>
  ) : (
    <div className="item-view">
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
        className="navbar"
      >
        att köpa. (0)
      </motion.div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 0.95, height: "65vh" }}
        transition={{ delay: 1.2 }}
        className="item-list"
      >
        <div className="item-container"></div>
        
      </motion.div>
      <ItemForm></ItemForm>
    </div>
  );
};

export default ItemList;
