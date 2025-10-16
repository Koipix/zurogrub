import { useState } from 'react'
import { useCart } from './useCart.ts'
import { useNavigate } from 'react-router-dom'

function PaymentSim() {
  const [processing, setProcessing] = useState(false);
  const { items, clearCart } = useCart();
  const total = items.reduce((sum, i) => sum + i.price * i.amount, 0);
  const nav = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      clearCart();
      alert("Payment successful! 🎉 Please wait for your order to arrive!");
      nav("/")
    }, 1500);
  };

  return (
    <form onSubmit={handlePayment} className = "m-10 flex flex-col items-center border-2 py-7 gap-2">
      <input className="border-1 p-2" placeholder="Card Number"/>
      <input className="border-1 p-2" placeholder="MM/YY"/>
      <input className="border-1 p-2" placeholder="CVV"/>
      <h1 className="text-xl"> Total: {total} PHP</h1>
      <button className="border-2 p-2 rounded-lg mt-1 w-70 font-semibold" type="submit">Confirm Payment</button>
      <button className="border-2 p-2 rounded-lg mt-1 w-70 font-semibold" type="submit">Pay with Gcash</button>
      <button className="border-2 p-2 rounded-lg mt-1 w-70 font-semibold" type="submit">Cash on delivery</button>
    </form>
  )
}

export default PaymentSim
