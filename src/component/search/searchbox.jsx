import React, { useEffect } from 'react';
import '../search/search.css';


const SearchBox = (props) =>{
 
   
    return(
        
        <input type="search" placeholder = "search monsters" onChange={props.filter} />
        )
}

export default SearchBox ;