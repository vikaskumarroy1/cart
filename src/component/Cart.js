import './Cart.css'
import React from 'react'
import react,{useState} from "react"

function Cart({products,setProducts, setQuantity,quantity}) {
  console.log(products);
  const [total, setTotal] = useState(0)
  
  function Increase(id){
    
let tempProduct=products;
tempProduct.map((product)=>{
  if(product.id===id){
    product.quntity += 1
    setTotal(total+product.price)
    setQuantity(quantity +1)
  }
  return product;
})
let temp=[...tempProduct]
setProducts(temp)

  }

  function Decrease(id){
    let tempProducts=[...products]
    tempProducts.map((product)=>{
      if(product.id===id && product.quntity>=0){
        product.quntity -= 1
        setTotal(total-product.price)
        setQuantity(quantity -1)
      }
      return product;
    })
    setProducts(tempProducts)
    
  }
  function removeProduct(id){
    let tempProducts=[...products];
   let arr= tempProducts.filter((product)=>{
      if(product.id === id){
       setTotal(total - product.quntity * product.price)
       setQuantity(quantity -quantity.product)
       
      }
      return product.id !==id;
    })
    // console.log(arr)
    setProducts(arr);

  }

  return (
   
    <div>
       {products.length<=0 && <h3 className='empty-popup'>is currently empty</h3>}
      {
        products.map((product)=>{
         return <div key={product.id}>
          
          <img src={product.image} className='image'/>
          
          <h1 className='p-name'>{product.name}</h1>
          <h4 className='p-price'>{product.price}</h4>
          
          <button onClick={()=>{
            removeProduct(product.id)
          }}  className='remove-btn'>Remove</button>
          
          
          <div className='inc-dec-btn'>
            <button onClick={()=>{
              Increase(product.id)
            }} className='increase-btn'>Add To Cart</button>
            <h3 className='p-quantity'>{product.quntity}</h3>
            <button onClick={()=>{
              Decrease(product.id)
            }} className='decrease-btn'>RemoveCart</button>
          </div>
         </div>
        })
      }
      
      
      
     <div>
      <div>
        <h4>Total :{total}</h4>
      </div>
      <button onClick={()=>{
        setProducts([])
        setTotal(0);
        setQuantity(0)
      }} className='clear-cart'>Clear cart</button>
     </div>
    </div>
  )
}

export default Cart

