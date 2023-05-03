import React from 'react';
import Child from './Child';

export default function Parent() {
    // we need to pass this function as props to child comp
    function greetParent(child){
        alert(`Welcome Parent ${child}`)
    }
  return (
    <div>
        <h1>This is Parent Component</h1>
      <Child greet={greetParent}/>
    </div>
  )
}
//Function As Props
//you cannot directly pass props from child to parent component however you can pass 
// a reference to a functioon as props to child