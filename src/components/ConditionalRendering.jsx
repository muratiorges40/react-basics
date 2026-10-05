import React from 'react'

function ConditionalRendering() {
    const isLoggedIn = true;
    const isAdmin = false;
    if (isLoggedIn){
        return <h1>Welcome back</h1>
    }

    //ternoray operator
    return(
        <div>
            {
                isAdmin? (
                    <h2>
                        welcome admin user
                    </h2>):(
                    <h1>
                        <h1>plase got this</h1>
                    </h1>
                )
            }
        </div>
    )
  return (
    <div>Please log in</div>
  )
}

export default ConditionalRendering