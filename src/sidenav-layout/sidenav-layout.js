import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Sidebar,
  Content,
  Navbar,
  Nav,
  Icon,
  Affix,
  Message
} from 'rsuite'
import Sidenav from './sidenav'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: '#365cad',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
}

const iconStyles = {
  width: 56,
  height: 56,
  lineHeight: '56px',
  textAlign: 'center'
}

const sidebarStyles = {
  display: 'flex',
  flexDirection: 'column'
}

const userInfoStyles = {
  height: 20
}

const NavToggle = ({ expand, onChange }) => (
  <Navbar className='nav-toggle'>
    <Navbar.Body>
      <Nav pullRight>
        <Nav.Item
          onClick={onChange}
          style={{ width: iconStyles, textAlign: 'center' }}
        >
          <Icon icon={expand ? 'angle-left' : 'angle-right'} />
        </Nav.Item>
      </Nav>
    </Navbar.Body>
  </Navbar>
)

NavToggle.propTypes = {
  expand: PropTypes.bool.isRequired,
  onChange: PropTypes.func
}

// const defaultOpenKeys = ['task', 'system']

// const SidenavContainer = connect(
//   $$state => ({
//     badge: $$state.get("$$task").get("count"),
//     defaultOpenKeys
//   })
// )(Sidenav)

const propTypes = {
  sidenavTitle: PropTypes.elementType.isRequired,
  contextLayout: PropTypes.elementType.isRequired,
  sidenavData: PropTypes.array.isRequired,
  itemRender: PropTypes.elementType,
  dropdownItemRender: PropTypes.elementType,

  error: PropTypes.string
}

const defaultProps = {}

const Layout = ({
  sidenavTitle: SidenavTitle,
  contextLayout: ContextLayout,
  sidenavData,
  itemRender,
  dropdownItemRender,
  error
}) => {
  const [expand, setExpand] = useState(true)

  const _setExpand = (value) => {
    setExpand(value)
  }

  return (
    <div className='show-fake-browser sidebar-page'>
      <Container>
        <Sidebar style={sidebarStyles} width={expand ? 200 : 56} collapsible>
          <SidenavTitle expand={expand} />
          <PerfectScrollbar>
            <Sidenav
              data={sidenavData}
              itemRender={itemRender}
              dropdownItemRender={dropdownItemRender}
              expanded={expand}
              sidenavBodyStyle={() => {
                return {
                  height: `calc(100vh - ${
                    headerStyles.height +
                    iconStyles.height +
                    userInfoStyles.height +
                    18
                  }px)`
                }
              }}
            />
          </PerfectScrollbar>

          <NavToggle onChange={() => _setExpand(!expand)} expand={expand} />
        </Sidebar>
        <Container style={{ minWidth: 0 }}>
          <Content>
            <Affix>
              {error && (
                <Message
                  closable
                  showIcon
                  type='error'
                  title='Error'
                  description={error}
                />
              )}
            </Affix>
            <ContextLayout />
          </Content>
        </Container>
      </Container>
    </div>
  )
}

Layout.propTypes = propTypes
Layout.defaultProps = defaultProps

export default Layout
