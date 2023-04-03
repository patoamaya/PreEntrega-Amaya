import React from "react";
import "./ItemList.css";

const ItemList = ({ saludo, informacion }) => {
  return (
    <div>
      <h1>{saludo}</h1>
      <h2>{informacion}</h2>
    </div>
  );
};

export default ItemList;
