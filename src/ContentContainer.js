import "./styles.css";
import React from "react";
import Counter from "./Counter";
import TdList from "./TdList";

const HOC = (Component) => {
  return class extends React.PureComponent {
    render() {
      console.log(Component, "HOC Rendering");
      const { visible, visibleHandler, ...rest } = this.props;
      return (
        <div className="HOC">
          <input type="checkbox" checked={visible} onChange={visibleHandler} />
          <label>visible</label>
          {visible && <Component {...rest} />}
        </div>
      );
    }
  };
};

const HOCCounter = HOC(Counter);
const HOCTdList = HOC(TdList);

function ContentContainer({ component1, component2 }) {
  console.log("ContentContainer Rendering");
  return (
    <div className="ContentContainer">
      <HOCCounter {...component1} />
      <HOCTdList {...component2} />
    </div>
  );
}

export default ContentContainer;
