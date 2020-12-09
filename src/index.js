// import React, { useState } from 'react'
// import styles from './styles.module.css'

// export const ExampleComponent = ({ text }) => {
//   const [ok, setOk] = useState(0)
//   return <div className={styles.test}>Example Component: {text} {ok}</div>
// }
import EditorContainerLayout from './editor-container-layout'

// talbe && cell
import {
  AttachCell,
  CheckCell,
  ImageCell,
  DateCell,
  ObjectCell
} from './search-table/cell'
import SearchTable from './search-table/table'
export { default as SideBarContainer } from './sidebar-container'
export { default as SidenavLayout } from './sidenav-layout'

export { EditorContainerLayout }

const commonsUI = {
  EditorContainerLayout,
  AttachCell,
  CheckCell,
  ImageCell,
  DateCell,
  ObjectCell,
  SearchTable
}
export default {
  EditorContainerLayout,
  AttachCell,
  CheckCell,
  ImageCell,
  DateCell,
  ObjectCell,
  SearchTable,
  commonsUI
}
