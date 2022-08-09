
function App() {
  return (
    <div className="wrapper clear ">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.jpg"/>
          <div className="headerInfo">
            <h3 className="text-uppercase">Your.ring_UA</h3>
            <p className="opacity-5">вироби з бісеру</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
           <img src="/img/Shop-cart.svg" alt="" />
            <span>500 грн</span>
          </li>
          <li className="mr-30">
            <img src="/img/favorite.svg" alt="favorite" />
          </li>
          <li>
            <img src="/img/Union.svg" alt="Union" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Усі вироби</h1>

        <div className="d-flex flex-wrap">
          <div className="card">
          <img width={133} height={112} src="/img/products/001.jpg" alt="" />
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
          <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Ціна:</span>
            <b> 1....1 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.png" alt="Plus" />
            </button>
            </div>
          </div>
          
          <div className="card">
          <img width={133} height={112} src="/img/products/002.jpg" alt="" />
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
          <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Ціна:</span>
            <b> 1....1 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.png" alt="Plus" />
            </button>
            </div>
          </div>
          
          <div className="card">
          <img width={133} height={112} src="/img/products/003.jpg" alt="" />
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
          <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Ціна:</span>
            <b> 1....1 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.png" alt="Plus" />
            </button>
            </div>
          </div>
          
          <div className="card">
          <img width={133} height={112} src="/img/products/004.jpg" alt="" />
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
          <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Ціна:</span>
            <b> 1....1 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.png" alt="Plus" />
            </button>
            </div>
          </div>
          
          <div className="card">
          <img width={133} height={112} src="/img/products/005.jpg" alt="" />
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
          <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Ціна:</span>
            <b> 1....1 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.png" alt="Plus" />
            </button>
            </div>
        </div>
        </div>  


      </div>
    </div>
  );
}

export default App;
