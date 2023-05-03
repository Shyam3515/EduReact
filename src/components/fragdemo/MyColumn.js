import React from 'react'

export default function MyColumn() {
  return (
    <React.Fragment>
      <td>Skill</td>
      <td>React JS</td>
    </React.Fragment>
  )
}
//Key is the only attribute that can be passed to a fragment.
//<React.Fragment key={id}>