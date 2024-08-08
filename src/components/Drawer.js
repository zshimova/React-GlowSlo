function Drawer({onClose, onRemove, items = []}) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина
                    <img onClick={onClose} className="remove-btn" src="./img/btn-remove.svg" alt="close"></img>
                </h2>

                {items.length > 0 ? 
                    (<div>
                        <div className="items">
                    {items.map((obj) => (
                            <div className="cart-item justify-between mb-20 d-flex align-center">
                                <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cart-item__img"></div>
                                <div className="mr-20 cart-p">
                                    <p className="mb-5">{obj.title}</p>
                                    <b>{obj.price}</b>
                                </div>
                                <img onClick={() => onRemove(obj.id)} className="remove-btn" src="./img/btn-remove.svg" alt="remove" />
                            </div>
                    ))}
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
                                <img src="./img/arrow.svg" alt="arrow" />
                            </button>
                        </div>
                    </div>)
                    :
                    (<div className="cart-empty d-flex align-center justify-center flex-column flex">
                        <img src="./img/empty-cart.svg" alt="empty-cart" />
                        <h2>Корзина пустая</h2>
                        <p className="opacity-6">Добавьте хотя бы один товар в корзину, чтобы сделать заказ</p>
                        <button onClick={onClose} className="green-button">
                            <img src="./img/arrow.svg" alt="back"></img>Вернуться назад
                        </button>
                    </div>)
                    
                }

                
        </div>
    </div>
    );
}

export default Drawer;