const INITIAL_DATA = undefined;

const MainReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case "ADD":
      return { ...action.payload };
    case "LOAD":
      return { ...state };
    default:
      return { ...state };
  }
};

export { MainReducer, INITIAL_DATA };
