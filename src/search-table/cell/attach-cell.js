import React from 'react'
import PropTypes from 'prop-types'
import { Table, Badge, Icon } from 'rsuite'

const { Cell } = Table
const AttachCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props}>
    {rowData[dataKey] === 0 ? (
      <div>-</div>
    ) : (
      <Badge content={rowData[dataKey]}>
        <Icon icon='attachment' />
      </Badge>
    )}
  </Cell>
)

AttachCell.propTypes = {
  rowData: PropTypes.object,
  dataKey: PropTypes.string
}

export default AttachCell
