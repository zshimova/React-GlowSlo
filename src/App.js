import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://66aa9907636a4840d7c81f08.mockapi.io/items').then((res) =>{
      setItems(res.data);
    });

    axios.get('https://66aa9907636a4840d7c81f08.mockapi.io/cart').then((res) =>{
      setCartItems(res.data);
    });

    axios.get('https://66aa9907636a4840d7c81f08.mockapi.io/cart').then((res) =>{
      setFavorites(res.data);
    });

  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://66aa9907636a4840d7c81f08.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://66aa9907636a4840d7c81f08.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value);
};


const onAddToFavorite = async (obj) => {
 try {
  if(favorites.find((favObj) => favObj.id === obj.id)) {
    axios.delete(`https://66aa9907636a4840d7c81f08.mockapi.io/favorites/${obj.id}`);
  } else {
    const {data} = await axios.post('https://66aa9907636a4840d7c81f08.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, data]);
  }
 } catch (error) {
  alert('Не удалось добавить в избранное');
 }
};
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route exact path='/' element={<Home
        items={items}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onChangeSearchInput={onChangeSearchInput}
        onAddToFavorite={onAddToFavorite}
        onAddToCart={onAddToCart}
        />}/>
        <Route exact path='/favorites' element={
          <Favorites 
          items={favorites}
          onAddToFavorite={onAddToFavorite}
          />
        }/>
      </Routes>

    </div>
  );
}

export default App;




  // const [count, setCount] = React.useState(5);
  // const plus = () => {
  //   setCount(count + 1)
  // }
  // const minus = () => {
  //   setCount(count - 1);
  //   console.log(count)
  // }
  {/* <div>
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={() => minus()}>-</button>
      </div> */}