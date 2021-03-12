import { dataInter, actionType } from "../interfaces/interface";

const INITIAL_STATE: dataInter[] = [];
const Reducer = (state = INITIAL_STATE, action: actionType) => {
  switch (action.type) {
    // case 1
    case "ADD":
      !state.length
        ? (action.payload.id = 1)
        : (action.payload.id = state.length + 1);
      return [...state, action.payload];

    // case 2
    case "CHANGE_EDIT":
      state.map((v) => {
        v.id === action.payload ? (v.edit = !v.edit) : (v = v);
        return v;
      });
      return [...state];

    // case 3
    case "EDIT_VALUE":
      state.map((v) => {
        v.id === action.payload.id ? (v.message = action.payload.v) : (v = v);
        return v;
      });
      return [...state];

    // case 3
    case "DELETE":
      const filterData = state.filter((v) => {
        return v.id !== action.payload;
      });
      return filterData;

    // case 4
    case "ADD_LOCAL":
      return action.payload;

    // default
    default:
      return [...state];
  }
};

export default Reducer;
