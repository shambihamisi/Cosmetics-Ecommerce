import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,title,price,label}) => {

    const {currency} = useContext(ShopContext);

  return (
        <Link to={`/product/${id}`} className="block font-rufina text-brown">

            {/* white tile */}
            <div className="bg-stone-100 h-100 lg:h-120 px-8 py-8">
                <div className="h-full flex flex-col">
                {/* top label */}
                <div className="flex items-center gap-2 text-sm tracking-wide mb-6">
                    
                    <span>{label}</span>
                </div>

                {/* image */}
                <div className="flex-1 flex items-center justify-center">
                    <img
                    src={image[0]}
                    alt={title}
                    className="hover:scale-110 transition ease-in-out max-h-75 lg:max-h-95 w-auto object-contain"
                    loading="lazy"
                    />
                </div>
                </div>
            </div>

            <div className="pt-4 px-8">
                <p className="text-lg leading-snug">{title}</p>
                <p className="text-base font-medium">
                {currency}
                {price}
                </p>
            </div>
    </Link>
  );
};

export default ProductItem