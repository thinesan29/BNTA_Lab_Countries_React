const Country = ({displayCountry}) => {
  return (
    <form>
      <input type="checkbox" id={displayCountry.id}/>
      <label htmlFor={displayCountry.id}>{displayCountry.name.common}</label>
    </form>
)
}

export default Country;
