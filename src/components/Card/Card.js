import React from 'react';
import cardStyles from './Card.module.scss'

function Card({id, title, imageUrl, price, onFavorite, onClickAdd, favored=false}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favored);


  const handleClick = () => {
    onClickAdd({title, imageUrl, price});
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({id, title, imageUrl, price});
    setIsFavorite(!isFavorite);
  }

    return (
        <div className={cardStyles.card}>
            <div className="favorite" onClick={onClickFavorite}>
            <img src={isFavorite ? './img/liked.svg' : './img/unliked.svg'}alt="unliked"></img>
            </div>
            <img width={133} height={180} src={imageUrl} alt="b-shirt"></img>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} рублей</b>
              </div>
                <img className={cardStyles.plus} onClick={handleClick} src={isAdded ? './img/btn-checked.svg' : './img/btn-plus.svg'} alt="Plus"></img>
            </div>
          </div>
    );
}

export default Card;