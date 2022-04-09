export const getCapsula = async () => {
  try {
    const response = await fetch(`https://api.spacex.land/rest/capsules/`);

    if (response.status !== 200) return;

    const res = await response.json();

    return res;
  } catch (e) {
    console.error(e);
  }
};
export const getDragon = async () => {
  try {
    const response = await fetch(`https://api.spacex.land/rest/dragons/`);

    if (response.status !== 200) return;

    const res = await response.json();

    return res;
  } catch (e) {
    console.error(e);
  }
};
export const getRocket = async () => {
  try {
    const response = await fetch(`https://api.spacex.land/rest/rockets/`);

    if (response.status !== 200) return;

    const res = await response.json();

    return res;
  } catch (e) {
    console.error(e);
  }
};
