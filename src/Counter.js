import React from "react";

class Counter extends React.PureComponent {
  render() {
    console.log("Counter Rendering");
    const {
      count,
      incHandler,
      decHandler,
      incIfOddHandler,
      incDelay1sHandler,
      timerButtonVal,
      incTimerHandler
    } = this.props;
    return (
      <div>
        <Count count={count} />
        <ButtonRow
          button1Name="-"
          button2Name="+"
          button1Handler={decHandler}
          button2Handler={incHandler}
        />
        <ButtonRow
          button1Name="+ (if odd)"
          button2Name="+ (delay 1s)"
          button1Handler={incIfOddHandler}
          button2Handler={incDelay1sHandler}
        />
        <StartButton
          timerButtonVal={timerButtonVal}
          incTimerHandler={incTimerHandler}
        />
      </div>
    );
  }
}

class Count extends React.PureComponent {
  render() {
    console.log("Count Rendering");
    const { count } = this.props;
    return <h1>{count}</h1>;
  }
}

class ButtonRow extends React.PureComponent {
  render() {
    console.log("ButtonRow Rendering");
    const {
      button1Name,
      button2Name,
      button1Handler,
      button2Handler
    } = this.props;
    return (
      <div>
        <button onClick={button1Handler}>{button1Name}</button>
        <button onClick={button2Handler}>{button2Name}</button>
      </div>
    );
  }
}

class StartButton extends React.PureComponent {
  render() {
    console.log("StartButton Rendering");
    const { incTimerHandler, timerButtonVal } = this.props;
    return <button onClick={incTimerHandler}>{timerButtonVal}</button>;
  }
}

export default Counter;
