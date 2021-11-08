import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {CheckCell} from '../cell'
import { Table, Checkbox} from 'rsuite'
const { Cell, Pagination, Column, HeaderCell } = Table

const BaseTable = ({ data, column, id, isExpand, ...props }) => {
  const [checkedKeys, setCheckedKeys] = useState([])
  const [checkedHeader, setCheckedHeader] = useState(false)
  const [indeterminateHeader, setIndeterminateHeader] = useState(false)
  // const [actionData, setActionData] = useState([])
  const [displayLength, setDisplayLength] = useState(10)
  const [page, setPage] = useState(1)

  const [items] = useState(data?.items || data)

  //const [expandedRowKeys, setExpandedRowKeys] = useState([])
  const [rowKey] = useState('id')

  const pagination = data?.pagination

  useEffect(() => {
    setIndeterminateHeader(false)
    if (items && items.length > 0) {
      if (items && checkedKeys.length === items.length) {
        setCheckedHeader(true)
      } else if (checkedKeys.length === 0) {
        setCheckedHeader(false)
      } else if (
        items &&
        checkedKeys.length > 0 &&
        checkedKeys.length < items.length
      ) {
        setIndeterminateHeader(true)
      }
      // onSelectItem()
    }
  }, [checkedKeys, items])

  const handleCheck = (value, checked) => {
    debugger
    const nextCheckedKeys = checked
      ? [...checkedKeys, value]
      : checkedKeys.filter((item) => item !== value)
    setCheckedKeys(nextCheckedKeys)
    //  const rowData = data.filter((item) => item.ObjectId === value)[0]
    //  if (rowData && rowData.Actions) setActionData(rowData.Actions)
  }

  const handleCheckAll = (value, checked) => {
    const checkedKeys = checked ? items.map((item) => item.id) : []
    setCheckedKeys(checkedKeys)
  }

  const rowClickHandle = (data) => {
    console.log(data)
  }

  const handleChangePage = (dataKey) => {
    setPage(dataKey)
    /*
    props.getFolder({
      req: null,
      res: null,
      folderName: props.folderName,
      type: 'all',
      currentPag: dataKey,
      displayLength: displayLength
    })
    */
  }

  const handleChangeLength = (dataKey) => {
    setPage(1)
    setDisplayLength(dataKey)
  }
/*
  const handleExpanded=(rowData, dataKey)=> {
    let open = false;
    const nextExpandedRowKeys = [];

    expandedRowKeys.forEach(key => {
      if (key === rowData[rowKey]) {
        open = true;
      } else {
        nextExpandedRowKeys.push(key);
      }
    });

    if (!open) {
      nextExpandedRowKeys.push(rowData[rowKey]);
    }
    setExpandedRowKeys(nextExpandedRowKeys);
  }
*/
  return (
    <div>
      {!isExpand?
            <Table
                data-testid='search-table'
                data={items}
                onRowClick={rowClickHandle(items)}
                rowKey={rowKey}
                wordWrap
                autoHeight
                bordered
                affixHeader
                style={{ background: '#eee'}}
              >
                <Column filter='id' width={-1}>
                  <HeaderCell>id</HeaderCell>
                  <Cell dataKey='id' />
                </Column>
                <Column width={50} align='center'>
                  <HeaderCell>#</HeaderCell>
                  <Cell>
                    {(rowData, rowIndex) => {
                      return rowIndex + 1
                    }}
                  </Cell>
                </Column>
                <Column width={50} align='center'>
                  <HeaderCell style={{ padding: 0 }}>
                    <div style={{ lineHeight: '40px' }}>
                      <Checkbox
                        inline
                        checked={checkedHeader}
                        indeterminate={indeterminateHeader}
                        onChange={handleCheckAll}
                      />
                    </div>
                  </HeaderCell>
                  <CheckCell
                    dataKey={rowKey} // 'ObjectId'
                    checkedKeys={checkedKeys}
                    onChange={handleCheck}
                  />
                </Column>
                {column}
            </Table>
            :
            <Table
                data-testid='search-expand-table'
                data={items}
                onRowClick={rowClickHandle(items)}
                wordWrap
                autoHeight
                bordered
                affixHeader
                style={{ background: '#eee'}}
                rowKey={rowKey}
               /* expandedRowKeys={expandedRowKeys}
                renderRowExpanded={rowData => {
                  return (
                    <div>
                      {
                        Object.keys(rowData).map(function(key, value) {
                          return <div>{rowData[key]}</div>
                        })
                      }

                    </div>
                  );
                }}*/
              >
                {/*<Column width={70} align="center">
                    <HeaderCell>#</HeaderCell>
                    <ExpandCell
                      dataKey={id}
                      expandedRowKeys={expandedRowKeys}
                      onChange={handleExpanded}
                      rowKey={rowKey}
                    />
              </Column>*/}
                 <Column width={50} align='center'>
                  <HeaderCell style={{ padding: 0 }}>
                    <div style={{ lineHeight: '40px' }}>
                      <Checkbox
                        inline
                        checked={checkedHeader}
                        indeterminate={indeterminateHeader}
                        onChange={handleCheckAll}
                      />
                    </div>
                  </HeaderCell>
                  <CheckCell
                    dataKey={rowKey} // 'ObjectId'
                    checkedKeys={checkedKeys}
                    onChange={handleCheck}
                  />
                </Column>
                {
                  column
                }
            </Table>
      }
      <Pagination
        lengthMenu={[
          {
            value: 10,
            label: 10
          },
          {
            value: 20,
            label: 20
          }
        ]}
        activePage={page}
        displayLength={displayLength}
        total={pagination ? pagination.total : 0}
        onChangePage={handleChangePage}
        onChangeLength={handleChangeLength}
        size='lg'
        locale={{ lengthMenuInfo: '顯示 {0} 資料', totalInfo: '資料筆數: {0}' }}
      />
     </div>

      /*
      {checkedKeys.length > 0 ? (
        actionData && actionData.length > 0 ? (
          <ActionBar actions={actionData} />
        ) : props.customsActionBar ? (
          props.customsActionBar
        ) : (
          <div style={{ padding: '18px' }}> </div>
        )
      ) : (
        <div style={{ padding: '18px' }}> </div>
      )}
      */
  )
}
BaseTable.propTypes = {
  // getFolder: PropTypes.func,
  data: PropTypes.array,
  column: PropTypes.array,
  id: PropTypes.string,
  isExpand : PropTypes.bool
  // customsActionBar: PropTypes.object,
  // folderName: PropTypes.string
  // onSelectItem: PropTypes.func
}

BaseTable.defaultProps = {
  id: 'ObjectId',
  data: [],
  isExpand: false
  // onSelectItem: null
}
export default BaseTable
