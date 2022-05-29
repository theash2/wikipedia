//引入VueRouter
import  {createRouter,createWebHashHistory} from 'vue-router'
//引入需要组件
import Login from '../pages/login';
import Index from '../pages/index';
import Register from '../pages/register';
import NotFound from '../pages/404';
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
			component:Index
		},
		{
			path:'/register',
			component:Register
		},
		{
			path:'/404',
			component:NotFound
		}
	]
})

//暴露router
export default router