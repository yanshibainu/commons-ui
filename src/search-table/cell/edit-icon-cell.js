import React from 'react'
import PropTypes from 'prop-types'
import { Table, IconButton, Icon } from 'rsuite'
const { Cell } = Table
const EditIconCell = ({ rowData, handleAction, dataKey, ...props }) => {
  const handlerEdit = () => {
    handleAction(rowData)
  }
  return (
    <div style={{ lineHeight: '46px' }}>
      <Cell {...props} className='link-group' style={{ padding: 0 }}>
        <IconButton
          appearance='subtle'
          onClick={handlerEdit}
          classPrefix=''
          icon={<Icon icon='edit2' />}
        />
      </Cell>
    </div>
  )
}

EditIconCell.propTypes = {
  rowData: PropTypes.object,
  dataKey: PropTypes.string,
  handleAction: PropTypes.func
}

export default EditIconCell
