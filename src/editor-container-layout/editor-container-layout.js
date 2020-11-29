import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row } from 'rsuite'
import SidebarContainer from '../sidebar-container'
// import SplitPane from 'react-split-pane'
const propTypes = {
  menuBar: PropTypes.object.isRequired,
  contextLayout: PropTypes.object.isRequired,
  toolBar: PropTypes.object.isRequired,
  leftLayout: PropTypes.object.isRequired,
  sidebarShowWidth: PropTypes.string
}

const defaultProps = {}
/*
const styles = {
  background: '#000',
  width: '2px',
  cursor: 'col-resize',
  margin: '0 5px',
  height: '100%'
}
*/
const EditContainerLayout = (props) => {
  return (
    <div>
      <Grid fluid>
        <Row>{props.menuBar}</Row>
        <Row>{props.toolBar}</Row>
        <Row>
          <SidebarContainer
            sideBarComponent={props.leftLayout}
            contextComponent={props.contextLayout}
            sidebarShowWidth={props.sidebarShowWidth}
          />
        </Row>
      </Grid>
      {/* <SplitPane split='vertical' resizerStyle={styles}>
            <div initialSize='20%' minSize='20%'>
              {props.leftLayout}
            </div>
            <div>
              <div>{props.contextLayout}</div>
            </div>
          </SplitPane>
  */}
    </div>
  )
}

EditContainerLayout.propTypes = propTypes
EditContainerLayout.defaultProps = defaultProps

export default EditContainerLayout
