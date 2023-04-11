import { useState } from "react";
export default function App (){
 const [count, setCount] = useState(0)
 const [theme, setTheam] = useState('')
 const [colour, setColour] = useState('')
 let color2  =''

color2='red'


 function decrementCount(){
  setCount(prevCount => prevCount - 1);
  setTheam('blue')
  setColour('blue')


 }
 function incrementCount(){
  setCount(prevCount => prevCount + 1);
  setTheam('red')
  setColour("red")
  // setColour(style: {})


 }


 return (
  <main className="flex  items-center min-h-screen justify-center ">
    <div className="gap-2 h-36 flex w-36">
    <button onClick={decrementCount} className="h-10 w-14 bg-gray-500 rounded-md">-</button>
    <p  className="h-10 w-12 bg-yellow-400 text-center p-2 rounded-md">{count}</p>
    <p style={{background:colour}} className="h-10 w-12 border border-black text-center p-2 rounded-md">{theme}</p>
    <button onClick={incrementCount} className="h-10 w-14 bg-gray-500 rounded-md">+</button>
  </div>
  </main>
)
}




 

