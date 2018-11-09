import React from "react";
import Item from "./Item";

const GroceryList = props => {
  const { onClear, addToBasket, onDelete, className } = props;
  const groceryList = Object.entries(props.groceryList);

  return (
    <div className={className}>
      {groceryList.map((element, i) => (
        <Item
          name={element[0]}
          quantity={element[1].quantity}
          key={i}
          inBasket={element[1].inBasket}
          onClick={addToBasket}
          onDelete={onDelete}
        />
      ))}
      {groceryList.length > 0 && (
        <button onClick={onClear}>Empty Basket</button>
      )}
    </div>
  );
};

export default GroceryList;
