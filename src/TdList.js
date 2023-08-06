import React from "react";
import ItemList from "./ItemList";

class TdList extends React.PureComponent {
  render() {
    console.log("TdList Rendering");
    const {
      inputValue,
      inputHandler,
      itemList,
      addItemHandler,
      delItemAtHandler,
      sortBy,
      sortHandler
    } = this.props;
    return (
      <div>
        <ItemList
          itemList={itemList}
          delItemAtHandler={delItemAtHandler}
          sortBy={sortBy}
          sortHandler={sortHandler}
        />
        <InputField
          inputValue={inputValue}
          inputHandler={inputHandler}
          addItemHandler={addItemHandler}
        />
      </div>
    );
  }
}

class InputField extends React.PureComponent {
  render() {
    console.log("InputField Rendering");
    const { inputValue, inputHandler, addItemHandler } = this.props;
    return (
      <div>
        <input value={inputValue} onChange={inputHandler} />
        <button onClick={() => addItemHandler(inputValue)}>Add</button>
      </div>
    );
  }
}

export default TdList;
