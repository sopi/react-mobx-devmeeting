import React from 'react'

// Now we have to pass also id, isSold, and onBuyClick handler
const Product = ({ product: { id, name, isSold, price }, onBuyClick }) => {
  // 3/ Here we need an id to do a proper callback
  const handleClick = () => {
    onBuyClick(id, !isSold)
  }

  return (
    <div>
      {/* Here we can add some inline styling to see component changes on the UI */}
      <span style={ { textDecoration: isSold ? 'line-through' : 'none' }}>
        { name } - { price } zł
      </span>
      {/* And that's how our handler looks like */}
      <button onClick={ handleClick }>
        {isSold ? 'Cancel' : 'Buy'}
      </button>
    </div>
  )
}

export default Product
