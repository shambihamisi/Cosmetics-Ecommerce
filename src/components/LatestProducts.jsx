import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';
import afro from '../images/afro.jpg'
import beads from '../images/beads.jpg'


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
    <section className='relative w-full overflow-hidden bg-lime-100 text-brown px-4 sm:px-6 lg:px-10 py-10"'>
        <div className='text-center py-10 mt-20 text-4xl'>
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

        {/* Image tiles */}
        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute left-[16%] top-[50%] hidden h-28 w-28 overflow-hidden bg-neutral-200 lg:block">
                <img
                src={afro}
                alt="Portrait tile"
                className="h-full w-full object-cover"
                loading="lazy"
                />
            </div>


            <div className="pointer-events-none absolute right-[20%] top-[25%] hidden h-28 w-24 overflow-hidden bg-neutral-200 lg:block">
                <img
                src={beads}
                alt="Portrait tile"
                className="h-full w-full object-cover"
                loading="lazy"
                />
            </div>


            {/* TITLE */}
            <div className="relative z-10 mx-auto max-w-3xl text-center">
                <p className="text-lg uppercase font-belleza tracking-[0.22em] text-brown sm:text-xl">
                The best form of beauty,
                <br />
                is emptiness.
                </p>


                <p className="mt-6 font-rufina text-2xl leading-snug text-brown sm:text-3xl">
                Beauty is presence. It is confidence made visible. We exist to curate products that speak before you do. Each formula is chosen with intention, every detail refined with care. This is where elegance meets strength, and your beauty shows up without permission.
                </p>


                <a
                href="/collection"
                aria-label="Experience the difference"
                className="mt-10 inline-flex items-center justify-center gap-2 text-sm uppercase tracking-[0.18em] font-belleza text-brown transition-transform duration-300 ease-out hover:translate-x-2">
                <span aria-hidden="true">→</span>
                Experience the difference
                </a>
            </div>
        </div>
    </section>
  )
}

export default LatestProducts