import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const RelatedProducts = ({category}) => {

    const { products } = useContext(ShopContext);
    const [related,setRelated] = useState([]);

    useEffect(() => {

        if (products.length > 0) {
            
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item) => category === item.category);

            setRelated(productsCopy.slice(0,3))
        }

    },[products])

  return (
    <div>
        <div className='text-center text-brown font-rufina font-medium py-10 mt-20 text-4xl'>
            <p>RELATED PRODUCTS</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 gap-y-6'>
                {
                    related.map((item,index) => (
                    <div
                        key={item.id || index}
                    >
                        <ProductItem
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        />
                    </div>
                    ))
                }
        </div>
    </div>
  )
}

export default RelatedProducts