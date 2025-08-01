import React from 'react'

const Card = ({title , desc , imageUrl}) => {
  return (
    <>
    <h2>{title}</h2>
    <p>{desc}</p>
    <img src={imageUrl} alt={title} style={{width: '100px', height: '100px'}} />
    <button>Click</button>
    </>

  )
}

export default Card