import { createAction } from 'typesafe-actions';

export const increment = createAction('counter/increment', resolve => {
  return () => resolve(1);
});

export const decrement = createAction('counter/decrement', resolve => {
  return () => resolve(-1);
});
