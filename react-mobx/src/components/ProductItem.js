import React from 'react'
import Tag from './Tag'

const ProductItem = ({ item }) => (
  <li className={`product ${item.isPromoted ? 'promoted' : ''}`}>
    <div>
      <header className='name'>{item.name}</header>
      {item.tags && item.tags.length
         ? <div>
             {item.tags.map(t => <Tag key={t} tag={t} />)}
           </div>
         : <span />}
    </div>
  </li>
)

const { string, arrayOf, shape, number, bool } = React.PropTypes

ProductItem.propTypes = {
  item: shape({
    name: string,
    id: number,
    tags: arrayOf(string),
    isPromoted: bool
  })
}
export default ProductItem
