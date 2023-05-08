import { useState } from 'react';

import classes from './Counter.module.scss';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);

  return (
    <div>
      Counter: {counter}
      <button className={classes['green-open_new']} onClick={increment}>increment</button>
    </div>
  );
};
