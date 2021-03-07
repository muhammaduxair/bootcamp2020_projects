let INITIAL_STATE = {
  count: 0,
  selectData: [],
  charges: [],
};

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_COUNT_NUM":
      return {
        ...state,
        count: action.payload,
      };
    case "REMOVE_COUNT":
      return {
        ...state,
        count: action.payload,
      };
    case "CLEAR_CART":
      return {
        ...state,
        selectData: [],
      };
    case "ADD_DATA":
      return {
        ...state,
        selectData: [...state.selectData, action.payload],
      };
    case "ADD_CHARGES":
      return {
        ...state,
        charges: [...state.charges, action.payload],
      };
    default:
      return state;
  }
};

export default Reducer;
