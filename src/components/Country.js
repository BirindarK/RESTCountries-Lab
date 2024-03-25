import React, { useState } from 'react';

const Country = ({ country}) => { 
    const countryName = country.name.official;

    const countryCapital = country.capital && country.capital.map((capital, index) => (
        <li key={index}>{capital}</li>
    ));

    const countryCurrency = country.currencies && Object.keys(country.currencies).map((currencies, index) => (
        <li key={index}>{country.currencies[currencies].name}</li>
    ));

    const countryFlag = country.flag;

    return (
        <>
            <h2>{countryName}</h2>
            <ul>
                <p>Name: {country.name.common}</p>
                <p>Capital: {countryCapital}</p>
                <p>Currencies: {countryCurrency}</p>
                <p>Flag: {countryFlag}</p>
                {!isVisited && <button onClick={handleVisit}>Visit</button>}
            </ul>
        </>
    );
};

export default Country;