import React from "react";

const Item = props => {
  const { name, quantity, onClick, inBasket } = props;
  const style = {
    margin: 10,
    padding: 20,
    boxShadow: `0px 4px 8px 0px #d1d1d1`,
    width: 100,
    backgroundColor: `#ffffff`
  };

  if (inBasket) {
    style.backgroundColor = "#ffff80";
  }

  return (
    <div style={style} onClick={onClick}>
      {quantity} {name}
    </div>
  );
};

export default Item;
