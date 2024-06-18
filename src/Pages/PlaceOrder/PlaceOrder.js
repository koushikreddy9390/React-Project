// import React, { useContext, useState, useEffect } from 'react';
// import "./PlaceOrder.css";
// import { StoreContext } from '../../components/Context/StoreContext';

// export default function PlaceOrder() {
//   const { getTotalCartAmount } = useContext(StoreContext);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     street: '',
//     city: '',
//     state: '',
//     zip: '',
//     country: '',
//     phone: ''
//   });

//   const [isFormValid, setIsFormValid] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => {
//       const updatedFormData = { ...prevFormData, [name]: value };
//       checkFormValidity(updatedFormData);
//       return updatedFormData;
//     });
//   };
  

//   const checkFormValidity = (data) => {
//     const { firstName, lastName, email, street, city, state, zip, country, phone } = data;
//     const isValid = firstName && lastName && email && street && city && state && zip && country && phone;
//     setIsFormValid(isValid);
//   };
  

//   const loadScript = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         resolve(false);
//       };
//       document.body.appendChild(script);
//     });
//   };

//   const displayRazorpay = async (amount) => {
//     const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

//     if (!res) {
//       alert("You are offline, failed to load Razorpay SDK.");
//       return;
//     }

//     const options = {
//       key: "rzp_test_pfT68y3HSv5bW8",
//       currency: "INR",
//       amount: amount * 100,
//       name: "Deliver Grub",
//       description: "Thanks for order",
//       payment_capture: '1', // Auto-capture payment
//       handler: function (response) {
//         alert(`Payment Successful with paymentId: ${response.razorpay_payment_id}`);
//       },
//       prefill: {
//         name: `${formData.firstName} ${formData.lastName}`,
//         email: formData.email,
//         contact: formData.phone
//       }
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   const handleOrder = (total) => {
//     displayRazorpay(total);
//   };

//   useEffect(() => {
//     checkFormValidity(formData);
//   }, []);
  

//   let total = getTotalCartAmount() + 2;

//   return (
//     <form className='place-order' onSubmit={(e) => e.preventDefault()}>
//       <div className='place-order-left'>
//         <p className='title'>Delivery Information</p>
//         <div className='multi-fields'>
//           <input
//             type='text'
//             placeholder='First Name'
//             name='firstName'
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//           <input
//             type='text'
//             placeholder='Last Name'
//             name='lastName'
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//         </div>
//         <input
//           type='email'
//           placeholder='Email address'
//           name='email'
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <input
//           type='text'
//           placeholder='Street'
//           name='street'
//           value={formData.street}
//           onChange={handleChange}
//         />
//         <div className='multi-fields'>
//           <input
//             type='text'
//             placeholder='City'
//             name='city'
//             value={formData.city}
//             onChange={handleChange}
//           />
//           <input
//             type='text'
//             placeholder='State'
//             name='state'
//             value={formData.state}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='multi-fields'>
//           <input
//             type='text'
//             placeholder='Zip code'
//             name='zip'
//             value={formData.zip}
//             onChange={handleChange}
//           />
//           <input
//             type='text'
//             placeholder='Country'
//             name='country'
//             value={formData.country}
//             onChange={handleChange}
//           />
//         </div>
//         <input
//           type='text'
//           placeholder='Phone'
//           name='phone'
//           value={formData.phone}
//           onChange={handleChange}
//         />
//       </div>
//       <div className='place-order-right'>
//         <div className='cart-total'>
//           <h2>Cart Total</h2>
//           <div>
//             <div className='cart-total-details'>
//               <p>SubTotal</p>
//               <b>₹{getTotalCartAmount()}</b>
//             </div>
//             <hr />
//             <div className='cart-total-details'>
//               <p>Charges</p>
//               <p>₹{2}</p>
//             </div>
//             <hr />
//             <div className='cart-total-details'>
//               <p>Total</p>
//               <b>₹{total}</b>
//             </div>
//           </div>
//           <button type='submit' disabled={!isFormValid} onClick={() => handleOrder(total)}>
//             PROCEED TO PAYMENT
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }


import React, { useContext, useState, useEffect } from 'react';
import "./PlaceOrder.css";
import { StoreContext } from '../../components/Context/StoreContext';
import { useNavigate } from 'react-router-dom';

export default function PlaceOrder() {
  const { getTotalCartAmount, clearCart } = useContext(StoreContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [name]: value };
      checkFormValidity(updatedFormData);
      return updatedFormData;
    });
  };

  const checkFormValidity = (data) => {
    const { firstName, lastName, email, street, city, state, zip, country, phone } = data;
    const isValid = firstName && lastName && email && street && city && state && zip && country && phone;
    setIsFormValid(isValid);
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("You are offline, failed to load Razorpay SDK.");
      return;
    }

    const options = {
      key: "rzp_test_pfT68y3HSv5bW8",
      currency: "INR",
      amount: amount * 100,
      name: "Deliver Grub",
      description: "Thanks for order",
      payment_capture: '1', // Auto-capture payment
      handler: function (response) {
        alert(`Payment Successful with paymentId: ${response.razorpay_payment_id}`);
        // Reset form data after successful payment
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          street: '',
          city: '',
          state: '',
          zip: '',
          country: '',
          phone: ''
        });
        clearCart(); // Clear the cart
        navigate('/'); // Navigate back to home or another page after payment
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phone
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleOrder = (total) => {
    displayRazorpay(total);
  };

  useEffect(() => {
    checkFormValidity(formData);

    // Clear form data when component unmounts
    return () => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        phone: ''
      });
    };
  }, []);

  let total = getTotalCartAmount() + 2;

  return (
    <form className='place-order' onSubmit={(e) => e.preventDefault()}>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <input
          type='email'
          placeholder='Email address'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Street'
          name='street'
          value={formData.street}
          onChange={handleChange}
        />
        <div className='multi-fields'>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='State'
            name='state'
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className='multi-fields'>
          <input
            type='text'
            placeholder='Zip code'
            name='zip'
            value={formData.zip}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Country'
            name='country'
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <input
          type='text'
          placeholder='Phone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>SubTotal</p>
              <b>₹{getTotalCartAmount()}</b>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Charges</p>
              <p>₹{2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Total</p>
              <b>₹{total}</b>
            </div>
          </div>
          <button type='submit' disabled={!isFormValid} onClick={() => handleOrder(total)}>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}

