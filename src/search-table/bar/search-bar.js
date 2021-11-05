import React,{useState} from 'react'
import PropTypes from 'prop-types'
import SearchInputGroup from './search-input-group'
import {
  Icon,
  ButtonToolbar,
  IconButton,
  Grid,
  Row,
  Col,
  Whisper,
  Tooltip,
  Popover,
  Button,
  FormGroup,
  FormControl,
  Form,
  ControlLabel,
  Dropdown
} from 'rsuite'

const SearchBar = (props) => {
  const [splitActive, setSplitActive] = useState('no')
  const [splitModeIcon, setSplitModeIcon] = useState('align-justify')
  const handleSelect = (activeKey) => {
    //alert(activeKey)
    if (props.onSelectedSplitMode)
    props.onSelectedSplitMode(activeKey);

    setSplitModeIcon(activeKey=='no'?'align-justify':'squares')
    setSplitActive(activeKey);
  }

  const getAdvancedComponents = (columns) => {
    const formGroup = []
    props.columns.map((c) => {
      if (c.props.filter === 'true') {
        formGroup.push(
          <FormGroup>
            <ControlLabel>{c.props.children[0].props.children}</ControlLabel>
            <FormControl name={c.props.children[1].props.dataKey} />
          </FormGroup>
        )
      }
    })
    if (formGroup.length > 0) {
      return (
        <Form fluid layout='horizontal'>
          {formGroup}
        </Form>
      )
    }
    return null
  }
  return (
    <Grid fluid>
      <Row className='mb-2'>
        <Col xs={14}>
          <SearchInputGroup size='md' placeholder='搜尋' />
        </Col>
        <Col xs={10}>
          <ButtonToolbar>
            <Whisper
              placement='bottomEnd'
              trigger='click'
              speaker={
                <Popover title='進階查詢'>
                  {props.columns && getAdvancedComponents(props.columns)}
                  <div style={{ textAlign: 'right' }}>
                    <Button
                      appearance='primary'
                      style={{ marginLeft: 'auto', marginRight: '5px' }}
                    >
                      查詢
                    </Button>
                  </div>
                </Popover>
              }
              enterable
            >
              <Whisper
                placement='top'
                trigger='hover'
                speaker={<Tooltip>進階搜尋</Tooltip>}
              >
                <IconButton
                  size='md'
                  icon={<Icon icon='filter' />}
                  // onClick={handleClick}
                />
              </Whisper>
            </Whisper>

            <Whisper
              placement='top'
              trigger='hover'
              speaker={<Tooltip>重新整理</Tooltip>}
            >
              <IconButton size='md' icon={<Icon icon='refresh2' />} />
            </Whisper>
            <Dropdown
                  activeKey={splitActive}
                  onSelect={handleSelect}
                  renderTitle={() => {
              return <IconButton appearance="primary" icon={<Icon icon={splitModeIcon} />} circle
              />;
            }}>
              <Dropdown.Item eventKey='no'>不要分割</Dropdown.Item>
              <Dropdown.Item eventKey='vertical'>垂直分割</Dropdown.Item>
            </Dropdown>
          </ButtonToolbar>
        </Col>
      </Row>
    </Grid>
  )
}

SearchBar.propTypes = {
  columns: PropTypes.array
}

export default SearchBar
