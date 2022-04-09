export const getCapsula = async (id: number) => {
  try {
    const response = await fetch(`https://api.spacex.land/rest/capsules/`);
    console.log(id);

    if (response.status !== 200) return;

    const pokemon = await response.json();

    return pokemon;
  } catch (e) {
    console.error(e);
  }
};
