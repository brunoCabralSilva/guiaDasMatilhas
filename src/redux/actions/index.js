import { getCollection } from "../../back/querys";

export const queryDataValues = async (dispatch) => {
    const trybes = await getCollection("trybes");
    const listOfBreeds = await getCollection("breeds");
    const auspices = await getCollection("auspices");
    const listOfGifts = [];

    const listOfTrybes = trybes.map((trybe) => {
      const dataValue = {
        name: trybe.name,
        image: trybe.image1,
        id: trybe.id,
      };
      return dataValue;
    });

    const listOfAuspices = auspices.map((auspices) => {
      const dataValue = {
        name: auspices.name,
        image: auspices.image1,
        id: auspices.id,
      };
      return dataValue;
    })

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
