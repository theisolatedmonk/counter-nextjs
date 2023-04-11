import { useState } from "react";
export default function App (){
 const [count, setCount] = useState(4)

 function decrementCount(){
  setCount(prevCount => prevCount - 1);

 }
 function incrementCount(){
  setCount(prevCount => prevCount + 1);

 }


 return (
  <main className="flex  items-center min-h-screen justify-center ">
    <div className="gap-2 h-36 flex w-36">
    <button onClick={decrementCount} className="h-10 w-10 bg-gray-500 rounded-md">-</button>
    <p className="h-10 w-10 bg-yellow-400 text-center p-2 rounded-md">{count}</p>
    <button onClick={incrementCount} className="h-10 w-10 bg-gray-500 rounded-md">+</button>
  </div>
  </main>
)
}




 

