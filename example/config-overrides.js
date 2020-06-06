/* config-overrides.js */
const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    // 如果使用 less-loader@5 或者更老的版本 ，请移除 lessOptions 这一级直接配置选项。
    lessOptions: {
      javascriptEnabled: true,
    //   modifyVars: { '@base-color': '#f44336' }
    }
  })
);