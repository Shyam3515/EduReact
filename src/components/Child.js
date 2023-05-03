import React from 'react'

export default function Child(props) {
  return (
    <div>
       <button onClick={() => props.greet('Im your child :)')}>Click</button>
    </div>
  )
}
//you can pass parameter from child to parent comp, is using arrow function.
//this exactly is how to pass parameter from child to parent component, when calling a function from child
//which is defined in parent comp
