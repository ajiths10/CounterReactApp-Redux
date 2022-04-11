import { useSelector , useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const incrementHandler2X = () => {
    dispatch({ type: 'increment2X' });
  };

  const decrementHandler2X = () => {
    dispatch({ type: 'decrement2X' });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        </div>
        <div>
        <button onClick={incrementHandler2X}>Increment 2X</button>
        <button onClick={decrementHandler2X}>Decrement 2X</button>
        </div>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
