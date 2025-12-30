import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const LatestProducts = () => {

    const { products } = useContext(ShopContext);
    const [latestItems,setLatestItems] = useState([]);

    useEffect(() => {
        setLatestItems(products.slice(0,3));
    },[])

    const labels = [
    "Exfoliates and Plumps",
    "Relieves and Strengthens",
    "Exfoliates and Unclogs",
  ];

  return (
    <section className='w-full bg-lime-100 px-4 sm:px-6 lg:px-10 py-10"'>
        <div className='text-center py-8 text-4xl'>
            <Title text1={'LATEST'} text2={'PRODUCTS'}/>
        </div>

        {/* RENDERING ITEMS*/}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 gap-y-6'>
            {
                latestItems.map((item,index) => (
                <div
                    key={item.id || index}
                >
                    <ProductItem
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    label={labels[index]}
                    />
                </div>
                ))
            }
        </div>
    </section>
  )
}

export default LatestProducts