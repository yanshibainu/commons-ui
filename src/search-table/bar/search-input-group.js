import React from 'react'
import PropTypes from 'prop-types'
import { InputGroup, Input, Icon } from 'rsuite'

const styles = {
  marginBottom: 5
}

const SearchInputGroup = ({ placeholder, ...props }) => (
  <InputGroup {...props} style={styles}>
    <Input placeholder={placeholder} />
    <InputGroup.Addon>
      <Icon icon='search' />
    </InputGroup.Addon>
  </InputGroup>
)

SearchInputGroup.propTypes = {
  placeholder: PropTypes.string
}
export default SearchInputGroup
