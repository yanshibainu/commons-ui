import React from 'react'

import { SidenavLayout } from 'commons-ui'

import 'rsuite/lib/styles/index.less';

import 'commons-ui/dist/index.css'

const routes = {
  info: {
    "/task/F001": {
      id: "F001",
      showId: true,
      icon: "",
      name: "基因重組實驗申請書",
      layoutName: "task/[formKey]",
      as: "task/F001",
      icon: "icon-content rs-icon rs-icon-file",
      dataColumns:
        [{
          title: "",
          filterName: "",
        }, 
        {
          title: "管制編號",
          filterName: "表單編號",
          data: null,
          responsivePriority: 0
        },
        {
          title: "計畫名稱",
          filterName: "計畫名稱",
          data: null,
          responsivePriority: 7
        },
        {
          title: "部門",
          filterName: "聯絡人部門名稱",
          data: null,
          responsivePriority: 2
        },
        {
          title: "聯絡人",
          filterName: "聯絡人姓名",
          data: null,
          responsivePriority: 3
        },
        {
          title: "計畫主持人",
          filterName: "主持人姓名",
          data: null,
          responsivePriority: 4
        },
        {
          title: "狀態",
          filterName: null,
          data: "nameWithoutCascade",
          responsivePriority: 5
        },
        {
          title: "送出時間",
          filterName: null,
          data: "createTime",
          responsivePriority: 6
        }
        ],
    },
    "/task/F002": {
      id: "F002",
      showId: true,
      icon: "",
      name: "感染性生物材料處分申請書",
      layoutName: "task/[formKey]",
      as: "task/F002",
      icon: "icon-content rs-icon rs-icon-file-o",
      dataColumns:
        [{
          title: "",
          filterName: "",
        },
        {
          title: "管制編號",
          filterName: "表單編號",
          data: null,
          responsivePriority: 0
        }        
        , {
          title: "計畫名稱",
          filterName: "計畫名稱",
          data: null,
          responsivePriority: 7
        },
        {
          title: "部門",
          filterName: "聯絡人部門名稱",
          data: null,
          responsivePriority: 1
        },
        {
          title: "聯絡人",
          filterName: "聯絡人姓名",
          data: null,
          responsivePriority: 2
        },
        {
          title: "計畫主持人",
          filterName: "主持人姓名",
          data: null,
          responsivePriority: 3
        },
        {
          title: "受理單位",
          filterName: "受理單位機構",
          data: null,
          responsivePriority: 4
        },

        {
          title: "狀態",
          filterName: null,
          data: "nameWithoutCascade",
          responsivePriority: 5
        },
        {
          title: "送出時間",
          filterName: null,
          data: "createTime",
          responsivePriority: 6
        }
        ],
    },
    "/task/F003": {
      id: "F003",
      showId: true,
      icon: "",
      name: "感染性生物材料輸出入及使用申請書",
      layoutName: "task/[formKey]",
      as: "task/F003",
      icon: "icon-content rs-icon rs-icon-file-text",
      dataColumns:
        [{
          title: "計畫名稱",
          filterName: "計畫名稱",
          data: null
        },
        {
          title: "執行期限",
          filterName: "執行期限",
          data: null
        },
        {
          title: "部門",
          filterName: "聯絡人部門名稱",
          data: null
        },
        {
          title: "聯絡人",
          filterName: "聯絡人姓名",
          data: null
        },
        {
          title: "計畫主持人",
          filterName: "主持人姓名",
          data: null
        },
        {
          title: "品項名稱",
          filterName: "品項名稱",
          data: null
        },
        {
          title: "狀態",
          filterName: null,
          data: "nameWithoutCascade"
        },
        {
          title: "送出時間",
          filterName: null,
          data: "createTime"
        }
        ],
    },
    "/task/F004": {
      id: "F004",
      showId: true,
      icon: "",
      name: "輸出輸入RG2感染性生物材料辦理情形回報單",
      layoutName: "task/[formKey]",
      as: "task/F004",
      icon: "icon-content rs-icon rs-icon-file-text",
      dataColumns:
        [{
          title: "品項",
          filterName: "品項",
          data: null
        },
        {
          title: "辦理日期",
          filterName: "辦理日期",
          data: null
        },
        {
          title: "數量",
          filterName: "數量",
          data: null
        },
        {
          title: "保存實驗室",
          filterName: "保存實驗室",
          data: null
        },
        {
          title: "狀態",
          filterName: null,
          data: "nameWithoutCascade"
        },
        {
          title: "送出時間",
          filterName: null,
          data: "createTime"
        }
        ],
    },
    "/task/F005": {
      id: "F005",
      showId: true,
      icon: "",
      name: "帳號開立單",
      layoutName: "task/[formKey]",
      as: "task/F005",
      icon: "icon-content rs-icon rs-icon-user-plus",
      dataColumns:
        [{
          title: "員工編號",
          filterName: "userId",
          data: null
        },
        {
          title: "姓",
          filterName: "lastName",
          data: null
        },
        {
          title: "名",
          filterName: "firstName",
          data: null
        },
        {
          title: "狀態",
          filterName: null,
          data: "nameWithoutCascade"
        },
        {
          title: "送出時間",
          filterName: null,
          data: "createTime"
        }
        ],
    },
    "/system-announce": {
      id: "102",
      name: "系統公告管理維護",
      layoutName: "system-announce",
      icon: "icon-content rs-icon rs-icon-volume-up",
      dataColumns:
        [{
          title: "公告人",
          data: "announceUserName",
          name: "announceUserName",
          width: "10%"
        }
          ,
        {
          title: "公告日期",
          data: "announceDate",
          name: "announceDate",
          width: '15%',
          // render: function (data, type, full, meta) {
          //   return moment(data).format('YYYY-MM-DD');
          // }
        }
          ,
        {
          title: "公告結束日期",
          data: "announceDeadLine",
          name: "announceDeadLine",
          width: '15%',
          // render: function (data, type, full, meta) {
          //   return moment(data).format('YYYY-MM-DD');
          // }
        }
          ,
        {
          title: "公告內容",
          data: "message",
          name: "message",
          width: '50%',
        },
        {
          title: "附件",
          data: "attaches",
          name: "name",
          render: function (row, type, val, meta) {
            let list = "";
            row && row.map((item) => {
              list += `<a  target="_blank"  href="${module.exports.API.NHRI}/PRJ_Attach/${item.id}">${item.name}</a> <br/>`;
            });
            return list;
          },
          width: '15%',
        }
        ]
    },
    "/system-departments": {
      id: "103",
      icon: "icon-content rs-icon rs-icon-user-plus",
      name: "組織人員管理維護",
      layoutName: "system-departments",
      dataColumns:
        [
          {
            title: "部門名稱",
            data: "name",
            name: "name",
          }
        ]
    },
    "/system-groups": {
      id: "104",
      icon: "icon-content rs-icon rs-icon-group",
      name: "權限管理維護",
      layoutName: "system-groups",
      dataColumns:
        [
          {
            title: "權限名稱",
            data: "name",
            name: "name",
          }
        ]
    }
  }
}

const sidenavData = {
  routes,
  API: {
    AUTH: "http://localhost:4000",
    BP: "http://localhost:8080/rest",
    NHRI: "http://localhost:4001/api",
  },
  loginProjectName: "生物安全審查系統",
  projectName: "財團法人國家衛生研究院",
  projectCode: "NHIR",
  projectLogoImgSrc: "/bower_components/pro-resources/images/icon/logo.png",
  leftLayoutItemList: [
    {
      id: "start-process",
      icon: "icon-content rs-icon rs-icon-edit2",
      name: "發起表單",
      layoutName: "start-process"
    },
    {
      id: "task",
      icon: "fas fa-tasks",
      name: "生物安全審查作業",
      children: [
        routes.info["/task/F001"],
        routes.info["/task/F002"],
        // routes.info["/task/F003"],
        routes.info["/task/F004"],
        routes.info["/task/F005"],
      ]
    },
    {
      id: "4",
      icon: "icon-content rs-icon rs-icon-search",
      name: "案件查詢",
      layoutName: "history-search"
    },
    {
      id: "6",
      icon: "icon-content rs-icon rs-icon-download",
      name: "實驗室生物安全等級證明申請",
      layoutName: "internal-audit"
    },
    {
      id: "7",
      icon: "icon-content rs-icon rs-icon-download",
      name: "輸出入申請案件維護",
      layoutName: "form-download"
    },
    {
      id: "8",
      icon: "icon-content rs-icon rs-icon-indent",
      name: "院內規定",
      layoutName: "inner-rule"
    },
    {
      id: "9",
      icon: "icon-content rs-icon rs-icon-list-alt",
      name: "國內規範",
      layoutName: "standard"
    },
    {
      id: "system",
      icon: "icon-content rs-icon rs-icon-wrench",
      name: "系統管理作業",
      children: [
        // {
        //   id: "101",
        //   icon: "zmdi zmdi-comment-text",
        //   name: "系統訊息管理維護",
        //   layoutName: "system"
        // },
        routes.info["/system-announce"],
        routes.info["/system-departments"],
        routes.info["/system-groups"],
        // {
        //   id: "105",
        //   icon: "rs-icon rs-icon-upload",
        //   name: "附件上傳",
        //   layoutName: "attach-upload",
        //   dataColumns:
        //     [
        //       {
        //         title: "檔案名稱",
        //         filterName: null,
        //         data: "name",
        //         name: "name"
        //       }
        //       ,
        //       {
        //         title: "檔案描述",
        //         filterName: null,
        //         data: "desc",
        //         name: "desc"
        //       }
        //       ,
        //       {
        //         title: "下載載止日期",
        //         filterName: null,
        //         data: "deadLine",
        //         name: "deadLine"
        //       }
        //       ,
        //       {
        //         title: "上傳者",
        //         filterName: null,
        //         data: "uploadUser",
        //         name: "uploadUser",
        //       }
        //     ],
        // },
      ]
    }
  ],
  reviewDataColumns:
    [{
      title: "計畫名稱",
      filterName: "計畫名稱",
      data: null
    },
    {
      title: "部門",
      filterName: "主持人部門名稱",
      data: null
    },
    {
      title: "申請人",
      filterName: "主持人姓名",
      data: null
    },
    {
      title: "狀態",
      filterName: null,
      data: "nameWithoutCascade"
    },
    {
      title: "送出時間",
      filterName: null,
      data: "createTime"
    }
    ],
  announceDataColumns:
    [

      {
        title: "公告人",
        filterName: null,
        data: "announceUser",
        name: "announceUser"
      },
      {
        title: "公告日期",
        filterName: null,
        data: "announceDate",
        name: "announceDate"
      },
      {
        title: "公告結束日期",
        filterName: null,
        data: "announceDeadLine",
        name: "announceDeadLine"
      },
      {
        title: "公告內容",
        filterName: null,
        data: "message",
        name: "message"
      }
    ]
};

const ContextLayout = () => {

  return (
    <div>
      ContextLayout
    </div>
  );
}

const App = () => {
  // return <ExampleComponent text="Create React Library Example 😄" />
  return <SidenavLayout sidenavData={sidenavData.leftLayoutItemList} contextLayout={ContextLayout}/>
}

export default App
