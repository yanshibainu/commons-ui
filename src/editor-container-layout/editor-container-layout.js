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

const EditContainerLayout = (props) => {
  return (
    <div>
      <Grid fluid>
        <Row>{props.menuBar}</Row>
        <Row>{props.toolBar}</Row>
        <Row>
          <Col xs={6}>{props.leftLayout}</Col>
          <Col xs={18}>{props.contextLayout}</Col>
        </Row>
      </Grid>
    </div>
  )
}

EditContainerLayout.propTypes = propTypes
EditContainerLayout.defaultProps = defaultProps

export default EditContainerLayout
