import { Sidenav, Nav, Icon, Dropdown, Badge } from 'rsuite'
// import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
// import ReactDOM from 'react-dom';
// import Router, { withRouter } from 'next/router';

const propTypes = {
  data: PropTypes.array.isRequired,
  // renderTitle: PropTypes.elementType.isRequired,
  expanded: PropTypes.bool.isRequired,
  // scrollTop: PropTypes.number.isRequired,
  defaultOpenKeys: PropTypes.array,
  appearance: PropTypes.string,
  // badge: PropTypes.object.isRequired,
  // router: PropTypes.object.isRequired,
  sidenavBodyStyle: PropTypes.func.isRequired
  // setScrollTopAction: PropTypes.func.isRequired,
}

const defaultProps = {
  appearance: 'subtle'
}

const ReutieSidenav = ({
  data,
  renderTitle: RenderTitle,
  expanded: _expanded,
  // scrollTop: _scrollTop,
  defaultOpenKeys,
  appearance,
  // badge,
  // router,
  sidenavBodyStyle
  // setScrollTopAction,
}) => {
  // let navRef
  // debugger
  // const [scrollTop, setScrollTop] = useState(_scrollTop);
  const [expanded, setExpanded] = useState(_expanded)

  // useEffect(() => {

  //   const node = ReactDOM.findDOMNode(navRef);

  //   if (!DOMHelper.hasClass(node, "ps"))
  //     $(node).perfectScrollbar();

  //   if (_expanded) {
  //     setScrollTop(_scrollTop);
  //     if (_expanded != expanded) {
  //       setTimeout(() => {
  //         DOMHelper.scrollTop(node, _scrollTop);
  //       }, 300);
  //     }
  //     else
  //       DOMHelper.scrollTop(node, _scrollTop);
  //   }

  //   const routeChangeHandler = () => {
  //     if (scrollTop != DOMHelper.scrollTop(node))
  //       setScrollTopAction(DOMHelper.scrollTop(node));
  //   }

  //   Router.events.on('routeChangeStart', routeChangeHandler)
  //   return () => {
  //     Router.events.off('routeChangeStart', routeChangeHandler)
  //   }
  // }, [_scrollTop, _expanded]);

  useEffect(() => {
    setExpanded(_expanded)

    // const node = ReactDOM.findDOMNode(navRef);
    // if (!_expanded) {

    //   setScrollTopAction(DOMHelper.scrollTop(node));
    //   DOMHelper.removeClass(node, "ps");
    // }
    // else
    //   DOMHelper.addClass(node, "ps");
  }, [_expanded])

  // const getLinkProps = (item) => {
  //   const href = `/${item.layoutName}`
  //   const as = item.as ? `/${item.as}` : href

  //   return {
  //     href,
  //     as
  //   }
  // }

  const onSelectHandler = (item) => {
    // const linkProps = getLinkProps(item)
    // Router.push(linkProps.href, linkProps.as);
  }

  const buildMenu = (item) => {
    if (item.children && item.children.length > 0) {
      return (
        <Dropdown
          placement='rightStart'
          key={item.id}
          eventKey={item.id}
          title={item.name}
          icon={<Icon icon={item.icon} />}
        >
          {item.children.map((child) => {
            // const linkProps = getLinkProps(child)
            // const count = badge.get(child.id) > 0 ? badge.get(child.id) : "";
            // const active = router.asPath === linkProps.as;

            return (
              <Dropdown.Item
                style={{
                  marginRight: '10px'
                }}
                key={child.id}
                eventKey={child}
              >
                {child.showId && (
                  <Badge
                    className='badge-id'
                    style={{ background: 'cornflowerblue' }}
                    content={child.id}
                  />
                )}
                {child.name}
                {/* {<Badge className="badge-count" content={count}></Badge>} */}

                {
                  <style jsx='true'>
                    {`
                      .rs-sidenav-collapse-in .badge-id {
                        position: absolute;
                        left: 10px;
                      }

                      .rs-sidenav-collapse-in .badge-count {
                        position: absolute;
                        right: 0;
                        top: calc(50% - 8px);
                      }
                    `}
                  </style>
                }
              </Dropdown.Item>
            )
          })}
        </Dropdown>
      )
    }

    // const linkProps = getLinkProps(item);
    // const active = router.asPath === linkProps.as;

    return (
      <Nav.Item
        style={{
          marginRight: '10px'
        }}
        key={item.id}
        eventKey={item}
        icon={<Icon icon={item.icon} />}
      >
        {item.name}
      </Nav.Item>
    )
  }

  return (
    <Sidenav
      onSelect={(item) => onSelectHandler(item)}
      expanded={expanded}
      defaultOpenKeys={defaultOpenKeys}
      appearance={appearance}
    >
      {/* <Sidenav.Header>
        <RenderTitle />
      </Sidenav.Header> */}
      <Sidenav.Body>
        <Nav style={sidenavBodyStyle(expanded)}>
          {data.map((item) => buildMenu(item))}
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  )
}

ReutieSidenav.propTypes = propTypes
ReutieSidenav.defaultProps = defaultProps

export default ReutieSidenav
