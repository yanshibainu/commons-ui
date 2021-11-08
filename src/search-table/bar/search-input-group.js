import React from 'react'
import PropTypes from 'prop-types'
import { InputGroup, Input, Icon ,Whisper,Tooltip} from 'rsuite'

const styles = {
  marginBottom: 5
}

const SearchInputGroup = ({ placeholder, ...props }) => (
  <InputGroup {...props} inside style={styles}>
    <Input placeholder={placeholder} />
    <Whisper
        placement='top'
        trigger='hover'
        speaker={<Tooltip>搜尋</Tooltip>}
      >
      <InputGroup.Button>
          <Icon icon="search" />
      </InputGroup.Button>
    </Whisper>
  </InputGroup>
)

SearchInputGroup.propTypes = {
  placeholder: PropTypes.string
}
export default SearchInputGroup
