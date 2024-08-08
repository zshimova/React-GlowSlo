import {Link} from 'react-router-dom';

function Header(props) {
    return (
    <header className="d-flex justify-between align-center">
      <Link to='/'>
        <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.svg"></img>
          <div>
            <h3 className="text-uppercase">GlowSlo</h3>
            <p className="opacity-5">Магазин женской одежды</p>
          </div>
        </div>
      </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img src="/img/cart.svg" alt='cart'></img>
            <span>1205 рублей</span>
          </li>
          <li>
            <Link to='/favorites'>
            <img src="/img/heart.svg" alt="Избранное"></img>
            </Link>
          </li>
          <li>
            <img src="/img/user.svg" alt="Пользователь"></img>
          </li>
        </ul>
      </header>
    )
}

export default Header;