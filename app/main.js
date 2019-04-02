import xs from 'xstream';
// import { GET_FLIGHTS } from './containers/HomePage/constants';

function main(sources) {
  const increment$ = sources.ACTION.filter(
    action => action.type === 'INCREMENT_ASYNC',
  ).mapTo({ type: 'INCREMENT' });

  const decrement$ = sources.ACTION.filter(
    action => action.type === 'DECREMENT_ASYNC',
  ).mapTo({ type: 'DECREMENT' });

  const both$ = xs
    .merge(increment$, decrement$)
    .map(d =>
      xs
        .periodic(500) // async
        .take(1)
        .mapTo(d),
    )
    .flatten();

  return {
    ACTION: both$,
  };
}

export default main;
