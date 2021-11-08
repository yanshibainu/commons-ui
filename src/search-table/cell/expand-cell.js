import React from 'react'
import PropTypes from 'prop-types'
import { Table, IconButton, Icon } from 'rsuite'
const { Cell } = Table

const ExpandCell = ({ rowData, dataKey, expandedRowKeys, onChange,rowKey, ...props }) => (
  <Cell {...props}>
    <IconButton
      size="xs"
      appearance="subtle"
      onClick={() => {
        onChange(rowData);
      }}
      icon={
        <Icon
          icon={
            expandedRowKeys.some(key => key === rowData[rowKey])
              ? 'minus-square-o'
              : 'plus-square-o'
          }
        />
      }
    />
  </Cell>
);

ExpandCell.propTypes = {
  rowData: PropTypes.object,
  onChange: PropTypes.func,
  checkedKeys: PropTypes.any,
  dataKey: PropTypes.string,
  rowKey:PropTypes.string
}
export default ExpandCell
