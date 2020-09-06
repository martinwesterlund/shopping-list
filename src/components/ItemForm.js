import React, { useContext, useState } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { motion } from "framer-motion";

const ItemForm = () => {
  const { addItem } = useContext(ItemContext);
  const [itemName, setItemName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemName);
    setItemName("");
  };
  
  return (
    <motion.form className="form" autoComplete="off" onSubmit={handleSubmit}>
      <motion.input
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
        id="add-field"
        type="text"
        placeholder="Produkt..."
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
      />

      <motion.button
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
        id="submit-btn"
        type="submit"
      >
        Lägg till
      </motion.button>
    </motion.form>
  );
};

export default ItemForm;
