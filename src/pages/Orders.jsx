import React, { useContext, useMemo } from 'react'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {

  const { currency, delivery_fee, getCartAmount, getCartLines } = useContext(ShopContext);

  const lines = useMemo(() => getCartLines(), [getCartLines]);
  const subTotal = getCartAmount();
  const total = subTotal === 0 ? 0 : subTotal + delivery_fee;

  return (
    <div className='pt-10'>
      
      <div className='text-2xl font-belleza text-brown pb-6'>
        <p>MY ORDERS</p>
      </div>

      <div>
        {
          lines.slice(0,4).map((item,index) => (
            <div className="py-4 border-b border-brown flex items-center justify-between gap-6 font-rufina text-brown">

              {/* PRODUCT */}
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="h-16 w-16 bg-white border rounded overflow-hidden grid place-items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="absolute -top-2 -right-2 h-5 min-w-5 px-1 rounded-full bg-black text-white text-xs grid place-items-center">
                    {item.qty}
                  </div>
                </div>

                {/* DATE & PRICE */}
                <div className="text-sm">
                  <p className="font-medium">{item.title}</p>
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p className="text-xs opacity-70 mt-1">
                    Date: {new Date().toDateString()}
                  </p>
                  <p className="text-xs opacity-70">Payment: M-PESA</p>
                </div>
              </div>

              {/* ORDER STATUS */}
              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span>Order Placed</span>
              </div>
              {/* ORDER STATUS */}
              <button className="border px-4 py-2 text-xs cursor-pointer rounded hover:bg-brown hover:text-white transition">
                Track Order
              </button>
            </div>

          ))
        }
      </div>


    </div>
  )
}

export default Orders