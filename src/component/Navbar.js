import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

function Navbar({quantity}) {

  return (
    <div>
     <ul className='nav'>
      <h2 color='yellow'><l1>Clickcart</l1></h2>
      <li>
        <FaShoppingCart className='cart-icons'/>
        <span className='cart_quantity'>{quantity }</span>
        
        </li>
     </ul>
      
    </div>
  )
}

export default Navbar

