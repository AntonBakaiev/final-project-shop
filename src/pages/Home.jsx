import Card from '../components/Card';


function Home({items,searchValue, onChangeSearchInput, setSearchValue,onAddToFavorite,onAddToCart}) { 
    return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Пошук за запитом: "${searchValue}"`: 'Усі вироби' }</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Пошук ..." />
            {searchValue &&
              <img
                onClick={() => setSearchValue('')} className="clear cu-p " src="/img/Clear-search.png" alt="Clear" />}
          </div>
        </div>
        <div className="d-flex flex-wrap">
                 {items
                    .filter((item) => (item.title.toLowerCase().includes(searchValue.toLowerCase())))
                    .map((item, index) => (
                        <Card
                            key={index}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                            {... item}
                        />
                    ))}
        </div>  
      </div>
    )
}

export default Home;