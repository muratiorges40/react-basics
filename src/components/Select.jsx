import React from 'react'

function Select({ name, id, value, onChange }) {
    
  return (
    <div>
        <select name={name}
        id={id}
        value={value}           
        onChange={onChange}>
           
        </select>
    </div>
  )
}

export default Select