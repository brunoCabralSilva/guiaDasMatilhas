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
