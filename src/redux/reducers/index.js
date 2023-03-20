const INITIAL_STATE = {
  listOfTrybes: [],
  listOfBreeds: [],
  listOfAuspices: [],
  listOfGifts: [],
  token: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "CARREGAMENTO_INICIAL":
      return {
        ...state,
        ...action.payload,
      };
    case "UPDATE_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  };
};

export default reducer;