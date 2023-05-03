import React,{useState} from 'react'

export default function FormInput() {
    const {name, setName} = useState('')
  return (
    <div>
      <form>
            <label>
                Name:
                <input type='text'
                value={name}
                onChange={(e)=>setName}/>
            </label>
      </form>
    </div>
  )
}
