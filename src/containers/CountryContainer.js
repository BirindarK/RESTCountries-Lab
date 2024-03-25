import React, { useEffect, useState } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = ({ markAsVisited }) => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [visited] = useState(false);
    const [isVisited, setIsVisited] = useState(visited);
    const [country] = useState([]);


    const handleVisit = () => {
        setIsVisited(!isVisited);
        markAsVisited(country.name.official);
    };
    
    useEffect(() => {
        const loadCountries = async () => {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const jsonData = await response.json();
            setCountries(jsonData);
        };
    
        loadCountries();
    }, []);

    useEffect(() => {
        console.log("Countries:", countries);
    }, [countries]);

    const handleMarkAsVisited = (countryName) => {
        setVisitedCountries([...visitedCountries, countryName]);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    }

    const filteredCountries = countries.filter(country =>
        country.name.official.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const unvisitedCountries = filteredCountries.filter(country => !visitedCountries.includes(country.name.official));
    const visitedCountriesList = filteredCountries.filter(country => visitedCountries.includes(country.name.official));

    return (
        <>
        <div className="search-form">
        <input
            type="text"
            placeholder="Search for country..."
            value={searchQuery}
            onChange={handleSearch}
        />
    </div>
        <div className = "countries">
        <div className = "unvisited">
            <CountryList
                countries={unvisitedCountries}
                markAsVisited={handleMarkAsVisited}
                visited={false}
                handleVisit={handleVisit}
                country={country}
            />
            </div>
            <div className="visited">
            <CountryList
                countries={visitedCountriesList}
                markAsVisited={handleMarkAsVisited}
                visited={true}
            />
            </div>
        </div>
        </>
    );
};

export default CountryContainer;