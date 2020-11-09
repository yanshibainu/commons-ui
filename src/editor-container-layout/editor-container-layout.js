import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row } from 'rsuite'
import SplitPane from 'react-split-pane'
const propTypes = {
  menuBar: PropTypes.object.isRequired,
  contextLayout: PropTypes.object.isRequired,
  toolBar: PropTypes.object.isRequired,
  leftLayout: PropTypes.object.isRequired
}

const defaultProps = {}
const styles = {
  background: '#000',
  width: '2px',
  cursor: 'col-resize',
  margin: '0 5px',
  height: '100%'
}
const EditContainerLayout = (props) => {
  return (
    <div>
      <Grid fluid>
        <Row>{props.menuBar}</Row>
        <Row>
          <SplitPane split='vertical' resizerStyle={styles}>
            <div initialSize='25%' minSize='20%'>
              {props.leftLayout}
            </div>
            <div>
              <div>{props.toolBar}</div>
              <div>{props.contextLayout}</div>
            </div>
          </SplitPane>
        </Row>
      </Grid>
      {/* <SplitPane split='vertical' minSize={50} defaultSize={100}>
        <Pane initialSize='25%' minSize='10%' maxSize='500px'>
          {props.leftLayout}
        </Pane>
        <Pane>{props.contextLayout}</Pane>
      </SplitPane>
  */}
    </div>
  )
}

EditContainerLayout.propTypes = propTypes
EditContainerLayout.defaultProps = defaultProps

export default EditContainerLayout
