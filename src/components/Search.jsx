import classes from './Search.module.css';

const Search = ({location,setLocation,getWeather}) => {
   
    return (
        <form className={classes.location__form} onSubmit={(e) => e.preventDefault()}>
            <input
                className={classes.location__search}
                value={location} 
                type="text"
                placeholder="Enter location..." 
                onChange={(e) => setLocation(e.target.value)}
                onKeyPress={(e) => getWeather(e)}
            />
        </form>
    )
}

export default Search;