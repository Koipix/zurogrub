import { useState } from 'react'
import { useCart } from './useCart.ts'

function PaymentSim() {
  const [processing, setProcessing] = useState(false);
  const { items, clearCart } = useCart();
  const total = items.reduce((sum, i) => sum + i.price * i.amount, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      clearCart();
      alert("Payment successful! 🎉");
    }, 1500);
  };

  return (
    <form onSubmit={handlePayment} className = "m-10 flex flex-col items-center border-2 py-7 gap-2">
      <input className="border-1 p-2" placeholder="Card Number" required />
      <input className="border-1 p-2" placeholder="MM/YY" required />
      <input className="border-1 p-2" placeholder="CVV" required />
      <h1 className="text-xl"> Total: {total} PHP</h1>
      <button className="border-2 p-2 rounded-lg mt-2 w-50 font-semibold" type="submit">Pay Now</button>
    </form>
  )
}

export default PaymentSim
