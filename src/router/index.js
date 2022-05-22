//引入VueRouter
import  {createRouter,createWebHashHistory} from 'vue-router'
//引入需要组件
import Login from '../pages/login';
import INDEX from '../pages/index'

//创建router实例对象，去管理一组一组的路由规则
const router = createRouter({
	history: createWebHashHistory(),
	routes:[
		{
			path:'/',
			component:Login
		},
		{
			path:'/login',
			component:Login
		},
		{
			path:'/index',
			component:INDEX
		}
	]
})

//暴露router
export default router