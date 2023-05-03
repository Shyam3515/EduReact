import React,{useState} from 'react'

export default function TitleComponent() {
    const[title, setTitle] = useState('ReactJs Course for Beginners');
  return (
    <div>
        <h1>{title}</h1>
        <button onClick={()=> setTitle('Ultimate ReactJs Hooks Course')}>Change Title</button>
    </div>
  )
}
