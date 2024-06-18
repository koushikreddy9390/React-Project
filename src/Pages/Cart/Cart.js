// // import React, { useContext } from 'react'
// // import { StoreContext } from '../../components/Context/StoreContext';

// // import "./cart.css"
// // import { useNavigate } from 'react-router-dom';


// // export default function Cart() {

// //     const {cartItems,food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext)

// // const navigate=useNavigate();

// //   return (
// //     <div  className='cart'>
// //         <div  className='cart-items'>
// //             <div className='cart-items-title'>
// //             <p  >Items</p>
// //             <p   >Title</p>
// //             <p >Price</p>
// //             <p >Quantity</p>
// //             <p >Total</p>
// //             <p >Remove</p>

// //             </div>
// //             <br/>
// //             <hr/>
// //             {food_list.map((item,index)=>{
// //               if(cartItems[item._id]>0){
// //                 return(
// //                   <div  className='cart-items-item'>

// //                     <img   src={item.image}/>
// //                     <p> {item.name}</p>
// //                     <p>₹{item.price}</p>
// //                     <p>{cartItems[item._id]}</p>
// //                     <p>₹{item.price*cartItems[item._id]}</p>
// //                     <button      onClick={()=>removeFromCart(item._id)} className='cross'>X</button>
// //                     <hr/>
                     
// //                    </div>

// //                 )
// //               }

// //             })}

// //         </div>
// //         <div  className='cart-bottom'>
// //           <div  className='cart-total'>
// //             <h2>Cart Total</h2>
// //             <div>
// //             <div  className='cart-total-details'>
// //             <p>SubTotal </p>
// //             <b>₹{getTotalCartAmount()}</b>
              
// //               </div>
// //               <div className='cart-total-details'>
// //               <p>Charges</p>
// //               <p>₹{2}</p>
// //             </div>
// //             <hr/>
// //             <div  className='cart-total-details'>
// //             <p>Total</p>
// //                 <b>₹{getTotalCartAmount()+2}</b>
              
// //             </div>
            

// //             </div>
// //             <button  onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button>

// //           </div>

// //         </div>
      
// //     </div>
// //   )
// // }

// // 

// import React, { useContext } from 'react';
// import { StoreContext } from '../../components/Context/StoreContext';
// import { useNavigate } from 'react-router-dom';
// import "./cart.css";

// export default function Cart() {
//     const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
//     const navigate = useNavigate();

//     const totalAmount = getTotalCartAmount();
//     const isCartEmpty = totalAmount === 0;

//     const handleCheckout = () => {
//         if (isCartEmpty) {
//             alert('Your cart is empty. Please add items to your cart before proceeding to checkout.');
//         } else {
//             navigate('/order');
//         }
//     };

//     return (
//         <div className='cart'>
//             <div className='cart-items'>
//                 <div className='cart-items-title'>
//                     <p>Items</p>
//                     <p>Title</p>
//                     <p>Price</p>
//                     <p>Quantity</p>
//                     <p>Total</p>
//                     <p>Remove</p>
//                 </div>
//                 <br />
//                 <hr />
//                 {food_list.map((item, index) => {
//                     if (cartItems[item._id] > 0) {
//                         return (
//                             <div className='cart-items-item' key={index}>
//                                 <img src={item.image} alt={item.name} />
//                                 <p>{item.name}</p>
//                                 <p>₹{item.price}</p>
//                                 <p>{cartItems[item._id]}</p>
//                                 <p>₹{item.price * cartItems[item._id]}</p>
//                                 <button onClick={() => removeFromCart(item._id)} className='cross'>X</button>
//                                 <hr />
//                             </div>
//                         );
//                     }
//                     return null;
//                 })}
//                 {isCartEmpty && <p>Your cart is empty.</p>}
//             </div>
//             <div className='cart-bottom'>
//                 <div className='cart-total'>
//                     <h2>Cart Total</h2>
//                     <div>
//                         <div className='cart-total-details'>
//                             <p>SubTotal</p>
//                             <b>₹{totalAmount}</b>
//                         </div>
//                         <div className='cart-total-details'>
//                             <p>Charges</p>
//                             <p>₹{2}</p>
//                         </div>
//                         <hr />
//                         <div className='cart-total-details'>
//                             <p>Total</p>
//                             <b>₹{totalAmount + 2}</b>
//                         </div>
//                     </div>
//                     <button
//                         onClick={handleCheckout}
//                     >
//                         PROCEED TO CHECKOUT
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useContext } from 'react'
import { StoreContext } from '../../components/Context/StoreContext';

import "./cart.css"
import { useNavigate } from 'react-router-dom';


export default function Cart() {

    const {cartItems,food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext)

const navigate=useNavigate();


const totalAmount = getTotalCartAmount();
const isCartEmpty = totalAmount === 0;

const handleProceedToCheckout = () => {
  if (isCartEmpty) {
      alert("Your cart is empty");
  } else {
      navigate('/order');
  }
};



const handleToatal=()=>{
  if(isCartEmpty){

    return totalAmount
}

else{
  return totalAmount+2
}
}

  return (
    <div  className='cart'>
        <div  className='cart-items'>
            <div className='cart-items-title'>
           
           <table   className='tabler'>


          
          <tr>
            
              <th>items</th>
            


            <th>title</th> 
            <th>price</th>
            

             
            <th>Quantity</th>
              <th>total</th>
           
            
              <th>Remove</th>
            </tr>
            
              
            

           </table>
           
           

            </div>
            <br/>
            <hr/>
            {food_list.map((item,index)=>{
              if(cartItems[item._id]>0){
                return(
                  <div  className='cart-items-item'>

                    <img   src={item.image}/>
                    <p> {item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p   className='totaler'>₹{item.price*cartItems[item._id]}</p>
                    <button      onClick={()=>removeFromCart(item._id)} className='cross'>X</button>
                    <hr/>
                     
                   </div>

                )
              }

            })}

        </div>
        <div  className='cart-bottom'>
          <div  className='cart-total'>
            <h2>Cart Total</h2>
            <div>
            <div  className='cart-total-details'>
            <p>SubTotal </p>
            <b>₹{getTotalCartAmount()}</b>
              
              </div>
              <div className='cart-total-details'>
              <p>Charges</p>
              <p>{2}</p>
            </div>
            <hr/>
            <div  className='cart-total-details'>
            <p>Total</p>
               <b>{handleToatal()}</b>
               
              
            </div>
            

            </div>
            <button  onClick={handleProceedToCheckout }     >PROCEED TO CHECKOUT</button>

          </div>

        </div>
      
    </div>
  )
}

