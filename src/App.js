import react,{useState} from "react"
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Cart from './component/Cart';


function App() {
    const [products,setProducts]= useState([
      {
      id:1,
      name:"Samsung",
      quntity:1,
      price:30000,
      image:"https://m.media-amazon.com/images/I/71o1csyQILL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id:2,
      name:"iphone",
      quntity:1,
      price:40000,
      image:"https://rukminim2.flixcart.com/image/416/416/l0igvww0/mobile/r/q/m/-original-imagca5ajerqpfjy.jpeg?q=70&crop=false"
    },
    {
      id:3,
      name:"Nokia",
      quntity:1,
      price:50000,
      image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/h/p/g42-5g-ta-1586-nokia-original-imagunrnzqwb7fdf.jpeg?q=70&crop=false"
    },
    {
      id:4,
      name:"Blackberry",
      quntity:1,
      price:60000,
      image:"https://rukminim2.flixcart.com/image/416/416/mobile/6/x/f/blackberry-9720-original-imadzmxdksxc8hby.jpeg?q=70&crop=false"
      
    },
  ])
  const [quantity, setQuantity] =useState(0)
  return (
    <div className="App">
      <Navbar quantity={quantity}/>
      
      <Cart products={products} setProducts={setProducts} setQuantity={setQuantity}
      quantity={quantity}/>
     
    </div>
  );
}

export default App;
