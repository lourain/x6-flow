import Vue from 'vue'
import 'view-design/dist/styles/iview.css';

import {
  Modal,
  Layout,
  Menu,
  MenuItem,
  Sider,
  Submenu,
  Icon,
  Form,
  FormItem,
  Input,
  Button,
  Message,
  CheckboxGroup,
  Checkbox,
  Table,
  Page,
  Select,
  Option,
  Spin,
  Tag,
  Drawer,
  Tooltip,
} from 'view-design'

import '../theme/index.less'

Vue.component('Modal', Modal)
Vue.component('Layout', Layout)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Sider', Sider)
Vue.component('Submenu', Submenu)
Vue.component('Icon', Icon)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Input', Input)
Vue.component('Button', Button)
Vue.component('CheckboxGroup', CheckboxGroup)
Vue.component('Checkbox', Checkbox)
Vue.component('Table', Table)
Vue.component('Page', Page)
Vue.component('Select', Select)
Vue.component('Option', Option)
Vue.component('Tag', Tag)
Vue.component('Drawer', Drawer)
Vue.component('Tooltip', Tooltip)


Vue.prototype.$Message = Message
Vue.prototype.$Spin = Spin
Vue.prototype.$Modal = Modal
// 自定义检测权限函数
Vue.prototype.$Permission = (id, cb) => {
  let permissionList = JSON.parse(localStorage.permissionList)
  let flag = permissionList.find(item => item.permissionId == id)
  if (!flag) {
    Message.warning('您没有相关权限~')
  } else {
    cb && cb()
  }
}
Vue.prototype.$HasPermission = (id) => {
  let permissionList = JSON.parse(localStorage.permissionList)
  let flag = permissionList.find(item => item.permissionId == id)
  return flag
}
