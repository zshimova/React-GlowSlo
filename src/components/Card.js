function Card() {
    return (
        <div className="card">
            <div className="favorite">
            <img src="./img/unliked.svg" alt="unliked"></img>
            </div>
            <img width={133} height={180} src="./img/products/b-shirt.jpg" alt="b-shirt"></img>
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
    )
}

export default Card;