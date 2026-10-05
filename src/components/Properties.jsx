import React from 'react'

function Properties() {
    const properties=[
        {
            id:1,
            name:"Zyre",
            size:"20m",
            isSold:true
        },
         {
            id:2,
            name:"Zyre",
            size:"20m",
            isSold:true
        },
         {
            id:3,
            name:"Zyre",
            size:"20m",
            isSold:true
        },

    ];
  return (
    <div>

    {properties.map((property)=>(
        property
    ))}
    </div>
  )
}

export default Properties