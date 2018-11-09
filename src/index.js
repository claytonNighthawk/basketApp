import React from "react";
import ReactDOM from "react-dom";
import GroceryList from "./GroceryList";
import style from "./Index.css";

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryList: {
        eggs: { quantity: 314, inBasket: false },
        milk: { quantity: 1337, inBasket: false }
      }
    };

    this.addItemToGroceryList = this.addItemToGroceryList.bind(this);
    this.removeItemFromGroceryList = this.removeItemFromGroceryList.bind(this);
    this.addToBasket = this.addToBasket.bind(this);
    this.clearBasket = this.clearBasket.bind(this);
  }

  addToBasket(name) {
    const groceryList = this.state.groceryList;
    if (groceryList[name]) {
      groceryList[name].inBasket = true;
    }
    this.setState({ groceryList });
  }

  clearBasket() {
    const groceryList = this.state.groceryList;
    for (var key of Object.keys(groceryList)) {
      groceryList[key].inBasket = false;
    }
    this.setState({ groceryList });
  }

  addItemToGroceryList(e) {
    e.preventDefault();
    const data = new FormData(event.target).entries();
    const name = data.next().value[1].trim();
    const quantity = parseInt(data.next().value[1]);

    if (!name || !quantity) {
      return;
    }
    const item = { quantity: quantity, inBasket: false };

    const groceryList = this.state.groceryList;
    if (groceryList[name]) {
      item.quantity += groceryList[name].quantity;
    }
    groceryList[name] = item;

    this.setState({ groceryList });
  }

  removeItemFromGroceryList(name) {
    const groceryList = this.state.groceryList;
    delete groceryList[name];
    this.setState({ groceryList });
  }

  render() {
    return (
      <div className={style.flexElement}>
        <form
          onSubmit={this.addItemToGroceryList}
          className={style.groceryListForm}
        >
          <label>
            Name:
            <input name="name" className={style.input} />
          </label>
          <br />
          <label>
            Quantity:
            <input name="quantity" className={style.input} />
          </label>
          <br />
          <input type="submit" value="Add item to grocery list" />
        </form>
        <GroceryList
          groceryList={this.state.groceryList}
          onClear={this.clearBasket}
          addToBasket={this.addToBasket}
          onDelete={this.removeItemFromGroceryList}
        />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("index"));
