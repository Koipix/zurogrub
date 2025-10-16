import { useCart } from './useCart.ts'

function ViewCart() {
  const { items, addItem, removeItem } = useCart();

    return (
    <>
      <h1 className = "ml-10 text-2xl"> Your Cart </h1>
      <div className = "grid gap-4 border-2 p-5 m-10">
        { items.length == 0 ? (
          <p> Cart is empty... </p>
        ) : (
          items.map((item, idx) => (
            <div className = "border-2 p-2" key = {idx}>
              <h1> {item.name} </h1>
              <p> x{item.amount} </p>
              <p className = "text-right"> {item.price * item.amount} PHP </p>
            </div>
          ))
        )
        }
      </div>
    </>
  ) 
}

export default ViewCart
