import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';

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
          <Card />
          {/* <div className="card">
            <img width={133} height={180} src="./img/products/p-shirt.jpg" alt="p-shirt"></img>
            <h5>Топ женский, 40 - 44 размер</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>3 500 рублей</b>
              </div>
              <button className="button">
                <img  width={11} height={11} src="./img/plus.svg" alt="Plus"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={180} src="./img/products/b-sleepwear.jpg" alt="b-sleepwear"></img>
            <h5>Топ женский, 40 - 44 размер</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>3 500 рублей</b>
              </div>
              <button className="button">
                <img  width={11} height={11} src="./img/plus.svg" alt="Plus"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={180} src="./img/products/p-sleepwear.jpg" alt="p-sleepwear"></img>
            <h5>Топ женский, 40 - 44 размер</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>3 500 рублей</b>
              </div>
              <button className="button">
                <img  width={11} height={11} src="./img/plus.svg" alt="Plus"></img>
              </button>
            </div>
          </div> */}

        </div>

      </div>

    </div>
  );
}

export default App;
