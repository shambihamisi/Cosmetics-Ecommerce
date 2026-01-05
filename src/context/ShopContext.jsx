import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextprovider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});

    const onAdd = async (itemId, qty) => {

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId] += qty;
        }
        else {
            cartData[itemId] = qty;
        }
        setCartItems(cartData);

    }

    useEffect(() => {
        console.log(cartItems);   
    },[cartItems])


    const value = {
         products,
         currency,
         delivery_fee,
         search,
         setSearch,
         showSearch,
         setShowSearch,
         cartItems,
         onAdd,
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextprovider;