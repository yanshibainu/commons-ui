import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CheckCell from '../cell/check-cell'
import { SearchBar } from '../bar'
import { Table, Grid, Row, Checkbox } from 'rsuite'

const { Cell, Pagination, Column, HeaderCell } = Table

const SearchTable = (props) => {
  const [checkedKeys, setCheckedKeys] = useState([])
  const [checkedHeader, setCheckedHeader] = useState(false)
  const [indeterminateHeader, setIndeterminateHeader] = useState(false)
  // const [actionData, setActionData] = useState([])
  const [displayLength, setDisplayLength] = useState(10)
  const [page, setPage] = useState(1)

  const [data] = useState(
    props.data
      ? props.data.items
        ? props.data.items
        : props.data
        ? props.data
        : []
      : []
  )
  /* const data = props.data
    ? props.data.items
      ? props.data.items
      : props.data
      ? props.data
      : []
    : [] */
  const pagination = props.data ? props.data.pagination : null

  useEffect(() => {
    setIndeterminateHeader(false)
    if (data && data.length > 0) {
      if (data && checkedKeys.length === data.length) {
        setCheckedHeader(true)
      } else if (checkedKeys.length === 0) {
        setCheckedHeader(false)
      } else if (
        data &&
        checkedKeys.length > 0 &&
        checkedKeys.length < data.length
      ) {
        setIndeterminateHeader(true)
      }
      // onSelectItem()
    }
  }, [checkedKeys, data])

  const handleCheck = (value, checked) => {
    const nextCheckedKeys = checked
      ? [...checkedKeys, value]
      : checkedKeys.filter((item) => item !== value)
    setCheckedKeys(nextCheckedKeys)
    //  const rowData = data.filter((item) => item.ObjectId === value)[0]
    //  if (rowData && rowData.Actions) setActionData(rowData.Actions)
  }

  const handleCheckAll = (value, checked) => {
    const checkedKeys = checked ? data.map((item) => item.ObjectId) : []
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

  return (
    <div>
      {props.search && <SearchBar columns={props.column} />}
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
      <Grid fluid>
        <Row className='mb-2'>
          <Table
            data={data}
            onRowClick={rowClickHandle(data)}
            height={500}
            wordWrap
            autoHeight
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
            {props.column}
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
        </Row>
      </Grid>
    </div>
  )
}
SearchTable.propTypes = {
  // getFolder: PropTypes.func,
  data: PropTypes.array,
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
