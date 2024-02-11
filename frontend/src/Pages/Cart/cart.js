import React, { useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Half Baked Clay Pot',
      price: 500,
      image: 'https://t3.ftcdn.net/jpg/05/66/34/10/360_F_566341036_f2mCzWyHi9I4aMOSSiy1XUUhvEqdUKJ1.jpg',
    },
    {
      id: 2,
      title: 'Full Baked Clay Pot',
      price: 700,
      image: 'https://t3.ftcdn.net/jpg/05/66/34/10/360_F_566341036_f2mCzWyHi9I4aMOSSiy1XUUhvEqdUKJ1.jpg',
    },
    // Add more items as needed
  ]);

  const handleRemoveItem = (id) => {
    // Filter out the item with the specified id
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };
    const [shippingCost, setShippingCost] = useState(100);

   const totalItemsPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const totalPrice = totalItemsPrice + shippingCost;

  return (
    <div style={{backgroundImage:"url('https://www.zicasso.com/static/700ff3e343dbb7a3d48ee3bc493e6bc6/304cc/700ff3e343dbb7a3d48ee3bc493e6bc6.jpg')"}}>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">Your Cart</h1>
      </div>
      <div >
      <div className="flex h-screen bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ marginLeft: 50, marginTop: 35,width:'90%' }}>
        <div style={{margin:27,width:'60%'}}>
      {cartItems.map(item => (
          <a key={item.id} href="#" className=" mt-3 flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-full" src={item.image} alt="" style={{ width: 180, height: 180, margin: 15 }} />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">₹{item.price}</p>
            </div>
            <button onClick={() => handleRemoveItem(item.id)} style={{ padding: 80 }}><img src="https://cdn-icons-png.freepik.com/256/484/484611.png?ga=GA1.1.1255800410.1704448219&semt=ais" alt="" style={{ width: 40, height: 40 }} /></button>
          </a>
      ))}
          <a href="/properties" className=" mt-10 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Continue Shopping
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
      </div>
      <div className='  bg-yellow-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' style={{width:'40%',borderLeft: '3px solid black'
      // ,backgroundColor:'#d6ac4b'
      }}>
        <h1 className=' text-3xl font-semibold text-center p-5'>Summary</h1>
        <div >
           {cartItems.map(item => (
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
    <span className=' text-lg font-medium px-5 py-2'>{item.title}</span>
    <span className=' text-lg font-medium px-5 py-2'>{item.price}</span>
  </div>
           ))}
        </div>
        <div className='flex justify-center'>
        <div className="mb-5 bg-black " style={{width:'60%',marginTop:30}}>
                     <label htmlFor="userType" className=" p-2 block mb-2 text-sm font-medium text-white dark:text-white" style={{borderRadius:10}}>Shipping:</label>
              <select
              onChange={(e) => setShippingCost(Number(e.target.value))}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="" >
                  <option value="100">100-(delivery in 2-3 days)</option>
                  <option value="0">Free-(delivery in 5-6 days)</option>
                </select>
                </div>
      </div>
      <div className=' mt-10 ' style={{borderTop:'4px dotted black'}}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
    <span className=' text-lg font-medium px-5 py-2'>Total Price:</span>
    <span className=' text-lg font-medium px-5 py-2'>₹{totalPrice}</span>
  </div>
      </div>
      <div className='flex justify-center'><button className='bg-black text-white hover:bg-slate-700 font-semibold text-xl p-2 mt-7' style={{width:150}}>Checkout</button></div>
      
      </div>
      </div>
      </div>
    </div>
  );
}
