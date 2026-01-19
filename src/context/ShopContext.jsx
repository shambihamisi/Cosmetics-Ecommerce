import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextprovider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate();

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

    const incQty = (itemId) => {
        const cartData = structuredClone(cartItems);
        cartData[itemId] = (cartData[itemId] || 0) + 1;
        setCartItems(cartData);
    };

    const decQty = (itemId) => {
        const cartData = structuredClone(cartItems);

        if (!cartData[itemId]) return;

        const next = cartData[itemId] - 1;

        if (next <= 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = next;
        }

        setCartItems(cartData);
    };


    const getCartCount = () => {
        let totalCount = 0;
        for(const item in cartItems) {
            try {
                if (cartItems[item] > 0) {
                    totalCount += cartItems[item];
                }
            } catch (error) {
                
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId,quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId] = quantity;

        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const itemId in cartItems) {
            let itemInfo = products.find((products) => String(products.id) === String(itemId));
            if (itemInfo && cartItems[itemId] > 0) {
            totalAmount += itemInfo.price * cartItems[itemId];
            }
        }

        return totalAmount;
    }

    const getCartLines = () => {
        const lines = [];

        for (const itemId in cartItems) {
            const qty = cartItems[itemId];
            if (!qty || qty <= 0) continue;

            const product = products.find((p) => String(p.id) === String(itemId));
            if (!product) continue;

            lines.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: Array.isArray(product.image) ? product.image[0] : product.image,
            qty,
            lineTotal: product.price * qty,
            });
        }

        return lines;
    }


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
         incQty,
         decQty,
         getCartCount,
         updateQuantity,
         getCartAmount,
         navigate,
         getCartLines,
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextprovider;