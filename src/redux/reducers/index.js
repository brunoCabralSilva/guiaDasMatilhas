const INITIAL_STATE = {
  listOfTrybes: [],
  listOfBreeds: [],
  listOfAuspices: [],
  listOfGifts: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "CARREGAMENTO_INICIAL":
      return action.payload;
    default:
      return state;
  };
};

export default reducer;