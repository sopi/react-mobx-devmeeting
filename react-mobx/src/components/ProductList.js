import React from 'react'
import Product from './Product'
import { SORT_ASCENDING, SORT_DESCENDING } from './Constans'

import Sort from './Sort'
import Search from './Search'
const  products = [
      { id: 0, name: 'Apple', isSold: false, price: "123" },
      { id: 1, name: 'Coffee', isSold: false, price: "1232" }
    ]
class ProductList extends React.Component {

  //6/ isSold is a new property in our state
 
  state = {
    sortOrder: '',
    searchedTerm: '',
    products: products,
    displayedProducts: [...products],
    sortBy: ''
  }

  //10/ Here is the real handler that changes the state
  handleBuyClick = (id, isSold) => {
    this.setState(previousState => {
      const products = previousState.products.map(p => p.id === id
        ? { ...p, isSold: isSold }
        : p
      )

      return { products,  
          displayedProducts: [...products] 
        }
    })
  }

   handleSortClick = (sortOrder, by) => { 
    const tempProducts = [...products];
    const asc = sortOrder === SORT_ASCENDING ? 1 : -1
    tempProducts.sort((a, b) => {
        return asc * a[by].localeCompare(b[by])
    })

    this.setState({
        displayedProducts: [...tempProducts],
        sortOrder,
        sortBy: by
    })
   }

   handleSearch = (searchedTerm) => {
    this.setState(previousState => {
      const displayedProducts = products.filter(p => p.name.toLocaleLowerCase().indexOf(searchedTerm) > -1)
      return { 
          displayedProducts,
          searchedTerm
        }
    })
   }

  render() {
    return (
    <div>
     <Sort by='name' selectedSortBy={this.state.sortBy} onSortClikcHandler={this.handleSortClick} sortOrder={this.state.sortOrder} />
     <Sort by='price'  selectedSortBy={this.state.sortBy} onSortClikcHandler={this.handleSortClick} sortOrder={this.state.sortOrder} />
     <br />
     <Search onSearch={this.handleSearch} searchedTerm={this.state.searchedTerm} />
      <ul>
        { this.state.displayedProducts.map(p => (
          <li key={ p.id }>
            {/* Here we're passing more data */}
            <Product
              product={ p }
              onBuyClick={ this.handleBuyClick }
            />
          </li>
        ) ) }
      </ul>
      </div>
    )
  }
}

export default ProductList
