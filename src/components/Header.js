function Header() { 
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.jpg" alt=""/>
          <div className="headerInfo">
            <h3 className="text-uppercase">Your.ring_UA</h3>
            <p className="opacity-5">вироби з бісеру</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
           <img className='mr-10' src="/img/Shop-cart.svg" alt="" />
            <span> 500 грн</span>
          </li>
          <li className="mr-30">
            <img src="/img/favorite.svg" alt="favorite" />
          </li>
          <li>
            <img src="/img/Union.svg" alt="Union" />
          </li>
        </ul>
      </header>
    );
}

export default Header;