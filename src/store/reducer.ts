import { StateInterface, ActionsType } from "../components/dataTypes";

const INITIAL_STATE: StateInterface = {
  CartData: [],
  BasketData: [],
};
const Reducer = (
  state: StateInterface = INITIAL_STATE,
  action: ActionsType
) => {
  switch (action.type) {
    // case 1
    case "add_shirts":
      return {
        ...state,
        CartData: action.payload,
      };

    // case 2
    case "add":
      const changeData = state.CartData.map((v, i) => {
        i === action.payload ? (v.add = !v.add) : (v = v);
        return v;
      });
      const filterData = state.CartData.filter((v) => {
        return v.add === true;
      });
      return {
        CartData: changeData,
        BasketData: filterData,
      };

    // case 3
    case "delItem":
      const delData = state.BasketData.filter((v, i) => {
        return i !== action.payload.indexNumber;
      });
      state.CartData.map((v) => {
        v.id === action.payload.id ? (v.add = false) : (v = v);
      });
      return { ...state, BasketData: delData };

    // case 4
    case "delList":
      state.BasketData = [];
      state.CartData.map((v) => (v.add = false));
      return { ...state };

    // default
    default:
      return { ...state };
  }
};

export default Reducer;
