import { Sidenav, Nav, Icon, Dropdown, Badge } from 'rsuite'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

const propTypes = {
  data: PropTypes.array.isRequired,
  expanded: PropTypes.bool.isRequired,
  defaultOpenKeys: PropTypes.array,
  appearance: PropTypes.string,
  sidenavBodyStyle: PropTypes.func.isRequired,
  itemRender: PropTypes.elementType,
  dropdownItemRender: PropTypes.elementType,
  activePath: PropTypes.string
}

const defaultProps = {
  appearance: 'subtle',
  itemRender: Nav.Item,
  dropdownItemRender: Dropdown.Item
}

const ReutieSidenav = ({
  data,
  expanded: _expanded,
  defaultOpenKeys,
  appearance,
  sidenavBodyStyle,
  itemRender: ItemRender,
  dropdownItemRender: DropdownItemRender,
  activePath,
  ...props
}) => {
  const [expanded, setExpanded] = useState(_expanded)

  useEffect(() => {
    setExpanded(_expanded)
  }, [_expanded])

  const onSelectHandler = (item) => {}

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
            const active = activePath === child.href

            return (
              <DropdownItemRender
                active={active}
                href={child.href}
                as={child.as}
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
              </DropdownItemRender>
            )
          })}
        </Dropdown>
      )
    }

    const active = activePath === item.href

    return (
      <ItemRender
        active={active}
        href={item.href}
        as={item.as}
        style={{
          marginRight: '10px'
        }}
        key={item.id}
        eventKey={item}
        icon={<Icon icon={item.icon} />}
        {...props}
      >
        {item.name}
      </ItemRender>
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
