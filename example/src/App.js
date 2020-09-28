import React from 'react'

import { SidenavLayout, ContainerLayout } from 'commons-ui'

import { Icon, Dropdown, ButtonToolbar, Button } from 'rsuite'

import './index.less'

const routes = {
  info: {
    '/task/F001': {
      id: 'F001',
      showId: true,
      name: '基因重組實驗申請書',
      layoutName: 'task/[formKey]',
      as: 'task/F001',
      icon: 'icon-content rs-icon rs-icon-file',
      dataColumns: [
        {
          title: '',
          filterName: ''
        },
        {
          title: '管制編號',
          filterName: '表單編號',
          data: null,
          responsivePriority: 0
        },
        {
          title: '計畫名稱',
          filterName: '計畫名稱',
          data: null,
          responsivePriority: 7
        },
        {
          title: '部門',
          filterName: '聯絡人部門名稱',
          data: null,
          responsivePriority: 2
        },
        {
          title: '聯絡人',
          filterName: '聯絡人姓名',
          data: null,
          responsivePriority: 3
        },
        {
          title: '計畫主持人',
          filterName: '主持人姓名',
          data: null,
          responsivePriority: 4
        },
        {
          title: '狀態',
          filterName: null,
          data: 'nameWithoutCascade',
          responsivePriority: 5
        },
        {
          title: '送出時間',
          filterName: null,
          data: 'createTime',
          responsivePriority: 6
        }
      ]
    },
    '/task/F002': {
      id: 'F002',
      showId: true,
      name: '感染性生物材料處分申請書',
      layoutName: 'task/[formKey]',
      as: 'task/F002',
      icon: 'icon-content rs-icon rs-icon-file-o',
      dataColumns: [
        {
          title: '',
          filterName: ''
        },
        {
          title: '管制編號',
          filterName: '表單編號',
          data: null,
          responsivePriority: 0
        },
        {
          title: '計畫名稱',
          filterName: '計畫名稱',
          data: null,
          responsivePriority: 7
        },
        {
          title: '部門',
          filterName: '聯絡人部門名稱',
          data: null,
          responsivePriority: 1
        },
        {
          title: '聯絡人',
          filterName: '聯絡人姓名',
          data: null,
          responsivePriority: 2
        },
        {
          title: '計畫主持人',
          filterName: '主持人姓名',
          data: null,
          responsivePriority: 3
        },
        {
          title: '受理單位',
          filterName: '受理單位機構',
          data: null,
          responsivePriority: 4
        },

        {
          title: '狀態',
          filterName: null,
          data: 'nameWithoutCascade',
          responsivePriority: 5
        },
        {
          title: '送出時間',
          filterName: null,
          data: 'createTime',
          responsivePriority: 6
        }
      ]
    },
    '/task/F003': {
      id: 'F003',
      showId: true,
      name: '感染性生物材料輸出入及使用申請書',
      layoutName: 'task/[formKey]',
      as: 'task/F003',
      icon: 'icon-content rs-icon rs-icon-file-text',
      dataColumns: [
        {
          title: '計畫名稱',
          filterName: '計畫名稱',
          data: null
        },
        {
          title: '執行期限',
          filterName: '執行期限',
          data: null
        },
        {
          title: '部門',
          filterName: '聯絡人部門名稱',
          data: null
        },
        {
          title: '聯絡人',
          filterName: '聯絡人姓名',
          data: null
        },
        {
          title: '計畫主持人',
          filterName: '主持人姓名',
          data: null
        },
        {
          title: '品項名稱',
          filterName: '品項名稱',
          data: null
        },
        {
          title: '狀態',
          filterName: null,
          data: 'nameWithoutCascade'
        },
        {
          title: '送出時間',
          filterName: null,
          data: 'createTime'
        }
      ]
    },
    '/task/F004': {
      id: 'F004',
      showId: true,
      name: '輸出輸入RG2感染性生物材料辦理情形回報單',
      layoutName: 'task/[formKey]',
      as: 'task/F004',
      icon: 'icon-content rs-icon rs-icon-file-text',
      dataColumns: [
        {
          title: '品項',
          filterName: '品項',
          data: null
        },
        {
          title: '辦理日期',
          filterName: '辦理日期',
          data: null
        },
        {
          title: '數量',
          filterName: '數量',
          data: null
        },
        {
          title: '保存實驗室',
          filterName: '保存實驗室',
          data: null
        },
        {
          title: '狀態',
          filterName: null,
          data: 'nameWithoutCascade'
        },
        {
          title: '送出時間',
          filterName: null,
          data: 'createTime'
        }
      ]
    },
    '/task/F005': {
      id: 'F005',
      showId: true,
      name: '帳號開立單',
      layoutName: 'task/[formKey]',
      as: 'task/F005',
      icon: 'icon-content rs-icon rs-icon-user-plus',
      dataColumns: [
        {
          title: '員工編號',
          filterName: 'userId',
          data: null
        },
        {
          title: '姓',
          filterName: 'lastName',
          data: null
        },
        {
          title: '名',
          filterName: 'firstName',
          data: null
        },
        {
          title: '狀態',
          filterName: null,
          data: 'nameWithoutCascade'
        },
        {
          title: '送出時間',
          filterName: null,
          data: 'createTime'
        }
      ]
    },
    '/system-announce': {
      id: '102',
      name: '系統公告管理維護',
      layoutName: 'system-announce',
      icon: 'icon-content rs-icon rs-icon-volume-up',
      dataColumns: [
        {
          title: '公告人',
          data: 'announceUserName',
          name: 'announceUserName',
          width: '10%'
        },
        {
          title: '公告日期',
          data: 'announceDate',
          name: 'announceDate',
          width: '15%'
          // render: function (data, type, full, meta) {
          //   return moment(data).format('YYYY-MM-DD');
          // }
        },
        {
          title: '公告結束日期',
          data: 'announceDeadLine',
          name: 'announceDeadLine',
          width: '15%'
          // render: function (data, type, full, meta) {
          //   return moment(data).format('YYYY-MM-DD');
          // }
        },
        {
          title: '公告內容',
          data: 'message',
          name: 'message',
          width: '50%'
        },
        {
          title: '附件',
          data: 'attaches',
          name: 'name',
          width: '15%'
        }
      ]
    },
    '/system-departments': {
      id: '103',
      icon: 'icon-content rs-icon rs-icon-user-plus',
      name: '組織人員管理維護',
      layoutName: 'system-departments',
      dataColumns: [
        {
          title: '部門名稱',
          data: 'name',
          name: 'name'
        }
      ]
    },
    '/system-groups': {
      id: '104',
      icon: 'icon-content rs-icon rs-icon-group',
      name: '權限管理維護',
      layoutName: 'system-groups',
      dataColumns: [
        {
          title: '權限名稱',
          data: 'name',
          name: 'name'
        }
      ]
    }
  }
}

const sidenavData = {
  routes,
  API: {
    AUTH: 'http://localhost:4000',
    BP: 'http://localhost:8080/rest'
  },
  loginProjectName: '',
  projectName: '',
  projectCode: '',
  projectLogoImgSrc: '/bower_components/pro-resources/images/icon/logo.png',
  functionList: [
    {
      id: 'Item',
      name: 'Item',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item',
      as: 'item'
    },
    {
      id: 'Group',
      name: 'Group',
      children: [
        {
          id: 'GroupItem',
          name: 'GroupItem',
          icon: 'icon-content rs-icon rs-icon-edit2',
          href: 'group-item'
        },
        {
          id: 'GroupItem2',
          name: 'GroupItem2',
          icon: 'icon-content rs-icon rs-icon-edit2',
          href: 'group-item2'
        }
      ]
    },
    {
      id: 'Item2',
      name: 'Item2',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item2'
    },
    {
      id: 'Item3',
      name: 'Item3',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item3'
    },
    {
      id: 'Item4',
      name: 'Item4',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item4'
    },
    {
      id: 'Item5',
      name: 'Item5',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item5'
    },
    {
      id: 'Item6',
      name: 'Item6',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item6'
    },
    {
      id: 'Item7',
      name: 'Item7',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item7'
    },
    {
      id: 'Item8',
      name: 'Item8',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item8'
    },
    {
      id: 'Item9',
      name: 'Item9',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item9'
    },
    {
      id: 'Item10',
      name: 'Item10',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item10'
    },
    {
      id: 'Item11',
      name: 'Item12',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item13'
    },
    {
      id: 'Item14',
      name: 'Item14',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item14'
    },
    {
      id: 'Item15',
      name: 'Item15',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item15'
    },
    {
      id: 'Item16',
      name: 'Item16',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item16'
    },
    {
      id: 'Item17',
      name: 'Item17',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item17'
    },
    {
      id: 'Item18',
      name: 'Item18',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item18'
    },
    {
      id: 'Item19',
      name: 'Item19',
      icon: 'icon-content rs-icon rs-icon-edit2',
      href: 'item19'
    }
  ]
}

const toolBar = () => {
  return (
    <ButtonToolbar>
      <Button appearance='ghost' active>
        切換預視
      </Button>
      <Button appearance='ghost' active>
        文稿屬性
      </Button>
      <Button appearance='ghost' active>
        編輯檔案歸檔資訊
      </Button>
      <Button appearance='ghost' active>
        列印
      </Button>
      <Button appearance='ghost' active>
        刪除簽稿
      </Button>
      <Button appearance='ghost' active>
        取號
      </Button>
    </ButtonToolbar>
  )
}

const menuBar = () => {
  return <div>選單</div>
}

const leftLayout = () => {
  return <div>左邊清單</div>
}
const contextLayout = () => {
  return <div>內容</div>
}
const ContextLayout = () => {
  return (
    <div>
      <ContainerLayout
        menuBar={menuBar}
        toolBar={toolBar}
        contextLayout={contextLayout}
        leftLayout={leftLayout}
      />
    </div>
  )
}

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: '#365cad',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
}

const SidenavTitle = ({ expand }) => (
  <div>
    <div style={headerStyles}>
      <Icon icon='logo-analytics' size='lg' style={{ verticalAlign: 0 }} />
      <span style={{ marginLeft: 12 }}> </span>
    </div>
    <Dropdown
      title={expand ? 'User' : ''}
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

const App = () => {
  // return <ExampleComponent text="Create React Library Example 😄" />
  return (
    <SidenavLayout
      sidenavData={sidenavData.functionList}
      sidenavTitle={SidenavTitle}
      contextLayout={ContextLayout}
      activePath='item6'
    />
  )
}

export default App
