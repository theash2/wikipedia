import { App } from 'vue'
import 'element-plus/dist/index.css';
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElMessage,
  ElContainer
} from 'element-plus/lib/components';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElMessage,
  ElContainer
]

export default function (app){
  for (const component of components) {
    app.component(component.name, component)
  };
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
