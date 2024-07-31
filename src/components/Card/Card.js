import cardStyles from './Card.module.scss'

console.log(cardStyles);

function Card(props) {
    return (
        <div className={cardStyles.card}>
            <div className="favorite">
            <img src="./img/unliked.svg" alt="u nliked"></img>
            </div>
            <img width={133} height={180} src={props.imageUrl} alt="b-shirt"></img>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{props.price} рублей</b>
              </div>
              <button className="button" onClick={props.onClick}>
                <img  width={11} height={11} src="./img/plus.svg" alt="Plus"></img>
              </button>
            </div>
          </div>
    )
}

export default Card;