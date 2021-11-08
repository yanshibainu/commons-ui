import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { SearchBar } from '../bar'
import { DOMHelper } from 'rsuite'
import  SideBarContainer from '../../sidebar-container'
import BaseTable from './base-table'
import {
  SPLIT_MODE_STANDARD
} from '../../constants/constants-type'

const SearchTable = ({ data, column, id, search,
  contextLayout, sidebarShowWidth,...props }) => {
  // const [actionData, setActionData] = useState([])
  const [didMount, setDidMount] = useState(false)
  const rootRef = useRef()
  const [splitMode, setSplitMode] = useState(SPLIT_MODE_STANDARD)

  // rsuite-table 第一次無法正確重算寬度bug處理。
  useEffect(() => {
    if (didMount) {
      if (rootRef) {
        setTimeout(() => {
          const node = ReactDOM.findDOMNode(rootRef.current)
          if (node) DOMHelper.addStyle(node, 'width', '100%')
        }, 500)
      }
    } else setDidMount(true)
  }, [didMount])

  const TableLayout = () => {
    let  expandColumn =[];
    column.forEach(function(item,index){
      if(index<3)
        expandColumn.push(item);
    })
    return (
      <BaseTable data={data} column={expandColumn} id={id}
        isExpand={splitMode==SPLIT_MODE_STANDARD?false:true}
      />
    )
  }

  const ContentLayout = () => {
      return contextLayout;
  }

  const onSelectedSplitMode = (mode) => {
     setSplitMode(mode);
  };

  return (
    <div ref={rootRef} style={{ width: '99%' }}>
      {search &&
      <SearchBar
      columns={column}
      onSelectedSplitMode={(mode) => onSelectedSplitMode(mode)}
      />}
      {splitMode==SPLIT_MODE_STANDARD ? (
            <BaseTable data={data} column={column} id={id}
                isExpand={splitMode==SPLIT_MODE_STANDARD?false:true}
            />
        ) : (
          <SideBarContainer
          sideBarComponent={TableLayout}
          contextComponent={ContentLayout}
          sidebarShowWidth={sidebarShowWidth}
        />
        )}
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

    </div>
  )
}
SearchTable.propTypes = {
  // getFolder: PropTypes.func,
  data: PropTypes.array,
  column: PropTypes.array,
  id: PropTypes.string,
  search: PropTypes.bool,
  contextLayout: PropTypes.any,
  sidebarShowWidth: PropTypes.string
  // customsActionBar: PropTypes.object,
  // folderName: PropTypes.string
  // onSelectItem: PropTypes.func
}

SearchTable.defaultProps = {
  id: 'ObjectId',
  search: true,
  data: [],
  contextLayout:<div></div>,
  sidebarShowWidth:'500px'
  // onSelectItem: null
}
export default SearchTable
