import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";

const Navbar = () => {
  const { items } = useContext(ItemContext);
  return items ? ( 
    <div className="navbar">Inköpslista
      {/* <h1>Inköpslista</h1>
      <p>
  Du har {items.length} {items.length === 1 ? <span>vara</span> : <span>varor</span>} att handla
      </p> */}
    </div>
  ) : (
    <div className="navbar">
      <h1>Köplista</h1>
      <p>Du har inga varor att handla</p>
    </div>
  );
};

export default Navbar;
