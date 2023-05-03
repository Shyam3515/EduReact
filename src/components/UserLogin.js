// Conditional rendering
import React from 'react'

export default function UserLogin() {
    const isLoggedIn = true;
  return (
    <div>
    {/* {   isLoggedIn ? <h1>Welcome to Shyam's React project</h1>
         : <h2>You cannot access this project</h2>
    } */}
    {/* Short sequence approach */}
    {
        isLoggedIn && <h1>Hello I'm Logged in</h1>
    }
    </div>
  )
}
//Short sequence approach is used to render either something or nothing
