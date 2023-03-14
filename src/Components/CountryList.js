import Country from "./Country"


const CountryList = ({countries}) => {
    
    const countryComponents = countries.map((country, id) => {
        return <Country displayCountry={country} key={id}/>
    })

  return <ul>{countryComponents}</ul>;


}

export default CountryList;