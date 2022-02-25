import React from 'react';
import { Link } from 'react-router-dom';
import CountryDetails from './CountryDetails';
import axios from 'axios';

const CountriesList = () => {
  const [countries, setCountries] = React.useState({});

  React.useEffect(() => {
    axios
      .request({
        method: 'GET',
        url: 'https://ih-countries-api.herokuapp.com/countries',
      })
      .then((results) => {
        console.log('axios request results', results.data);
        setCountries(results.data);
      })
      .catch((err) => {
        console.log('Something went wrong', err);
      });
  }, []);

  return (
    <div className="column">
      <p>
        Below you will find the complete list of countries in our Wiki. Select
        one to take you to their details page. All hail Roland king of the
        druids.
      </p>
      {countries.length > 0 &&
        countries.map((country) => {
          console.log(country);
          return (
            <div>
              <Link to={`/${country.alpha3Code}`}>{country.name.official}</Link>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              />
            </div>
          );
        })}
    </div>
  );
};

export default CountriesList;
