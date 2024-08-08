import Card from '../components/Card/Card';

function Favorites({items, onAddToFavorite}) {
    return(
        <div className="content p-40">
          <div className="cards d-flex align-center justify-between mb-40">
            <h1>Мое избранное</h1>
            Тут будет ваше избранное. Но у нас нет базы данных, поэтому тут ваша корзина
          </div>
            <div className="d-flex flex-wrap">
              {items.map((item, index) => (
                <Card key={index} 
                favorited={true} 
                onFavorite={onAddToFavorite} 
                {...item} />
              ))}
          </div>
      </div>
    );
}

export default Favorites;