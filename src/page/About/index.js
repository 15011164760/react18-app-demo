/*
 * @Author: yangdongxu
 * @Date: 2024-06-12 10:55:52
 * @LastEditors: yangdongxu
 * @LastEditTime: 2024-07-10 10:36:53
 * @FilePath: \vue3-projectd:\find_work_2024_year_first\react18-app-demo\src\page\About\index.js
 */
import './index.scss'
import styles from './About.module.css'
import classNames from 'classnames';
import { Button } from 'antd';
const About=()=>{
    return(
        // <div className={styles.about1}>
        <div className={classNames(styles.about)}>
            <h1>About</h1>
            <Button type="primary">sdfsa</Button>
        </div>
    )
}
export default About;//导出组件