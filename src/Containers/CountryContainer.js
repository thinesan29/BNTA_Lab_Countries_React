import { useState, useEffect } from "react";
import CountryList from "../Components/CountryList";


const CountryContainer = () => {

    const [countries, setCountries] = useState("");

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all") // fetches the data
        .then((response) => response.json())        // converts the response to json
        .then((jsonData) => setCountries(jsonData));
    },[])

          return (
             // Ternary operator - condition ? truthy result : falsy result
            countries ? <CountryList countries = {countries}/> 
            : <p>Loading list of countries...</p>
            
        
        )

}

export default CountryContainer;