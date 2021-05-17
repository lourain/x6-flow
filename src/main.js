import { createApp } from 'vue'
import { ElInput,ElButton } from 'element-plus'
import App from './App.vue'

import 'element-plus/packages/theme-chalk/src/base.scss'

createApp(App)
  .component(ElInput.name, ElInput)
  .component(ElButton.name, ElButton)
.mount('#app')
