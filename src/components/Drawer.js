function Drawer({onClose, onRemove,items = [] }) { 
    return (
        <div  className="overlay">
        <div className="drawer">
          <h2 className=" d-flex justify-between mb-30 ">Корзина
            <img onClick={onClose} className="removeBtn cu-p" src="/img/remove.svg" alt="Close" /> </h2>
          
          {
            items.length > 0 ? <div >
              <div className="items flex">
            {items.map((obj) =>( <div className="cartItem d-flex align-center mb-20">
              <img className="mr-20" width={70} height={70} src={obj.imageURL} alt="" />
              <div className="mr=20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} грн.</b>
              </div>
              <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/remove.svg" alt="remove" />
            </div>)) } 
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
              
            </div>  : <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width={120} height={120} src="/img/empty-cart.svg" alt="empty-Cart" />
            <h2>Корзина порожня</h2>
            <p className="opacity-6"> Додайте хочаб одну одиницю товару щоб зробити замовлення </p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/pointer.svg" alt="Arrow" /> Повернутися назад 
            </button>
          </div>
          }
          
          

          
         
    </div>
        </div>
    )
}

export default Drawer;