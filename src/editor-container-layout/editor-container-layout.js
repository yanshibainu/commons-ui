import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'rsuite'

const propTypes = {
  menuBar: PropTypes.elementType.isRequired,
  contextLayout: PropTypes.elementType.isRequired,
  toolBar: PropTypes.elementType.isRequired,
  leftLayout: PropTypes.elementType.isRequired
}

const defaultProps = {}

const EditContainerLayout = ({
  menuBar: MenuBar,
  toolBar: ToolBar,
  contextLayout: ContextLayout,
  leftLayout: LeftLayout
}) => {
  return (
    <div>
      <Grid fluid>
        <Row>
          <MenuBar />
        </Row>
        <Row>
          <ToolBar />
        </Row>
        <Row>
          <Col xs={6}>
            <LeftLayout />
          </Col>
          <Col xs={18}>
            <ContextLayout />
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

EditContainerLayout.propTypes = propTypes
EditContainerLayout.defaultProps = defaultProps

export default EditContainerLayout
