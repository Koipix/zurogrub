import { useCart } from './useCart.ts'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <div className = "border-2 p-3 flex justify-between items-center" key = {idx}>
              <div>
                <h1 className = "text-lg"> {item.name} (x{item.amount})</h1>
                <p className = ""> {item.price * item.amount} PHP </p>
              </div>
              <div>
                <FontAwesomeIcon icon = {faTrash} className = "text-2xl"
                  onClick = {() => {removeItem(idx)}}
                />
              </div>
            </div>
          ))
        )
        }
      </div>
      <div className = "mx-10 text-xl font-semibold text-right">
        <h1> Total: {items.reduce((sum, i) => sum + i.price * i.amount, 0)} PHP</h1>
      </div>
    </>
  ) 
}

export default ViewCart
