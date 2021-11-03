/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { increment, decrement } from '../features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../redux-hooks';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          type="button"
          css={css`
            padding: 10px;
            background: white;
          `}
        >
          Increment
        </button>
        <span>{`Current Count: ${count}`}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          type="button"
          css={css`
            padding: 10px;
            background: white;
          `}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
