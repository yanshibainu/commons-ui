import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'rsuite'
// import { ActionBar } from '../bar'
const { Cell } = Table

const ObjectCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props}>
    <a href='./'>{rowData[dataKey]}</a>
  </Cell>
)

ObjectCell.propTypes = {
  rowData: PropTypes.object,
  dataKey: PropTypes.string
}

export default ObjectCell
