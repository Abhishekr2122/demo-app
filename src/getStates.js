export default async function getStates(inputCountry) {
  const res = await fetch(
    "https://countriesnow.space/api/v0.1/countries/states"
  );
  const apiData = await res.json();
  const { data } = apiData;
  const [country] = data.filter(function (citem) {
    return citem.name.toLowerCase() === inputCountry?.toLowerCase();
  });

  const { states } = country;
  console.log(states);
  return states;
}
