import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import AppContext from './context';




function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => { 
    async function fetchData() { 
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/cart'),
          axios.get('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/favorites'),
          axios.get('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/items')
        ]);
        /*const cartResponse = await axios.get('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/cart');
      const favoritesResponse = await axios.get('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/favorites');
      const itemsResponse = await axios.get('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/items');*/
      
      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
      } catch (error) {
        alert('Помилка при запиті данних')
        console.error(error)
      }
    }

    fetchData();
  }, []);


   const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        await axios.delete(`https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/cart/${findItem.id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Помилка пр додавванні в кошик');
      console.error(error);
    }
  };

  const onRemoveItem = (id) => { 
    try {
    axios.delete(`https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));

    } catch (error) {
      alert('Помилка при видаленні з кошика')
      console.error(error);
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://62f4259b3e1100d6f637a75f.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://62f4259b3e1100d6f637a75f.mockapi.io/favorites', obj)
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) { 
      alert('Не вдалося додати до уподобаного')
      console.error(error)
    }
  };

  const onChangeSearchInput = (event) => { 
    setSearchValue(event.target.value);
  }

  const isItemAdded = (id) => { return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      favorites,
      onAddToFavorite,
      onAddToCart,
      isItemAdded,
      setCartOpened,
      setCartItems
    }}>
    <div className="wrapper clear ">
      
    <Drawer
      items={cartItems}
      onClose={() => setCartOpened(false)}
      onRemove={onRemoveItem}
      opened={cartOpened}     
    />
    
    <Header onClickCart={() => setCartOpened(true)} /> 
   
    <Route path='/' exact>
        <Home
          items={items}
          cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput} onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          isLoading={isLoading}  
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites />
      </Route>
        
      <Route path="/orders" exact> 
        <Orders />
      </Route>
    </div>
   </AppContext.Provider>
  );
}

export default App;
