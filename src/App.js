import "./styles.css";
import { connect } from "react-redux";
import * as inputActions from "./actions/inputActions";
import * as countActions from "./actions/countActions";
import * as itemListActions from "./actions/itemListActions";
import * as visibleActions from "./actions/visibleActions";
import ContentContainer from "./ContentContainer";
import {
  getReselectCount,
  getReselectTimerButtonVal
} from "./reducers/countReducer";
import { getReselectInputValue } from "./reducers/inputReducer";
import {
  getReselectItemList,
  getReselectSortBy
} from "./reducers/itemListReducer";
import {
  getReselectIsCounterVisible,
  getReselectIsTdListVisible
} from "./reducers/visibleReducer";
import React from "react";

function App(props) {
  const {
    count,
    incHandler,
    decHandler,
    inputValue,
    inputHandler,
    itemList,
    addItemHandler,
    delItemAtHandler,
    sortBy,
    sortHandler,
    incIfOddHandler,
    incDelay1sHandler,
    timerButtonVal,
    incTimerHandler,
    isCounterVisible,
    isTdListVisible,
    visibleCounterHandler,
    visibleTdListHandler
  } = props;
  console.log("App Rendering");
  return (
    <div className="App">
      <ContentContainer
        component1={{
          visible: isCounterVisible,
          visibleHandler: visibleCounterHandler,
          count,
          incHandler,
          decHandler,
          incIfOddHandler,
          incDelay1sHandler,
          timerButtonVal,
          incTimerHandler
        }}
        component2={{
          visible: isTdListVisible,
          visibleHandler: visibleTdListHandler,
          inputValue,
          inputHandler,
          itemList,
          addItemHandler,
          delItemAtHandler,
          sortBy,
          sortHandler
        }}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: getReselectCount(state),
    inputValue: getReselectInputValue(state),
    itemList: getReselectItemList(state),
    sortBy: getReselectSortBy(state),
    timerButtonVal: getReselectTimerButtonVal(state),
    isCounterVisible: getReselectIsCounterVisible(state),
    isTdListVisible: getReselectIsTdListVisible(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  incHandler: () => dispatch(countActions.incAction()),
  decHandler: () => dispatch(countActions.decAction()),
  inputHandler: (e) => dispatch(inputActions.inputAction(e.target.value)),
  addItemHandler: (val) => {
    dispatch(itemListActions.addAction(val));
    dispatch(inputActions.inputAction(""));
  },
  delItemAtHandler: (i) => dispatch(itemListActions.delAtAction(i)),
  sortHandler: (e) => dispatch(itemListActions.sortAction(e.target.value)),
  incIfOddHandler: () => dispatch(countActions.incIfOddAction()),
  incDelay1sHandler: () => dispatch(countActions.incDelayAction(1)),
  incTimerHandler: () => dispatch(countActions.incTimerAction()),
  visibleCounterHandler: (e) =>
    dispatch(visibleActions.visibleCounterAction(e.target.checked)),
  visibleTdListHandler: (e) =>
    dispatch(visibleActions.visibleTdListAction(e.target.checked))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
