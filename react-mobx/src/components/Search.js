import React from 'react'

const Search = ({searchedTerm, onSearch}) => {
  const onSearchChange = (ev) => {
    onSearch(ev.target.value)
  }

  return (
    <input
      value={searchedTerm}
      onChange={onSearchChange}
      className='form-control input-lg'
      placeholder='Search products' />
  )
}

export default Search
