function Header() {
    return (
    <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
         <img width={40} height={40} src="/img/logo.svg"></img>
        <div>
          <h3 className="text-uppercase">GlowSlo</h3>
          <p className="opacity-5">Магазин женской одежды</p>
        </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg"></img>
            <span>1205 рублей</span>
          </li>
          <li>
            <img src="/img/user.svg"></img>
          </li>
        </ul>
      </header>
    )
}

export default Header;