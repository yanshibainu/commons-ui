// import React, { useState } from 'react'
// import styles from './styles.module.css'

// export const ExampleComponent = ({ text }) => {
//   const [ok, setOk] = useState(0)
//   return <div className={styles.test}>Example Component: {text} {ok}</div>
// }
import EditorContainerLayout from './editor-container-layout'

export { default as SideBarContainer } from './sidebar-container'
export { default as SidenavLayout } from './sidenav-layout'
export { default as ContainerLayout } from './container-layout'
// export { default as EditorContainerLayout } from './editor-container-layout'

export { EditorContainerLayout }

const commonsUI = {
  EditorContainerLayout
}
export default { EditorContainerLayout, commonsUI }
