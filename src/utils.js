export const fetchJSON = async (endpoint) =>
  await fetch(endpoint).then((x) => x.json());

export const massageData = (data) => Object(data);

export const LIST_ALL_BREEDS_ENDPOINT =
  "https://emojihub.herokuapp.com/api/all";
