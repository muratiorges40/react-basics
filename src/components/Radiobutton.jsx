import React, { useState } from 'react'

function Radiobutton() {
    const [selectedOption, setSelectedOption] = useState("");
  return (
    <div>
        <input type="radio"
         name="gender" 
         value="Male"
        checked={selectedOption === "Male"}
    
        onChange={(e)=> setSelectedOption(e.target.value)}
         />
        <p>Male</p>
        <input type="radio" 
        name="gender"
        value="Female"  
        checked={selectedOption === "Female"}
        onChange={(e)=> setSelectedOption(e.target.value)}
         />
        <p>Female</p>
        <p>Selected option: {selectedOption}</p>
    </div>
  )
}

export default Radiobutton