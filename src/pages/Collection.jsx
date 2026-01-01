import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const { products } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false)
  const [filterProducts,setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products)
  },[]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-brown'>

      {/* FILTER CATEGORIES */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='text-brown my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img 
          className={`h-3 lg:hidden ${showFilter ? 'rotate-90' : ''}`}
          src={assets.dropdown_icon} alt="" />
        </p>

        <div className={`border border-brown pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} lg:block`}>
          <p className='mb-3 text-sm font-rufina font-bold text-brown'>CATEGORIES</p>
          <div className='flex flex-col gap-2 ml-2 text-sm text-brown font-rufina font-light'>
            <p>
              <input 
              type="checkbox" 
              className='w-3 mr-2'
              value='Skincare'
              />
              Skincare
            </p>

            <p>
              <input 
              type="checkbox" 
              className='w- mr-2'
              value='Makeup'
              />
              Makeup
            </p>

            <p>
              <input 
              type="checkbox" 
              className='w- mr-2'
              value='Haircare'
              />
              Haircare
            </p>

            <p>
              <input 
              type="checkbox" 
              className='w-3 mr-2'
              value='Fragrance'
              />
              Fragrance
            </p>

            <p>
              <input 
              type="checkbox" 
              className='w-3 mr-2'
              value='Bodycare'
              />
              Bodycare
            </p>

            <p>
              <input 
              type="checkbox" 
              className='w-3 mr-2'
              value='Tools & Accessories'
              />
              Tools & Accessories
            </p>
          </div>

        </div>
      </div>

      {/*PRODUCTS SIDE */}
      <div className="flex-1">

        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL PRODUCTS'}/>

          {/*SORT BY */}
          <select className='border border-brown text-sm px-3 text-brown'>
            <option value="relevance">Sort by: Relevance</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>

        </div>

        {/*PRODUCT MAPPING */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index) => (
              <ProductItem 
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}/>
            ))
          }
        </div>

      </div>
      
    </div>
  )
}

export default Collection