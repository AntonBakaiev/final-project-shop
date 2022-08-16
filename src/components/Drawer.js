import axios from "axios";
import React from "react";
import { useCart } from "./hooks/useCart";
import Info from "./Info";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
   

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/orders', { items: cartItems });
      setOrderId(data.id);
    setIsOrderComplete(true);
      setCartItems([]);

     for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/cart/' + item.id);
        await delay(1000); 
      }
    } catch (error) {
      alert ('Не вдалося створити замовлення')
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className=" d-flex justify-between mb-30 ">Кошик
          <img onClick={onClose} className="removeBtn cu-p" src="/img/remove.svg" alt="Close" /> </h2>
          
        {
          items.length > 0 ? <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <img className="mr-20" width={70} height={70} src={obj.imageURL} alt="" />
                  <div className="mr=20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} грн.</b>
                  </div>
                  <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/remove.svg" alt="remove" />
                </div>))}
            </div>
            <div className="cartTotalBlock">
              <ul className="">
                <li>
                  <span>Всього:</span>
                  <div></div>
                  <b>{totalPrice} грн</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформити замовлення <img src="/img/pointer.svg" alt="Pointer" /></button>
            </div>
          </div>
            : (
              <Info
                title={isOrderComplete ? 'Замовлення оформлене' : 'Кошик порожній'}
                description={
                  isOrderComplete ? `Ваше замовлення № ${orderId} найближчим часом буде передане в службу доставки` : "Додайте хочаб одну одиницю товару щоб зробити замовлення"
                }
                image={isOrderComplete ? "/img/complete-order.svg" : "/img/empty-cart.svg"}
              />
            )}
      </div>
    </div>
  );
}

export default Drawer;