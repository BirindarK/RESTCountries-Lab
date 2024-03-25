const Country = ({ country, markAsVisited }) => {
    
    const handleVisit = () => {
        markAsVisited(country.name.official);
    };

    const countryName = country.name.official;

    const countryCapital = country.capital && country.capital.map((capital, index) => (
        <li key={index}>{capital}</li>
    ));

    const countryCurrency = country.currencies && Object.keys(country.currencies).map((currencies, index) => (
        <li key={index}>{country.currencies[currencies].name}</li>
    ));

    const countryFlag = country.flag;

    return (
        <div>
            <h2>{countryName}</h2>
            <ul>
                <li>Name: {country.name.common}</li>
                <li>Capital: {countryCapital}</li>
                <li>Currencies: {countryCurrency}</li>
                <li>Flag: {countryFlag}</li>
            </ul>
            <button onClick={handleVisit}>Visit</button>
        </div>
    );
};

export default Country;