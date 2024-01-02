const url = "https://restcountries.com/v3.1/all";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(countriesData => {
    // Problem 1: Get all the countries from Asia continent / region
    const asianCountries = countriesData.filter(country => country.region === "Asia");
    console.log("Asian Countries:", asianCountries);

    // Problem 2: Get all the countries with a population of less than 2 lakhs
    const lowPopulationCountries = countriesData.filter(country => country.population < 200000);
    console.log("Low Population Countries:", lowPopulationCountries);

    // Problem 3: Print the name, capital, and flag
    countriesData.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital && country.capital[0]); // Ensure capital exists before accessing
      console.log("Flag:", country.flags && country.flags.png); // Ensure flags exists before accessing
    });

    // Problem 4: Print the total population of countries
    const totalPopulation = countriesData.reduce((acc, country) => acc + (country.population || 0), 0);
    console.log("Total Population:", totalPopulation);

    // Problem 5: Print the country which uses US Dollars as currency
    const usDollarCountries = countriesData.filter(country => country.currencies && country.currencies.USD);
    console.log("Countries using US Dollars:", usDollarCountries);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
