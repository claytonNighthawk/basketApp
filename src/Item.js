import React from "react";
import style from "./Item.css";

const Item = props => {
  const { name, quantity, onClick, inBasket, onDelete } = props;
  let cardStyle = style.notInBasket;

  if (inBasket) {
    cardStyle = style.inBasket;
  }

  return (
    <div className={cardStyle} onClick={() => onClick(name)}>
      {quantity} {name}
      <br />
      <button onClick={() => onDelete(name)} className={style.deleteButton}>
        Delete
      </button>
    </div>
  );
};

export default Item;
