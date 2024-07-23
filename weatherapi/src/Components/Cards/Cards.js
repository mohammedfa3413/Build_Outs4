import React from 'react'

function Cards({title, data}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{data}</p>
    </div>
  )
}

export default Cards
