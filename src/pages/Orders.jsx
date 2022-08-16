import axios from 'axios';
import React from 'react';
import Card from '../components/Card';


function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://62f4259b3e1100d6f637a75f.mockapi.io/BAI/orders');
      setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
      setIsLoading(false) 
      } catch (error) {
        alert('Помилка при запиті замовлення')
        console.error(error)
      }
    })();

  }, []);
  
    return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Мої замовлення</h1>
          
        </div>
         <div className="d-flex flex-wrap">
          {(isLoading ? [...Array(8)] : orders).map((item, index) => (
            <Card
              key={index} 
              loading ={isLoading}
              {... item}
            />
          ))}
        </div>   
      </div>
    )
}

export default Orders;