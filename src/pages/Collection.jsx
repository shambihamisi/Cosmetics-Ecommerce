import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false)
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [sortType,setSortType] = useState('relevance')

  const toggleCategory = (e) => {

      if (category.includes(e.target.value)) {
        setCategory(prev=> prev.filter(item => item !== e.target.value))
      }
      else {
        setCategory(prev => [...prev,e.target.value])
      }

  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    setFilterProducts(productsCopy)

  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(() => {
    setFilterProducts(products)
  },[]);

  useEffect(() => {
    applyFilter();
  },[category,search,showSearch])

  useEffect(() => {
    sortProduct();
  },[sortType])

  return (
    <section className='flex flex-col xl:flex-row gap-1 sm:gap-10 pt-10 border-t border-brown'>

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
              value={'Skincare'}
              onChange={toggleCategory}
              />
              Skincare
            </p>

            <p>
              <input 
              type="checkbox" 
              className='w-3 mr-2'
              value={'Makeup'}
              onChange={toggleCategory}
              />
              Makeup
            </p>

            <p>
              <input 
              type="checkbox" 
              className='w-3 mr-2'
              value={'Haircare'}
              onChange={toggleCategory}
              />
              Haircare
            </p>

            <p>
              <input 
              type="checkbox" 
              className='w-3 mr-2'
              value={'Fragrance'}
              onChange={toggleCategory}
              />
              Fragrance
            </p>

            <p>
              <input 
              type="checkbox" 
              className='w-3 mr-2'
              value={'Bodycare'}
              onChange={toggleCategory}
              />
              Bodycare
            </p>

            <p>
              <input 
              type="checkbox" 
              className='w-3 mr-2'
              value={'Tools & Accessories'}
              onChange={toggleCategory}
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
          <select onChange={(e) => setSortType(e.target.value)} className='border border-brown text-sm px-3 text-brown'>
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
      
    </section>
  )
}

export default Collection