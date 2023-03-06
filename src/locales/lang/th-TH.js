import antdEnUS from 'ant-design-vue/es/locale-provider/en_US'
import momentEU from 'moment/locale/eu'
import global from './th-TH/global'

import menu from './th-TH/menu'
import setting from './th-TH/setting'
import user from './th-TH/user'

import dashboard from './th-TH/dashboard'
import form from './th-TH/form'
import result from './th-TH/result'
import account from './th-TH/account'

const components = {
  antLocale: antdEnUS,
  momentName: 'eu',
  momentLocale: momentEU
}

export default {
  message: '-',

  'layouts.usermenu.dialog.title': 'Message',
  'layouts.usermenu.dialog.content': 'คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?',
  'layouts.userLayout.title': 'Ant Design is the most influential web design specification in Xihu district',
  ...components,
  ...global,
  ...menu,
  ...setting,
  ...user,
  ...dashboard,
  ...form,
  ...result,
  ...account
}
