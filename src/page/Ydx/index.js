/*
 * @Author: yangdongxu
 * @Date: 2024-06-12 10:02:56
 * @LastEditors: yangdongxu
 * @LastEditTime: 2026-01-08 15:50:45
 * @FilePath: \trust-data-space-webd:\react18-app-demo\src\page\Ydx\index.js
 */
import React, { useState } from "react";
import Game from "./Game";
function Ydx() {
	const [count, setCount] = useState(0);
	const changeCount = () => {
		setCount(count + 1);
	};
	return (
		<div>
			共享状态：{count}===
			<MyCountButton onClick={changeCount} count={count}></MyCountButton>
			<br />
			<MyCountButton onClick={changeCount} count={count}></MyCountButton>
			computerGame组件：
			<Game></Game>
		</div>
	);
}
export default Ydx; //导出组件
function MyCountButton({ onClick, count }) {
	return (
		<div>
			<button onClick={onClick}>点击了{count}</button>
			<div>听妈妈的话=</div>
		</div>
	);
}
