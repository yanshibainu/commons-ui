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
  Dropdown,
  DatePicker
} from 'rsuite'
import {
  SPLIT_MODE_STANDARD,
  SPLIT_MODE_VERTICAL,
  SPLIT_MODE_STANDARD_NAME,
  SPLIT_MODE_VERTICAL_NAME,
  SPLIT_MODE_TOOLTIP
} from '../../constants/constants-type'

const SearchBar = (props) => {
  const [splitMode, setSplitMode] = useState(SPLIT_MODE_STANDARD)
  const [splitModeIcon, setSplitModeIcon] = useState('align-justify')
  const handleSplitModeSelect = (mode) => {
    if (props.onSelectedSplitMode)
      props.onSelectedSplitMode(mode);

    setSplitModeIcon(mode==SPLIT_MODE_STANDARD?'align-justify':'squares')
    setSplitMode(mode);
  }

  const getAdvancedComponents = (columns) => {
    const formGroup = []
    props.columns.map((c) => {
      if (c.props.filter === 'true') {
       const children= c.props.children[0].props.children;
       const dataKey=c.props.children[1].props.dataKey;
       let type =  <FormControl name={dataKey} />
       if(c.props.type && c.props.type==='date')
       type=<FormControl name={dataKey} accepter={DatePicker} block/>
        formGroup.push(
          <FormGroup>
            <ControlLabel>{children}</ControlLabel>
            {type}
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
            <Whisper
              placement='top'
              trigger='hover'
              speaker={<Tooltip>{SPLIT_MODE_TOOLTIP}</Tooltip>}
            >
              <Dropdown
                  activeKey={splitMode}
                  onSelect={handleSplitModeSelect}
                  renderTitle={() => {
              return <IconButton appearance="primary" icon={<Icon icon={splitModeIcon} />} circle
              />;
            }}>
              <Dropdown.Item eventKey={SPLIT_MODE_STANDARD}>{SPLIT_MODE_STANDARD_NAME}</Dropdown.Item>
              <Dropdown.Item eventKey={SPLIT_MODE_VERTICAL}>{SPLIT_MODE_VERTICAL_NAME}</Dropdown.Item>
            </Dropdown>
            </Whisper>
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
