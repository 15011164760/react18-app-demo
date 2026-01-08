/*
 * @Author: yangdongxu
 * @Date: 2025-11-12 18:24:41
 * @LastEditors: yangdongxu
 * @LastEditTime: 2026-01-08 16:31:14
 * @FilePath: \trust-data-space-webd:\react18-app-demo\src\router\index.js
 */
/*
 * @Author: yangdongxu
 * @Date: 2024-06-12 10:03:49
 * @LastEditors: guoshouying
 * @LastEditTime: 2025-11-08 12:12:46
 * @FilePath: \find_work_2024_year_first\react18-app-demo\src\router\index.js
 */
import { createHashRouter } from "react-router-dom";
import Login from "../page/Login";
import Ydx from "../page/Ydx";
import List from "../page/Ydx/list";
import MyApp from "../page/Ydx/context";
import Article from "../page/Article";
import Layout from "../page/Layout";
// import Board from "@/page/Board";
import About from "../page/About";
// import NotFound from "@/page/NotFound";
//createBrowserRouter history路由 createHashRouter模式的路由
const router = createHashRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			//   {
			//     // path:'/board',
			//     index: true, //默认二级路由
			//     element: <Board />,
			//   },
			//   {
			//     path: "/about",
			//     element: <About />,
			//   },
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/ydx",
		element: <Ydx />,
	},
	{
		path: "/ydx/list",
		element: <List />,
	},
	{
		path: "/ydx/context",
		element: <MyApp />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/article/:id/:name",
		element: <Article />,
	},
	//   {
	//     path: "*",
	//     element: <NotFound />,
	//   },
]);
export default router;
