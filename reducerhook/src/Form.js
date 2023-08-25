import { useReducer } from 'react';

const initialValue = {
  value: '',
  touched: false,
  error: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'update':
      return {
        value: payload.value,
        touched: true,
        error: payload.error,
      };
    case 'reset':
      return initialValue;
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  console.log(state);
  return (
    <div>
      <input
        className={state.error ? 'error' : ''}
        value={state.value}
        onChange={(event) =>
          dispatch({
            type: 'update',
            payload: {
              value: event.target.value,
              error: state.touched ? event.target.value.length === 0 : null,
            },
          })
        }
      />
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  );
};

export default Form;