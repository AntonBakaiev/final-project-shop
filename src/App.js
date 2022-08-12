import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Favorites from './pages/Favorites';

function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => { 
    axios.get('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/cart').then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/favorites').then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
     axios.post('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/cart', obj)
    setCartItems((prev) => [...prev, obj]);
  }

  const onRemoveItem = (id) => { 
    //console.log(id);
    axios.delete(`https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/cart/${id}`)
    setCartItems((prev) => prev.filter(cart => cart.id !== id));
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://62f4259b3e1100d6f637a75f.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
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

  return (
    <div className="wrapper clear ">
      
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} /> 

        
      <Route path='/' exact>
        <Home items={items} searchValue={searchValue}
          setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} />
      </Route>

      <Route path="/favorites">
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
      

     
    </div>
  );
}

export default App;
