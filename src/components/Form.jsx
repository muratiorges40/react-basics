import React, { useState } from 'react'

function Form() {
    const [firstName, setFirstName]= useState("");
     const [lastName, setLastName]= useState("");
      const [lastEmail, setLastEmail]= useState("");
      const [password, setPassword]= useState("");
      const [created, setCreated] = useState(false);
        const [error, setError] = useState("");
        
     function handleSubmit(e) {
        e.preventDefault(); 
        setError(
            firstName === "" ? "First name is required" : ""
        );
           setError(
            firstName === "" ? "First name is required" : ""
        );
        setCreated(true);   
        console.log(firstName, lastName, lastEmail, password);
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text"
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)} 
        
    />
     <input type="text"
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)} />
        <p>{error}</p>

        <input type="email"
        value={lastEmail}
        onChange={(e)=>setLastEmail(e.target.value)} />
        <p></p>
        <input type="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)} />

        <button type="Submit">Create            
        </button>
    </form>
    
            {created && (
                <div>
                    
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {lastEmail}</p>
                    <p>Password: {password}</p>
                </div>
            )}

    </>
  )
}

export default Form