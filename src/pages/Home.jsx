import Card from '../components/Card/Card';

function Home(
    {items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,}
   
) {
    return(
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все товары"}</h1>
          <div className="search-block d-flex">
            <img src="./img/search.svg" alt="search"></img>
            {searchValue && (<img onClick={() => setSearchValue('')} className="clear remove-btn" src="./img/btn-remove.svg" alt="clear"></img>)}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>
        
        <div className="cards d-flex flex-wrap">
          {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
              <Card 
              key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onClickAdd ={(obj) => onAddToCart(obj)}
              {...item}/>
            ))
          }

        </div>

      </div>
    );
}

export default Home;