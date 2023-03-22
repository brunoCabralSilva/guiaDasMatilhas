const INITIAL_STATE = {
  listOfTrybes: [],
  listOfBreeds: [],
  listOfAuspices: [],
  listOfGifts: [],
  token: '',
  filters: {
    books: [],
    generics: [],
    ranks: [],
  },
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
        token: action.payload.token,
        user: action.payload.name,
        role: action.payload.role,
      };
    case "UPDATE_FILTER_GENERICS":
      if (state.filters.generics.includes(action.payload)) {
        const newState = state.filters.generics.filter((item) => item !== action.payload);
        return {
          ...state,
          filters: {
            ...state.filters,
            generics: [...newState],
          },
        }
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          generics: [...state.filters.generics, action.payload],
        },
      };
    case "UPDATE_FILTER_RANK":
      if (state.filters.ranks.includes(action.payload)) {
        const newState = state.filters.ranks.filter((item) => item !== action.payload);
        return {
          ...state,
          filters: {
            ...state.filters,
            ranks: [...newState],
          },
        }
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          ranks: [...state.filters.ranks, action.payload],
        },
      };
    case "UPDATE_FILTER_BOOK":
      if (state.filters.books.includes(action.payload)) {
        const newState = state.filters.books.filter((item) => item !== action.payload);
        return {
          ...state,
          filters: {
            ...state.filters,
            books: [...newState],
          },
        }
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          books: [...state.filters.books, action.payload],
        },
      };
      case "RESET_FILTERS":
        return {
          ...state,
          filters: {
            books: [],
            generics: [],
            ranks: [],
          },
        };
    default:
      return state;
  };
};

export default reducer;