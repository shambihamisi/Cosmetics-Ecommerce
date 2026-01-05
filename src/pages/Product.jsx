import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import AddToCart from "../components/AddToCart";
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      
      if (String(item.id) === String(productId)) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })

  }

  useEffect(() => {
    fetchProductData();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  },[productId, products])
  
  const [qty, setQty] = useState(1);
  const resetQty = () => setQty(1);

  const dec = () => setQty((q) => (q > 1 ? q - 1 : 1));
  const inc = () => setQty((q) => q + 1);



  return productData ? (
    <section className="w-full transition-opacity ease-in duration-500 opacity-100">
      <div className="grid min-h-[90vh] grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT: PRODUCT IMAGE */}
        <div className="flex-1 flex items-center justify-center bg-stone-100 overflow-hidden">
          <img
            src={image}
            alt="Product"
            className="hover:scale-110 transition ease-in-out max-h-75 lg:max-h-95 w-auto object-contain "
            loading="eager"
          />
        </div>

        {/* RIGHT: DETAILS */}
        <div className="bg-lime">
          <div className="mx-auto max-w-xl px-6 py-10 lg:px-10 lg:py-14 md:mt-50">
            <div className="text-center">
              <h1 className="mt-2 text-3xl font-belleza font-medium uppercase tracking-[0.12em] text-brown">
                {productData.title}
              </h1>
              <p className="mt-2 text-xl font-rufina text-brown">{currency}{productData.price}</p>
            </div>

            <div className="mt-7 flex items-center justify-center gap-2 font-rufina text-xs text-brown">
              <span aria-label="rating">★★★★★</span>
              <span className="font-rufina opacity-80">500 Reviews</span>
            </div>

            <p className="mx-auto mt-8 max-w-md text-center font-rufina text-sm leading-relaxed text-brown/85">
              {productData.description}
            </p>

            <AddToCart qty={qty} onDec={dec} onInc={inc} onReset={resetQty} productId={productData.id} />
          </div>
        </div>
      </div>

      {/*RELATED PRODUCTS */}
      <RelatedProducts category={productData.category}/>
    </section>
  ) : <div className='opacity-0'></div>
}


export default Product