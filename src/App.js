import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  { name: 'Обручка1', price: 500, imageURL: '/img/products/001.jpg' },
  { name: 'Обручка2', price: 544, imageURL: '/img/products/002.jpg' },
  { name: 'Обручка3', price: 878, imageURL: '/img/products/003.jpg' }
]
function App() {
  return (
    <div className="wrapper clear ">
      
      <Drawer />
      <Header /> 
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Усі вироби</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder ="Пошук ..."/>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {arr.map((obj) => (
            <Card
              title={obj.name}
              price={obj.price}
              imageURL={ obj.imageURL}
          />
          )) }
          
          
        </div>  


      </div>
    </div>
  );
}

export default App;
