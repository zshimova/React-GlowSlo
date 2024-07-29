function Drawer() {
    return (

        <div style={{display: 'none'}} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина
                <img className="remove-btn" src="./img/btn-remove.svg" alt="remove"></img>
                </h2>
                <div className="items">
                <div className="cart-item justify-between mb-20 d-flex align-center">
                <img className="mr-20" width={70} height={90} src='./img/products/b-shirt.jpg' alt="b-shirt"></img>
                <div className="mr-20 cart-p">
                    <p className="mb-5">Топ женский</p>
                    <b>3 500 рублей</b>
                </div>
                <img className="remove-btn" src="./img/btn-remove.svg" alt="remove"></img>
                </div>

                <div className="cart-item justify-between mb-20 d-flex align-center">
                <img className="mr-20" width={70} height={90} src='./img/products/b-shirt.jpg' alt="b-shirt"></img>
                <div className="mr-20 cart-p">
                    <p className="mb-5">Топ женский</p>
                    <b>3 500 рублей</b>
                </div>
                <img className="remove-btn" src="./img/btn-remove.svg" alt="remove"></img>
                </div>
                </div>

                <div className="cart-total-block">
                <ul>
                    <li>
                    <span>Итого</span>
                    <div></div>
                    <b>7 000 рублей</b>
                    </li>
                    <li>
                    <span>Налог 5%</span>
                    <div></div>
                    <b>480 рублей</b>
                    </li>
                </ul>
                <button className="green-button">Оформить заказ
                    <img src="./img/arrow.svg" alt="arrow">
                    </img>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Drawer;