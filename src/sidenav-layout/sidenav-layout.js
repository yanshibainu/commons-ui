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

const NavToggle = ({ expand, onChange, appearance }) => (
  <Navbar className='nav-toggle' appearance={appearance}>
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
  onChange: PropTypes.func,
  appearance: PropTypes.string
}

const propTypes = {
  sidenavTitle: PropTypes.elementType.isRequired,
  contextLayout: PropTypes.elementType.isRequired,
  sidenavData: PropTypes.array.isRequired,
  itemRender: PropTypes.elementType,
  dropdownItemRender: PropTypes.elementType,
  activePath: PropTypes.string,
  defaultOpenKeys: PropTypes.array,
  error: PropTypes.string,
  isExpand: PropTypes.bool,
  appearance: PropTypes.string
}

const defaultProps = {
  isExpand: true,
  appearance: 'subtle'
}

const Layout = ({
  sidenavTitle: SidenavTitle,
  contextLayout: ContextLayout,
  sidenavData,
  itemRender,
  dropdownItemRender,
  error,
  activePath,
  defaultOpenKeys,
  isExpand,
  appearance
}) => {
  const [expand, setExpand] = useState(isExpand)

  const _setExpand = (value) => {
    setExpand(value)
  }

  return (
    <div className='show-fake-browser sidebar-page'>
      <Container>
        <Sidebar style={sidebarStyles} width={expand ? 200 : 56} collapsible>
          <Affix>
            <SidenavTitle expand={expand} />
            <PerfectScrollbar>
              <Sidenav
                data={sidenavData}
                itemRender={itemRender}
                dropdownItemRender={dropdownItemRender}
                expanded={expand}
                activePath={activePath}
                defaultOpenKeys={defaultOpenKeys}
                appearance={appearance}
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
            <NavToggle
              onChange={() => _setExpand(!expand)}
              expand={expand}
              appearance={appearance}
            />
          </Affix>
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
