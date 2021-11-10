import React from 'react'
import { SearchTable, ObjectCell } from 'commons-ui'
import { Table } from 'rsuite'
import { useValue } from 'react-cosmos/fixture';
const { Cell, HeaderCell, Column } = Table

const Context = () => {
  const [search] = useValue('search', { defaultValue: true });
  const [contextLayout] = useValue('contextLayout', { defaultValue: <div>333</div> });
  const [sidebarShowWidth] = useValue('sidebarShowWidth', { defaultValue: '500px' });

  /*const data = [
    { id: 'aaaaaaaaaaaaaaaaaaaaaaaaaa', objectId: '1', subject: '111' },
    { id: 'bbbbbbbbbbbbbbbbbbbbb', objectId: '2', subject: '222' }
  ]*/
  const [data] = useValue('data', { defaultValue: [
    { id: 'aaaaaaaaaaaaaaaaaaaaaaaaaa', objectId: '1', subject: '111' },
    { id: 'bbbbbbbbbbbbbbbbbbbbb', objectId: '2', subject: '222' }
  ] });

  const column = [
    <Column id='11' filter='id' width={-1} sortable key='id'>
      <HeaderCell>文號</HeaderCell>
      <Cell dataKey='id' />
    </Column>,
    <Column filter='true' flexGrow={1} sortable key='objectId'>
      <HeaderCell>文號</HeaderCell>
      <ObjectCell dataKey='objectId' />
    </Column>,
    <Column filter='true' flexGrow={4} key='subject'>
      <HeaderCell>主旨</HeaderCell>
      <Cell dataKey='subject' />
    </Column>,
    <Column filter='true' type="date" flexGrow={4} key='subject'>
      <HeaderCell>日期</HeaderCell>
      <Cell dataKey='data' />
    </Column>

  ]
  return (
    <SearchTable
      column={column}
      data={data}
      search={search}
      contextLayout={contextLayout}
      sidebarShowWidth={sidebarShowWidth}
      />
  )
}

export default Context
