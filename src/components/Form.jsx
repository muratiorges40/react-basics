import React, { useState } from 'react'

function Form() {
    const [firstName, setFirstName]= useState("");
     const [lastName, setLastName]= useState("");
      const [lastEmail, setLastEmail]= useState("");
      const [password, setPassword]= useState("");

    function handleSubmit(e){
        e.preventdefault()
        console.log(firstName, lastName,lastEmail,password);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text"
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)} />
     <input type="text"
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)} />

        <input type="email"
        value={lastEmail}
        onChange={(e)=>setLastEmail(e.target.value)} />

        <input type="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)} />

        <button type="Submit">Create            
        </button>
    </form>

    
  )
}

export default Form