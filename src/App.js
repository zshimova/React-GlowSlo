import Header from './components/Header';
import Card from './components/Card/Card';
import Drawer from './components/Drawer';

const arr = [
  {name: 'Топ женский, 40 - 44 размер',
  price: 3500,
  imageUrl: './img/products/b-shirt.jpg'},
  {name: 'Топ женский, 40 - 44 размер',
  price: 3500,
  imageUrl: './img/products/p-shirt.jpg'},
  {name: 'Шорты женские, 40 - 44 размер',
  price: 3500,
  imageUrl: './img/products/pants.jpeg'},
  {name: 'Брюки женские, 40 - 46 размер',
  price: 3500,
  imageUrl: './img/products/shorts.jpeg'},
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все товары</h1>
          <div className="search-block d-flex">
            <img src="./img/search.svg" alt="search"></img>
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        
        <div className="cards d-flex">
          {
            arr.map((obj) => (
              <Card 
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={()=>console.log(obj)}/>
            ))
          }

        </div>

      </div>

    </div>
  );
}

export default App;
