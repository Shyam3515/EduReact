import React from 'react';
import './myStyleSheet.css'

export default function RegularStyleSheet(props) {
    const className = props.primary ? 'primary' : 'secondary'
  return (
    <div>
        <h1 className={className}>Hi, React</h1>
    </div>
  )
}
