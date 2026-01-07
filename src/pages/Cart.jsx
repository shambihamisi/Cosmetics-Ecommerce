import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import QuantityCounter from '../components/QuantityCounter';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {

  const { products, currency, cartItems, incQty, decQty, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData,setCartData] = useState([]);

  useEffect(() => {

    const tempdata = [];
    for(const item in cartItems) {
      if (cartItems[item] > 0) {
        tempdata.push({
          id:item,
          quantity:cartItems[item]
        })
      }
    }
    setCartData(tempdata);
  },[cartItems])

  return (
    <section>

      <p className='text-2xl text-brown mt-6 font-belleza'>YOUR <span className='font-bold'>CART</span></p>
      <div className='p-4 px-6'>

        <div>
          {
            cartData.map((item,index) => {

              const productData = products.find((products) => String(products.id) === String(item.id));

              const qty = item.quantity;

              return (
                <div key={index} className='py-4 border-b border-brown text-brown font-rufina grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                  <div className='flex items-start gap-6'>
                    <img src={productData.image[0]} alt="product image" className='w-16 sm:w-20'/>
                    <div>
                      <p className='text-md sm:text-lg font-rufina text-brown font-bold'>{productData.title}</p>
                      <div className='flex items-center gap-5 mt-2'>
                        <p>{currency}{productData.price}</p>
                      </div>
                    </div>
                  </div>
                  
                    <QuantityCounter qty={qty} onDec={() => decQty(item.id)} onInc={() => incQty(item.id)}/>

                    <img 
                    src={assets.bin_icon} 
                    alt="trash" 
                    onClick={() => updateQuantity(item.id,0)}
                    className='w-4 mr-4 sm:w-5 cursor-pointer'/>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-110'>
          <CartTotal />
          <div className='w-full sm:w-110'>
            <button onClick={() => navigate('/place-order')} className='bg-brown text-white text-sm font-belleza my-8 px-8 py-3 cursor-pointer'>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Cart