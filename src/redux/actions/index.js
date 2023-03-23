import { getCollection } from "../../back/querys";

export const queryDataValues = async (dispatch) => {
    const listOfTrybes = await getCollection("trybes");
    const listOfBreeds = await getCollection("breeds");
    const listOfAuspices = await getCollection("auspices");
    const listOfGifts = [];

    dispatch({
      type: "CARREGAMENTO_INICIAL",
      payload: {
        listOfTrybes,
        listOfBreeds,
        listOfAuspices,
        listOfGifts,
      }
    });
}

export const actionToken = (token) => {
  return {
    type: "UPDATE_TOKEN",
    payload: token,
  }
}

export const actionFilGenerics = (item) => {
  return {
    type: "UPDATE_FILTER_GENERICS",
    payload: item,
  }
}

export const actionFilRank = (item) => {
  return {
    type: "UPDATE_FILTER_RANK",
    payload: item,
  }
}

export const actionFilBook = (item) => {
  return {
    type: "UPDATE_FILTER_BOOK",
    payload: item,
  }
}

export const actionResetFilters = () => {
  return {
    type: "RESET_FILTERS",
  }
}

export const actionLogout = () => {
  return {
    type: "RESET_FILTERS",
  }
}

export const actionListGifts = (list) => {
  return {
    type: "INSERT_LIST_GIFTS",
    payload: list,
  }
}
