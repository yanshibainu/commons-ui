import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchTable from '../search-table/table/search-table'
import { Table } from 'rsuite'
const { Cell, HeaderCell, Column } = Table

describe('Index testing', () => {
  // debugger
  const column = [
    <Column flexGrow={1} key='objectId'>
      <HeaderCell>文號</HeaderCell>
      <Cell dataKey='objectId' />
    </Column>,
    <Column flexGrow={3} key='subject'>
      <HeaderCell>主旨</HeaderCell>
      <Cell dataKey='subject' />
    </Column>,
    <Column flexGrow={1} key='incomingOrganization'>
      <HeaderCell>來文機關</HeaderCell>
      <Cell dataKey='incomingOrganization' />
    </Column>,
    <Column flexGrow={1} key='incomingNumber'>
      <HeaderCell>來文字號</HeaderCell>
      <Cell>
        {(rowData) => {
          return rowData.incomingPrefix + rowData.incomingNumber
        }}
      </Cell>
    </Column>,
    <Column flexGrow={1} align='center' key='attachmentCount'>
      <HeaderCell>分文人員</HeaderCell>
      <Cell dataKey='attachmentCount' />
    </Column>
  ]

  test('測試是否可正常的render', () => {
    const { getByTestId } = render(<SearchTable column={column} data={[]} />)
    const node = getByTestId('search-table')
    expect(node).not.toBeNull()
  })

})
