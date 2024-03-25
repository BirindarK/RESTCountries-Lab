
import React from "react";
import Country from "./Country";

const CountryList = ({ countries, markAsVisited, visited }) => {
    const mappedCountries = countries.map(country => (
        <Country 
            country={country} 
            key={country.name.official} 
            markAsVisited={markAsVisited} 
            visited={visited} 
        />
    ));

    return (
        <>
            <h2>{visited ? 'Visited Countries' : 'Unvisited Countries'}</h2>
            <ul>
                {mappedCountries}
            </ul>
        </>
    );
};

export default CountryList;


     
