import React from "react";

const QuantityCounter = ({ qty, onDec, onInc }) => {
  return (
    <div className="
      grid grid-cols-3 overflow-hidden font-rufina bg-white/55
      h-8 w-22
      sm:h-9 sm:w-28
      md:h-10 md:w-30
    ">
      {/* minus */}
      <button
        type="button"
        onClick={onDec}
        disabled={qty <= 1}
        className="
          grid place-items-center text-brown
          text-base sm:text-lg
          hover:bg-white
          disabled:opacity-40
          cursor-pointer
        "
      >
        −
      </button>

      {/* qty */}
      <div className="
        grid place-items-center text-brown font-rufina
        text-xs sm:text-sm md:text-base
      ">
        {qty}
      </div>

      {/* plus */}
      <button
        type="button"
        onClick={onInc}
        className="
          grid place-items-center text-brown
          text-base sm:text-lg
          hover:bg-white
          cursor-pointer
        "
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
