function Drawer() { 
    return (
        <div style={{ display: 'none'}} className="overlay">
        <div className="drawer">
          <h2 className=" d-flex justify-between mb-30 ">Корзина  <img className="removeBtn cu-p" src="/img/remove.svg" alt="remove" /> </h2>

          <div className="items flex">
            
            <div className="cartItem d-flex align-center mb-20">
              <img className="mr-20" width={70} height={70} src="/img/products/001.jpg" alt="" />
              <div className="mr=20 flex">
                <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <b>1...1 грн.</b>
              </div>
              <img className="removeBtn" src="/img/remove.svg" alt="remove" />
            </div>
          </div>
          <div className="cartTotalBlock">
             <ul className="">
              <li>
                <span>Доставка:</span>
                <div></div>
                <b>1.1.1.1 грн</b>
              </li>
              <li>
                <span>Всього:</span>
                <div></div>
                <b>1.1.1.1.1 грн</b>
              </li>
          </ul>
          <button className="greenButton">Оформити замовлення <img src="/img/pointer.svg" alt="Pointer" /></button>
          </div>  
    </div>
        </div>
    )
}

export default Drawer;