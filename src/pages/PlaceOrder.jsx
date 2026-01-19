import React, { useContext, useMemo, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from '../assets/assets';

const PlaceOrder = () => {
  const { currency, delivery_fee, getCartAmount, getCartLines, navigate } =
    useContext(ShopContext);

  const lines = useMemo(() => getCartLines(), [getCartLines]);
  const subTotal = getCartAmount();
  const total = subTotal === 0 ? 0 : subTotal + delivery_fee;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">

        <div>
          
          {/* PAY BUTTONS */}
          <div className="flex gap-3 mb-8">
            <button
              type="button"
              className='flex-1 h-14 bg-stone-800 rounded grid place-items-center cursor-pointer'
            >
              <img
                src={assets.mpesa_logo}
                alt="M-Pesa"
                className="h-8 w-auto object-contain"
              />
            </button>

            <button
              type="button"
              className="flex-1 bg-amber-500 rounded grid place-items-center cursor-pointer"
            >
              <img
                src={assets.paypal_logo}
                alt="PayPal"
                className="h-6 object-contain"
              />
            </button>

            <button
              type="button"
              className="flex-1 bg-indigo-900 rounded grid place-items-center cursor-pointer"
            >
              <img
                src={assets.gpay_logo}
                alt="Google Pay"
                className="h-6 object-contain"
              />
            </button>
          </div>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          
          {/* INPUT FIELD */}
          <div className="space-y-6">
            <div>
              <label className="block text-brown font-rufina text-sm mb-1">Contact</label>
              <input
                type="text"
                placeholder="Email or mobile phone number"
                className="w-full border border-brown px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-brown font-rufina text-sm mb-2">Delivery</label>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <input placeholder="First name" className="border border-brown px-3 py-2 rounded" />
                <input placeholder="Last name" className="border border-brown px-3 py-2 rounded" />
              </div>

              <input
                placeholder="Address"
                className="border border-brown px-3 py-2 rounded w-full mb-3"
              />

              <input
                placeholder="Apartment, suite, etc. (optional)"
                className="border border-brown px-3 py-2 rounded w-full mb-3"
              />

              <div className="grid grid-cols-3 gap-3">
                <input placeholder="City" className="border border-brown px-3 py-2 rounded" />
                <input placeholder="State" className="border border-brown px-3 py-2 rounded" />
                <input placeholder="ZIP code" className="border border-brown px-3 py-2 rounded" />
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-lime p-6 rounded">
          <div className="space-y-4">

            {lines.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-14 w-14  border-white bg-white rounded overflow-hidden grid place-items-center">
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

                  <p className="text-sm font-rufina font-medium">{item.title}</p>
                </div>

                <p className="text-sm font-rufina">
                  {currency}
                  {item.lineTotal}
                </p>
              </div>
            ))}

            <div className="flex gap-3 pt-4">
              <input
                placeholder="Discount code or gift card"
                className="flex-1 border border-brown px-3 py-2 rounded text-sm"
              />
              <button className="border cursor-pointer bg-brown text-white font-rufina px-4 py-2 rounded text-sm">
                Apply
              </button>
            </div>

            <div className="pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{currency}{subTotal}</p>
              </div>

              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p>{subTotal === 0 ? 0 : `${currency}${delivery_fee}`}</p>
              </div>

              <div className="flex justify-between font-bold text-lg pt-2">
                <p>Total</p>
                <p>{currency}{total}</p>
              </div>
            </div>

          </div>
        </div>

        <button
            onClick={() => navigate('/orders')}
            type="button"
            className="w-full bg-black text-white py-4 rounded font-medium font-rufina cursor-pointer">
            PAY NOW
        </button>

      </div>
    </div>
  );
};

export default PlaceOrder;