import React from 'react'
import PropTypes from 'prop-types'
import { Table, Checkbox } from 'rsuite'
const { Cell } = Table
const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div style={{ lineHeight: '46px' }}>
      <Checkbox
        value={rowData[dataKey]}
        inline
        onChange={onChange}
        checked={checkedKeys.some((item) => item === rowData[dataKey])}
      />
    </div>
  </Cell>
)
CheckCell.propTypes = {
  rowData: PropTypes.object,
  onChange: PropTypes.func,
  checkedKeys: PropTypes.any,
  dataKey: PropTypes.string
}
export default CheckCell
