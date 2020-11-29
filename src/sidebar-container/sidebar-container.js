import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { Container, Content, Sidebar, IconButton, Icon } from 'rsuite'

const sidebarHideWidth = '30px'
// const sidebarShowWidth = '320px'
const allShowWidth = '100%'

const angleStyles = {
  angleLeft: 'angle-left',
  angleRight: 'angle-right'
}

const propTypes = {
  sideBarComponent: PropTypes.elementType.isRequired,
  contextComponent: PropTypes.elementType.isRequired,
  isDisplayContentIcon: PropTypes.bool,
  sidebarShowWidth: PropTypes.string
}

const defaultProps = {
  isDisplayContentIcon: false,
  sidebarShowWidth: '320px'
}

const SideBarContainer = forwardRef((props, ref) => {
  const {
    sideBarComponent: SideBarComponent,
    contextComponent: ContextComponent,
    isDisplayContentIcon,
    sidebarShowWidth
  } = props

  const sidebarRef = useRef()
  useImperativeHandle(ref, () => sidebarRef.current)

  const [showSidebar, setShowSidebar] = useState(true)
  const [showContent, setShowContent] = useState(true)
  const [sidebarWidth, setSidebarWidth] = useState(
    showSidebar ? sidebarShowWidth : sidebarHideWidth
  )

  const _setShowSidebar = (value) => {
    setShowSidebar(value)
    if (!value) {
      setShowContent(true)
      setSidebarWidth(sidebarHideWidth)
    } else if (showContent) setSidebarWidth(sidebarShowWidth)
    else setSidebarWidth(allShowWidth)
  }

  const _setShowContent = (value) => {
    setShowContent(value)
    if (!value) {
      setShowSidebar(true)
      setSidebarWidth(allShowWidth)
    } else if (showSidebar) setSidebarWidth(sidebarShowWidth)
    else setSidebarWidth(sidebarHideWidth)
  }

  const onSelectedItemsChange = (items) => {
    _setShowContent(items.length > 0)
  }

  // useEffect(() => {
  //   $(window).trigger('resize').trigger('resize')
  // }, [])

  // useEffect(() => {
  //   function transitionEnd(e) {
  //     if (e.propertyName === 'width') {
  //       console.log('%c⧭', 'color: #735656', 'transitionEnd')
  //       setTimeout(() => {
  //         $(window).trigger('resize').trigger('resize')
  //       }, 500)
  //     }
  //   }

  //   sidebarRef.current.parentElement.addEventListener(
  //     'transitionend',
  //     transitionEnd
  //   )
  //   return () =>
  //     sidebarRef.current.parentElement.removeEventListener(
  //       'transitionend',
  //       transitionEnd
  //     )
  // }, [])

  return (
    <Container>
      <Sidebar
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: `"0 0 ${sidebarWidth}"`
        }}
        width={sidebarWidth}
        collapsible
      >
        <div
          ref={sidebarRef}
          style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <IconButton
            appearance='link'
            icon={
              <Icon
                icon={
                  showSidebar ? angleStyles.angleLeft : angleStyles.angleRight
                }
              />
            }
            onClick={() => _setShowSidebar(!showSidebar)}
          />
        </div>
        <div style={{ display: showSidebar ? 'block' : 'none' }}>
          <SideBarComponent
            // info={info}
            onSelectedItemsChange={onSelectedItemsChange}
            // onSelectedCurrentItemId={onSelectedCurrentItemId}
            scrollY='70vh'
            {...props}
          />
        </div>
      </Sidebar>
      <Content>
        {isDisplayContentIcon && (
          <IconButton
            appearance='link'
            icon={
              <Icon
                icon={
                  showContent ? angleStyles.angleRight : angleStyles.angleLeft
                }
              />
            }
            onClick={() => _setShowContent(!showContent)}
          />
        )}
        {isDisplayContentIcon && (
          <IconButton
            appearance='link'
            icon={<Icon icon={showSidebar ? 'expand' : 'compress'} />}
            onClick={() => _setShowSidebar(!showSidebar)}
          />
        )}
        <div style={{ display: showContent ? 'block' : 'none' }}>
          <ContextComponent />
        </div>
      </Content>
    </Container>
  )
})

SideBarContainer.propTypes = propTypes
SideBarContainer.defaultProps = defaultProps

export default SideBarContainer
