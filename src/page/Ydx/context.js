/*
 * @Author: yangdongxu
 * @Date: 2026-01-08 16:18:44
 * @LastEditors: yangdongxu
 * @LastEditTime: 2026-01-14 14:03:51
 * @FilePath: \trust-data-space-webd:\react18-app-demo\src\page\Ydx\context.js
 */
import { createContext, useContext, useEffect, useRef, useState, forwardRef } from "react";
import RecipeList from "./RecipeList";
const ThemeContext = createContext(null);
export default function MyApp() {
	const { aaa } = PeopleList;
	return (
		<ThemeContext.Provider value="dark">
			<>
				<Form />
				<Input></Input>
				<PeopleList />
				<RecipeList />
			</>
		</ThemeContext.Provider>
	);
}
function PeopleList() {
	let obj = {
		name: "张三",
		age: 18,
		demo: {
			a: 1,
		},
	};

	return (
		<>
			<div className="intro">
				<h1>欢迎来到我的站点！{JSON.stringify(obj)}</h1>
			</div>
			<p className="summary">
				你可以在这里了解我的想法。
				<br />
				<br />
				<b>
					还有科学家们的<i>照片</i>
				</b>
				！
			</p>
		</>
	);
}
PeopleList.aaaa = function () {
	console.log("我是PeopleList的静态方法");
};
function Input() {
	const inputRef = useRef(); // const inputRef=useRef(null);
	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log(count, inputRef.current.innerHTML, "==ref.current");
	}, [count]);
	function handleClick() {
		setCount(count + 1);
	}
	return (
		<>
			<input type="text"></input>
			<div ref={inputRef}>{count}</div>
			<button onClick={handleClick}>{count}</button>
		</>
	);
}
function Form() {
	const chlidRef = useRef(null);
	const chlidRef1 = useRef(null);
	useEffect(() => {
		console.log(chlidRef, chlidRef1, "==refPanel.current");
	});
	return (
		<Panel title="Welcome">
			<Button ref={chlidRef}>Sign up</Button>
			<Button ref={chlidRef1}>Log in</Button>
			{/* <div>{refPanel.current}</div> */}
		</Panel>
	);
}

function Panel({ title, children }) {
	const theme = useContext(ThemeContext);
	const className = "panel-" + theme;
	return (
		<section className={className}>
			<h1>{title}</h1>
			{children}
		</section>
	);
}
const Button = forwardRef((props, chlidRef) => {
	const theme = useContext(ThemeContext);
	const className = "button-" + theme + " aaaa";
	return (
		<button className={className} ref={chlidRef}>
			{props.children}
		</button>
	);
});
/* function Button({ children }) {
	const theme = useContext(ThemeContext);
	const className = "button-" + theme + " aaaa";
	return <button className={className}>{children}</button>;
} */
