import { useState, useEffect } from 'react'

interface Item {
  name: String;
  amount: number;
  price: number;
}

export function useCart() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })
 
  const addItem = (newItem: Item) => {
    setItems(prevItems => {
      const existing = prevItems.find(item => item.name === newItem.name);

      if (existing) {
        return prevItems.map(item => 
          item.name === newItem.name
            ? {...item, amount: item.amount + 1}
            : item
        );
      } else {
        return [...prevItems, {...newItem, amount: 1}];
      }
    });
  } 

  const removeItem = (id) => {
    setItems(prev => prev.filter((_, idx) => idx !== id))
    console.log("triggered")
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const getItem = () => {
    console.log(items)
  }

  return { items, addItem, removeItem, getItem }
}

