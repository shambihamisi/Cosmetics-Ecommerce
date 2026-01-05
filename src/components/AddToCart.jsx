import React, { useContext } from "react";
import { ShopContext } from '../context/ShopContext'


const AddToCart = ({ qty, onDec, onInc, productId}) => {

    const { onAdd } = useContext(ShopContext);

const handleAdd = () => {
    if (!productId || qty < 1) return;
    onAdd(productId, qty);
    
    if(typeof onReset === 'function'){
      onReset();
    }
  };


  return (
    <div className="mx-auto mt-10 flex max-w-md items-stretch justify-center">
      <div className="grid grid-cols-3 overflow-hidden bg-white/55">
        <button
          type="button"
          onClick={onDec}
          aria-label="Decrease quantity"
          className="grid cursor-pointer h-12 w-12 place-items-center text-lg text-brown hover:bg-white disabled:opacity-40"
          disabled={qty <= 1}
        >
          −
        </button>

        <div className="grid h-12 w-14 place-items-center text-sm text-brown">
          {qty}
        </div>

        <button
          type="button"
          onClick={onInc}
          aria-label="Increase quantity"
          className="grid cursor-pointer h-12 w-14 place-items-center text-lg text-brown hover:bg-white"
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="cursor-pointer h-12 bg-[#f2a26b] px-6 text-sm font-medium uppercase tracking-[0.14em] text-brown hover:bg-[#ea9458]"
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;