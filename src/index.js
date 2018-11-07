import React from "react";
import ReactDOM from "react-dom";
import GroceryList from "./GroceryList";

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryList: {
        eggs: { quantity: 314, inBasket: false },
        milk: { quantity: 1337, inBasket: false }
      }
    };

    this.addToState = this.addToState.bind(this);
  }

  addToState(e) {
    e.preventDefault();
    const data = new FormData(event.target).entries();
    const name = data.next().value[1].trim();
    const quantity = parseInt(data.next().value[1]);
    const item = { quantity: quantity, inBasket: false };
    console.log(item);

    if (!name || !quantity) {
      return;
    }

    const groceryList = this.state.groceryList;
    if (groceryList[name]) {
      item.quantity += quantity;
    }
    groceryList[name] = item;

    this.setState({ groceryList });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addToState}>
          <label>
            Name:
            <input name="name" />
          </label>
          <br />
          <label>
            Quantity:
            <input name="quantity" />
          </label>
          <br />
          <input type="submit" value="Add item to grocery list" />
        </form>
        <GroceryList groceryList={this.state.groceryList} />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("index"));
