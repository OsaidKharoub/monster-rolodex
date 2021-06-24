import React from 'react';
import '../card/card.css'




const Card = (props) => {
return(

        <div className ="card-list">
{
     props.monsters.map(monst => {
        return(
            <div className = "card"> 
            <img src={`https://robohash.org/${monst.id}?gravatar=yes`} alt="" />
            <h3>{monst.name}</h3>
            <p>{monst.email}</p>
            </div>
            
        )
    })
}
        </div>
           
        
      
    
)
}

export default Card ;