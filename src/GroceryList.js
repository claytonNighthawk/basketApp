import React from "react";
import Item from "./Item";

const onClick = () => {
  console.log("CLICKED!");
};

const GroceryList = props => {
  const { onClear } = props;
  const groceryList = Object.entries(props.groceryList);
  console.log(groceryList);

  return (
    <div>
      {groceryList.map((element, i) => (
        <Item
          name={element[0]}
          quantity={element[1].quantity}
          key={i}
          inBasket={element[1].inBasket}
          onClick={onClick}
        />
      ))}
      <button onClick={onClear}>Empty Basket</button>
    </div>
  );
};

export default GroceryList;
