/*
 * @Author: yangdongxu
 * @Date: 2024-06-12 10:55:52
 * @LastEditors: yangdongxu
 * @LastEditTime: 2026-01-08 13:36:15
 * @FilePath: \trust-data-space-webd:\react18-app-demo\src\page\About\index.js
 */
import "./index.css";
import styles from "./About.module.css";
import classNames from "classnames";
import { Button } from "antd";
const About = () => {
	return (
		// <div className={styles.about1}>
		<div className={classNames(styles.about)}>
			<h1>About</h1>
			<Button type="primary" className={styles.about1}>
				sdfsa
			</Button>
		</div>
	);
};
export default About; //导出组件
