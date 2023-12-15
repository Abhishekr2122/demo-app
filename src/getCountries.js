export async function getCountries() {
  const url =
    "https://referential.p.rapidapi.com/v1/country?fields=currency%2Ccurrency_num_code%2Ccurrency_code%2Ccontinent_code%2Ccurrency%2Ciso_a3%2Cdial_code&limit=250";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "623e20522bmsh31b45fbc20d29bep1d2278jsnfa0a4a75d1c9",
      "X-RapidAPI-Host": "referential.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    const countries = result;

    return countries;
  } catch (error) {
    console.error(error);
  }
}
