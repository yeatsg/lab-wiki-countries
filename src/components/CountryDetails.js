import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CountryDetails = () => {
  let { alpha3Code } = useParams();
  const [country, setCountry] = React.useState(null);

  React.useEffect(() => {
    axios
      .request({
        method: 'GET',
        url: `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`,
      })
      .then((results) => {
        setCountry(results.data);
      })
      .catch((err) => {
        console.log('Something went wrong with the axios request', err);
      });
  }, [alpha3Code]);

  return country ? (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
      />
      <p>{country.name.official}</p>
      <p>{country.capital}</p>
      <p>{country.area}</p>
      <ul>
        {country.borders.map((border) => {
          return <li>{border}</li>;
        })}
      </ul>
    </div>
  ) : (
    <div>Loading ...</div>
  );
};
export default CountryDetails;
