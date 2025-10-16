function ViewCart() {
  return (
    <>
      <h1 className = "ml-10 text-2xl"> Your Cart </h1>
      <div className = "grid gap-3 border-2 p-4 m-10">
        <div className = "border-2 p-2">
          <h1> Pizza (Cheesy) </h1>
          <p> x1</p>
          <p className = "text-right"> 9.9$ </p>
        </div>
        <div className = "border-2 p-2">
          <h1> Milk </h1>
          <p> x1 </p>
          <p className = "text-right"> 9.9$ </p>
        </div>
        <div className = "border-2 p-2">
          <h1> Alexie </h1>
          <p> x3 </p>
          <p className = "text-right"> 9.9$ </p>
        </div>
        <div className = "border-2 p-2">
          <h1> Hotdog (Cheese)</h1>
          <p> x2 </p>
          <p className = "text-right"> 9.9$ </p>
        </div>
      </div>
    </>
  ) 
}

export default ViewCart
