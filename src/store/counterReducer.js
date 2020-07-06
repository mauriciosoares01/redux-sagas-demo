const INCREASE_COUNTER_ASYNC = 'INCREASE_COUNTER_ASYNC';

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER_ASYNC:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    default:
      break;
  }
};
