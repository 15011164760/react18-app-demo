/*
 * @Author: yangdongxu
 * @Date: 2024-06-12 10:03:49
 * @LastEditors: guoshouying
 * @LastEditTime: 2025-11-08 12:12:46
 * @FilePath: \find_work_2024_year_first\react18-app-demo\src\router\index.js
 */
import { createHashRouter } from "react-router-dom";
import Login from "../page/Login";
import Article from "../page/Article";
import Layout from "../page/Layout";
// import Board from "@/page/Board";
// import About from "@/page/About";
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
    path: "/article/:id/:name",
    element: <Article />,
  },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
]);
export default router;
