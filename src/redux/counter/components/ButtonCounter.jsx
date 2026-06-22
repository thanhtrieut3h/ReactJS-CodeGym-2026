import { Button } from "antd";
import { useDispatch } from "react-redux";
//import { incrementCounter, decrementCounter } from "../actions/counter";
import { increment, decrement } from "../reducers/counterSlice";

const ButtonCounter = ({ name, children }) => {
  const dispatch = useDispatch();

  const changeCounter = (val) => {
    if (name === "increment") {
      dispatch(increment(val));
    } else if (name === "decrement") {
      dispatch(decrement(val));
    }
  };

  return (
    <Button type="primary" name={name} onClick={() => changeCounter(1)}>
        {children}
    </Button>
  );
};
export default ButtonCounter;
