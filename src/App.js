import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Favorites from './pages/Favorites';
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
      const cartResponse = await axios.get('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/cart');
      const favoritesResponse = await axios.get('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/favorites');
      const itemsResponse = await axios.get('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/items');
      
      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();

  }, []);


  const onAddToCart = (obj) => {
   
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/cart/${obj.id}`)
        setCartItems(prev => prev.filter(item => item.id !== obj.id))
      } else { 
         axios.post('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/cart', obj)
    setCartItems((prev) => [...prev, obj]);
      }
    
  }

  const onRemoveItem = (id) => { 
    axios.delete(`https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/cart/${id}`)
    setCartItems((prev) => prev.filter(cart => cart.id !== id));
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
      alert('Не вдалося додати')
    }
  };

  const onChangeSearchInput = (event) => { 
    setSearchValue(event.target.value);
  }

  const isItemAdded = (id) => { return cartItems.some((obj) => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider value={{items, cartItems, favorites, onAddToFavorite, isItemAdded}}>
       <div className="wrapper clear ">
      
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
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

      <Route path="/favorites">
        <Favorites />
      </Route>
      

     
    </div>
   </AppContext.Provider>
  );
}

export default App;
