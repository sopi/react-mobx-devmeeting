import React from 'react'
import ProductItem from './ProductItem'

// We don't have stateless component any more, so we do have to use classes
class ProductList extends React.Component {
  state = {
      products: [
        { id: 0, name: 'Apple', tags: [ 'fresh', 'red', 'champion' ], isPromoted: true },
        { id: 1, name: 'Coffee', tags: ['strong', 'black', 'medium'] }
      ]
    }

  render () {
    // 9/ We're mapping component's state into a view
    return (
      <ul>
        {this.state.products.map(p => (
          <ProductItem item={p} key={p.id} />
         ))}
      </ul>
    )
  }
}

export default ProductList
