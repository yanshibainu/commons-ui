import React, { useState } from 'react'
// import { connect } from 'react-redux';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types'
// import Link from 'next/link';
// import Router from 'next/router';
// import { leftLayoutItemList, projectName, projectLogoImgSrc } from "../../../config";
import {
  Container,
  Sidebar,
  Content,
  Navbar,
  Nav,
  Icon,
  Dropdown,
  Affix,
  Message
} from 'rsuite'
import Sidenav from './sidenav'
// import Loader from "../../loader";

// const headerStyles = {
//   // padding: 18,
//   // fontSize: 16,
//   // height: 88,
//   // background: '#365cad',
//   // whiteSpace: 'nowrap',
//   // overflow: 'hidden'
// };

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

const NavToggle = ({ expand, onChange, logout }) => (
  <Navbar className='nav-toggle'>
    <Navbar.Body>
      {/* <Nav>
        <Dropdown
          placement="topStart"
          trigger="hover"
          renderTitle={() => {
            return <Icon style={iconStyles} icon="cog" />;
          }}
        >
          <Dropdown.Item onClick={() => Router.push("/user")}>個人資訊</Dropdown.Item>
          <Dropdown.Item onClick={() => logout()}>登出</Dropdown.Item>
        </Dropdown>
      </Nav> */}

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

const SidenavTitle = ({ expand }) => (
  <div>
    <div style={headerStyles}>
      <Icon icon='logo-analytics' size='lg' style={{ verticalAlign: 0 }} />
      <span style={{ marginLeft: 12 }}> </span>
    </div>
    <Dropdown
      title={expand ? '魏光泰' : ''}
      trigger='hover'
      icon={<Icon icon='user' />}
    >
      <Dropdown.Item icon={<Icon icon='file' />}>個人資訊</Dropdown.Item>
      <Dropdown.Item icon={<Icon icon='file-o' />}>登出</Dropdown.Item>
    </Dropdown>

    {/* {expand &&
      <Dropdown title="資訊處 程式設計師 魏光泰" icon={<Icon icon="file" />}
        placement="topStart"
        trigger="click"
        renderTitle={() => {
          return <Icon style={iconStyles} icon="cog" />;
        }}
      >
        <Dropdown.Item onClick={() => Router.push("/user")}>個人資訊</Dropdown.Item>
        <Dropdown.Item onClick={() => logout()}>登出</Dropdown.Item>
      </Dropdown>
    } */}
  </div>
)

// const defaultOpenKeys = ['task', 'system']

// const SidenavContainer = connect(
//   $$state => ({
//     badge: $$state.get("$$task").get("count"),
//     defaultOpenKeys
//   })
// )(Sidenav)

const propTypes = {
  contextLayout: PropTypes.elementType.isRequired,
  sidenavData: PropTypes.array.isRequired,
  // setExpandAction: PropTypes.func.isRequired,
  // setScrollTopAction: PropTypes.func.isRequired,
  // info: PropTypes.object,
  // logout: PropTypes.func.isRequired,
  // $$leftLayout: ImmutablePropTypes.map.isRequired,
  // $$user: ImmutablePropTypes.map,
  // $$loader: ImmutablePropTypes.map.isRequired,

  error: PropTypes.string,
  isLoading: PropTypes.bool
}

const defaultProps = {
  isLoading: false
}

const Layout = ({
  contextLayout: ContextLayout,
  sidenavData,
  error,
  isLoading
  // setExpandAction,
  // setScrollTopAction,
  // logout,
  // $$leftLayout,
  // $$user,
  // $$loader
}) => {
  // const _expand = $$leftLayout.get("expand");
  // const scrollTop = $$leftLayout.get("scrollTop");

  const [expand, setExpand] = useState(true)

  const _setExpand = (value) => {
    setExpand(value)
    // setExpandAction(value);
  }

  // useEffect(() => {
  //   if (_expand != expand)
  //     setExpand(_expand);
  // }, [_expand]);

  return (
    <div className='show-fake-browser sidebar-page'>
      <Container>
        <Sidebar style={sidebarStyles} width={expand ? 260 : 56} collapsible>
          <Affix>
            <SidenavTitle expand={expand} />
            {/* <SidenavContainer
              data={leftLayoutItemList}
              expanded={expand}
              setScrollTopAction={setScrollTopAction}
              scrollTop={scrollTop}
              appearance="subtle"
              renderTitle={() => SidenavTitle(expand, $$user)}
              sidenavBodyStyle={() => {
                return {
                  height: `calc(100vh - ${headerStyles.height + iconStyles.height + userInfoStyles.height + 40}px)`,
                }
              }}
            /> */}
            <Sidenav
              data={sidenavData}
              expanded={expand}
              // setScrollTopAction={setScrollTopAction}
              // scrollTop={scrollTop}
              // appearance="subtle"
              // renderTitle={() => <SidenavTitle expand={expand} />}
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
            <NavToggle onChange={() => _setExpand(!expand)} expand={expand} />
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
        {/* {isLoading && <Loader />} */}
      </Container>
    </div>
  )
}

Layout.propTypes = propTypes
Layout.defaultProps = defaultProps

export default Layout
