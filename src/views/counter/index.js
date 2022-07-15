import React from "react";
import DecreaseBtn from "./components/DecreaseBtn";
import IncreaseBtn from "./components/IncreaseBtn";

import "./CounterView.css";

const CounterView = () => {
  const [count, setCount] = React.useState(0);
  console.log('root view')
  return (
    <div className="counter-container">
      <div className="counter-value">{count}</div>
      <div className="counter-btn-group">
        <DecreaseBtn handle={() => setCount(count - 1)} />
        <IncreaseBtn handle={() => setCount(count + 1)} />
      </div>
    </div>
  );
};

export default CounterView;
