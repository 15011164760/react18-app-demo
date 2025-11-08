/*
 * @Author: yangdongxu
 * @Date: 2024-06-12 09:59:12
 * @LastEditors: yangdongxu
 * @LastEditTime: 2024-06-14 08:50:30
 * @FilePath: \vue3-projectd:\find_work_2024_year_first\react18-app-demo\src\Page\Login\index.js
 */

import {Link,useNavigate } from 'react-router-dom'
const Login=()=>{
    const getUrl=useNavigate();
    return <div>我是登录页面
        <Link to="/article">文章页面</Link>
        <button onClick={()=>getUrl('/article/name=zhangsan/age=18')}>编程式：文章页面</button>
        <div>路由传参searchparams</div>
        <Link to="/article?id=123&name=张三">文章页面</Link>
        <div>路由传参params</div>
        <Link to="/article/123/张三">文章页面</Link>
    </div>
}
export default Login