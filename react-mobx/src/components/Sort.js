import React from 'react'
import { SORT_ASCENDING, SORT_DESCENDING } from './Constans'

const Sort = ({ sortOrder, onSortClikcHandler, by, selectedSortBy }) => {
  const onSortChange = () => {
    onSortClikcHandler(sortOrder === SORT_ASCENDING ? SORT_DESCENDING : SORT_ASCENDING, by)
  }
  const sortOrderClass = sortOrder && by === selectedSortBy
    ? sortOrder === SORT_ASCENDING ? 'fa-sort-asc' : 'fa-sort-desc'
    : ''

  return (
    <button type='button' className='btn btn-secondary' onClick={onSortChange}>
      <i className={`fa fa-sort ${sortOrderClass}`} aria-hidden='true'></i> Sort by {by}
    </button>
  )
}

export default Sort
