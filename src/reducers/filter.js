const filterReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return state.filter(category => category === action.payload);
    default:
      return state;
  }
};

export default filterReducer;
