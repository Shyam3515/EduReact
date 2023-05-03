import React from 'react'

export default function ClickEventHandler() {
    function clickHandler(){
        console.log('You clicked the action Button..!')
    }
  return (
    <div>
        <button onClick={clickHandler}>Action</button>
    </div>
  )
}
//When handling events you do not need to specify parenthesis, if you mention it will be a function call.
//event handler is not a function call.