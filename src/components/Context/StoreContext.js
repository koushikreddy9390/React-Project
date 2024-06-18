import React, { createContext, useEffect, useState } from 'react';
import { food_list } from '../../assest/asset/assets';
// import FoodItem from '../FoodItem/FoodItem';


export const StoreContext=createContext(null)

export default function StoreContextProvider(props) {

const [cartItems,setCartItems]=useState({});


const addToCart=(itemId)=>{
    if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
}

const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))


}

const clearCart = () => {
    setCartItems({});
  };



const getTotalCartAmount=()=>{
    let totalAmount=0;

    for( const item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item);
                totalAmount+=itemInfo.price*cartItems[item];
    
            }
            
        }

        return totalAmount;
}
    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        clearCart
    }
  return (
    <div>
        <StoreContext.Provider  value={contextValue}>
               {props.children}
               
        </StoreContext.Provider>
      
    </div>
  )
}

