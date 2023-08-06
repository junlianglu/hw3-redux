import React from "react";

class ItemList extends React.PureComponent {
  render() {
    console.log("ItemList Rendering");
    const { itemList, delItemAtHandler, sortBy, sortHandler } = this.props;
    return (
      <div>
        <SortBy sortBy={sortBy} sortHandler={sortHandler} />
        {itemList.map((val, i) => (
          <Item key={i} val={val} i={i} delItemAtHandler={delItemAtHandler} />
        ))}
      </div>
    );
  }
}

class SortBy extends React.PureComponent {
  render() {
    console.log("SortBy Rendering");
    const { sortBy, sortHandler } = this.props;
    return (
      <div>
        <label>Sort By </label>
        <select value={sortBy} onChange={sortHandler}>
          <option value=""></option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
    );
  }
}

class Item extends React.PureComponent {
  render() {
    console.log("Item Rendering");
    const { val, i, delItemAtHandler } = this.props;
    return (
      <div>
        {val}
        <button onClick={() => delItemAtHandler(i)}>Delete</button>
      </div>
    );
  }
}

export default ItemList;
