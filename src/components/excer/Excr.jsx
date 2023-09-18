import React, { useState } from 'react'

const Event = () => {
     const [number,setNumber]= useState(0)

const Increment =()=>{
    setMyNumber(myNumber +1)
}

const Decrement =()=>{
    if (myNumber){
        setNumber(myNumber -1)
}

    //let name= Sara

    const changeNumber =()=>{
        setNumber(number+1)
        console.log(number);
    }
  return (
    <div>
        <h1 className='px-8 p-4 text-4xl'>{number}</h1>
        <button className='rounded-md bg-yellow-300 p-2 px-4'onClick={changeNumber}>Change</button>

        <div className='flex mx-3'>
          <button className='bg-green-500 rounded-md p-3 mx-3 text-white font-semibold' onClick={Increment}>Increment</button>
          <button className='bg-blue-500 rounded-md p-3 mx-3 text-white font-semibold' onClick={Decrement}>Decrement</button>
        </div>
    </div>
    

    
    
    
    
    
    
    )
}
}

export default Event