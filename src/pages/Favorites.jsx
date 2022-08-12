import Card from '../components/Card';


function Favorites({items,onAddToFavorite}) { 
    return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Сподобалося</h1>
          
        </div>
         <div className="d-flex flex-wrap">
                 {items
                    //.filter((item) => (item.title.toLowerCase().includes(searchValue.toLowerCase())))
                    .map((item, index) => (
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