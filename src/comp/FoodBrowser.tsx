import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useCart } from './useCart.ts'

const menu = [
  { name: "Hotdog", description: "Chessy Hotdog", price: 20},
  { name: "Pizza", description: "Chessy Pizza", price: 100},
  { name: "Milktea", description: "Creamy Milktea", price: 50},
  { name: "Coffe", description: "Mixed Monster Energy for 1000x Power", price: 40},
  { name: "Crispy Chicken", description: "Fresh Crispy Chicken", price: 120},
  { name: "Orange Juice", description: "Sweet Orange Juice", price: 15},
]

function FoodBrwoser() {
  const { addItem } = useCart();

  const handleEvent = (item) => {
    addItem(item)
  }

  return (
    <>
      <h1 className = "ml-10 text-2xl">Our Menu</h1>
      <div className = "m-10 p-5 grid grid-cols-2 gap-4 border-2">
        {
          menu.map((item, i) => (
            <div key = {i} className = "border-2 p-3 flex justify-between">
              <div>
                <h3 className = "text-lg font-semibold"> {item.name} </h3>
                <p className = "mt-2"> {item.description}</p>
                <p> {item.price} PHP </p>
              </div>
              <div className = "flex items-center">
                <FontAwesomeIcon icon = {faPlus} className = "text-2xl" 
                  onClick = {() => handleEvent({ name: item.name, price: item.price})}
                />
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default FoodBrwoser
