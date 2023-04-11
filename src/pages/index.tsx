import { useState } from "react";
export default function App (){
 const [count, setCount] = useState(0)
 const [theme, setTheam] = useState('')
 const [colour, setColour] = useState('white')
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
  <main className="flex flex-col gap-4 items-center min-h-screen justify-center ">
    <div className="gap-2 h-10 flex bg-yellow-50 font-bold w-56 items-center justify-center rounded-xl shadow-orange-200 shadow-md"> COUNTER APP</div>
    <div className="gap-2 h-40 flex bg-orange-100 w-56 items-center justify-center rounded-xl shadow-orange-200 shadow-md">
    <button onClick={decrementCount} className="h-10 w-10 bg-gray-300  text-2xl font-bold rounded-full  shadow-gray-400 shadow-md">-</button>
    <p  className="h-10 w-12 bg-white text-center p-2 rounded-md ">{count}</p>
    <p style={{background:colour}} className="h-10 w-12 border  text-center p-2 rounded-md">{theme}</p>
    <button onClick={incrementCount} className="h-10 w-10 bg-gray-300 text-2xl font-bold rounded-full shadow-gray-400 shadow-md">+</button>
  </div>
  </main>
)
}




 

