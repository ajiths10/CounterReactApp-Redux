import { useSelector , useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

import classes from './Counter.module.css';


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementHandler2X = () => {
    dispatch(counterActions.increment5X(5));
  };

  const decrementHandler2X = () => {
    dispatch(counterActions.decrement5X(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
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
