import React from 'react'
import './MyColumn'
import MyColumn from './MyColumn'

export default function MyTable() {
  return (
    <div>
      <table>
        <tbody>
            <tr>
                <MyColumn/>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
