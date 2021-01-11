import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import CheckCell from '../cell/check-cell'
import ReactDOM from 'react-dom'
import { SearchBar } from '../bar'
import { Table, Grid, Row, Checkbox, DOMHelper } from 'rsuite'

const { Cell, Pagination, Column, HeaderCell } = Table

const SearchTable = ({ data, column, id, search, ...props }) => {
  const [checkedKeys, setCheckedKeys] = useState([])
  const [checkedHeader, setCheckedHeader] = useState(false)
  const [indeterminateHeader, setIndeterminateHeader] = useState(false)
  // const [actionData, setActionData] = useState([])
  const [displayLength, setDisplayLength] = useState(10)
  const [page, setPage] = useState(1)
  const [didMount, setDidMount] = useState(false)
  const rootRef = useRef()

  const [items] = useState(data?.items || [])

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
    const nextCheckedKeys = checked
      ? [...checkedKeys, value]
      : checkedKeys.filter((item) => item !== value)
    setCheckedKeys(nextCheckedKeys)
    //  const rowData = data.filter((item) => item.ObjectId === value)[0]
    //  if (rowData && rowData.Actions) setActionData(rowData.Actions)
  }

  const handleCheckAll = (value, checked) => {
    const checkedKeys = checked ? items.map((item) => item.ObjectId) : []
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

  // rsuite-table 第一次無法正確重算寬度bug處理。
  useEffect(() => {
    if (didMount) {
      if (rootRef) {
        setTimeout(() => {
          const node = ReactDOM.findDOMNode(rootRef.current)
          if (node) DOMHelper.addStyle(node, 'width', '100%')
        }, 200)
      }
    } else setDidMount(true)
  }, [didMount])

  return (
    <div ref={rootRef} style={{ width: '99%' }}>
      {search && <SearchBar columns={column} />}
      {/*
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
      */}
      <Table
        data={items}
        onRowClick={rowClickHandle(items)}
        wordWrap
        autoHeight
        bordered
        affixHeader
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
            dataKey={props.id} // 'ObjectId'
            checkedKeys={checkedKeys}
            onChange={handleCheck}
          />
        </Column>
        {column}
      </Table>
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
      />
    </div>
  )
}
SearchTable.propTypes = {
  // getFolder: PropTypes.func,
  data: PropTypes.object,
  column: PropTypes.array,
  id: PropTypes.string,
  search: PropTypes.bool
  // customsActionBar: PropTypes.object,
  // folderName: PropTypes.string
  // onSelectItem: PropTypes.func
}

SearchTable.defaultProps = {
  id: 'ObjectId',
  search: true
  // onSelectItem: null
}
export default SearchTable
