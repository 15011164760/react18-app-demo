import {Link,Outlet} from 'react-router-dom'
const Layout=()=>{
    return (
        <div>
            <h1>我是一级路由</h1>
            <Link to="/">面板</Link>|
            <Link to="/about">关于</Link>
            <Outlet />
        </div>
    )
}
export default Layout;