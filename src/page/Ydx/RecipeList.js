/*
 * @Author: yangdongxu
 * @Date: 2026-01-09 14:09:25
 * @LastEditors: yangdongxu
 * @LastEditTime: 2026-01-12 18:24:33
 * @FilePath: \trust-data-space-webd:\react18-app-demo\src\page\Ydx\RecipeList.js
 */
import { useState } from "react";
// const recipes = [
// 	{
// 		id: "greek-salad",
// 		name: "希腊沙拉",
// 		ingredients: ["西红柿", "黄瓜", "洋葱", "油橄榄", "羊奶酪"],
// 	},
// 	{
// 		id: "hawaiian-pizza",
// 		name: "夏威夷披萨",
// 		ingredients: ["披萨饼皮", "披萨酱", "马苏里拉奶酪", "火腿", "菠萝"],
// 	},
// 	{
// 		id: "hummus",
// 		name: "鹰嘴豆泥",
// 		ingredients: ["鹰嘴豆", "橄榄油", "蒜瓣", "柠檬", "芝麻酱"],
// 	},
// ];
/* function ProductCategoryRow({ item }) {
	return (
		<div>
			<h2>{item.name}</h2>
			<ul>
				{item.ingredients.map((ingredient, index) => (
					<li key={index}>{ingredient}</li>
				))}
			</ul>
		</div>
	);
} */
export default function RecipeList() {
	const [age, setAge] = useState(18);
	function changeAge() {
		setTimeout(() => {
			setAge(age + 1);
			console.log(age, "==age");
		});
	}
	console.log(age, "==age");
	return (
		<div>
			<h1>菜谱</h1>
			<div>{age}</div>
			<button
				onClick={() => {
					changeAge();
					changeAge();
					changeAge();
				}}
			>
				增加年龄
			</button>
		</div>
	);
}
