// プレゼンテーショナルコンポーネント

import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ place, onPlaceChange, onSubmit }) => (
  <form className="search-form" onSubmit={e => onSubmit(e)}>
    <input
      className="place-input"
      type="text"
      size="30"
      value={place}
      onChange={e => onPlaceChange(e)}
    />
    <input className="submit-button" type="submit" value="検索" />
  </form>
)

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default SearchForm
