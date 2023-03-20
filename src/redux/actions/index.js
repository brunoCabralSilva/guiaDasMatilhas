import { getAuspices, getBreeds, getTrybes } from "../../firebase/querys";

export async function queryDataValues(dispatch) {
    const trybes = await getTrybes();
    const listOfBreeds = await getBreeds();
    const auspices = await getAuspices();
    const listOfGifts = [];

    const listOfTrybes = trybes.map((trybe) => {
      const dataValue = {
        name: trybe.name,
        image: trybe.image1,
      };
      return dataValue;
    });

    const listOfAuspices = auspices.map((auspices) => {
      const dataValue = {
        name: auspices.name,
        image: auspices.image1,
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
