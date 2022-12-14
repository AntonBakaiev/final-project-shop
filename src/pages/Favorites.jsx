import React from 'react';
import Card from '../components/Card';
import AppContext from '../context'


function Favorites() {
  console.log(AppContext);
 const { favorites, onAddToFavorite }  = React.useContext(AppContext);
    return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Сподобалося</h1>
          
        </div>
         <div className="d-flex flex-wrap">
                 {favorites.map((item, index) => (
                        <Card
                        key={index}
                        favorited={true}
                        onFavorite={onAddToFavorite}
                        {... item}
                        
                            //onPlus={(obj) => onAddToCart(obj)}
                        />
                    ))}
        </div>   
      </div>
    )
}

export default Favorites;