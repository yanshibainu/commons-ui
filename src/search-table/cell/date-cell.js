import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'rsuite'
import moment from 'moment'
const { Cell } = Table
const DateCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props}>{moment(rowData[dataKey]).format('yyyy/MM/DD')}</Cell>
)
DateCell.propTypes = {
  rowData: PropTypes.object,
  dataKey: PropTypes.string
}
export default DateCell
