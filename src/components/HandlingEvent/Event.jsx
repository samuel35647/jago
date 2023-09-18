import React, { useState } from 'react'

const Event = () => {
     const [name,setName]= useState("sara")


    //let name= Sara

    const changeName =()=>{
        setName("hikmah")
        console.log(name);
    }
  return (
    <div>
        <h1 className='px-8 p-4 text-4xl'>{name}</h1>
        <button className='rounded-md bg-yellow-300 p-2 px-4'onClick={changeName}>Change Name</button>
    </div>
    
     
    
    
    
    
    
    )
}

export default Event