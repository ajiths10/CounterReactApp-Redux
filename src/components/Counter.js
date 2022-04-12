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
    dispatch({ type: 'increment5X' });
  };

  const decrementHandler2X = () => {
    dispatch({ type: 'decrement5X' });
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
        <button onClick={incrementHandler2X}>Increment 5X</button>
        <button onClick={decrementHandler2X}>Decrement 5X</button>
        </div>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
