import { createContext, useContext, useEffect, useRef, useState } from "react";

const ThemeContext = createContext(null);

export default function MyApp() {
	return (
		<ThemeContext.Provider value="dark">
			<>
				<Form />
				<Input></Input>
			</>
		</ThemeContext.Provider>
	);
}
function Input() {
	const inputRef = useRef(); // const inputRef=useRef(null);
	const [count, setCount] = useState(0);
	let ref = useRef(0);
	/* 
    场景 3：优化引用类型（避免重复创建对象/数组）
    避免每次渲染都创建新的对象（{}），减少子组件不必要的渲染。
    import { useMemo } from 'react';

        function MyComponent({ style }) {
        const defaultStyle = useMemo(() => ({ color: 'red', fontSize: 16 }), []);
        
        const mergedStyle = useMemo(() => ({
            ...defaultStyle,
            ...style,
        }), [style, defaultStyle]);

        return <div style={mergedStyle}>Hello</div>;
        }
    */
	useEffect(() => {
		// console.log(ref.current, inputRef, "==ref.current");
		ref.current = count;
		// ref.current++;
		// inputRef.current.focus();
	});
	function handleClick() {
		setCount(count + 1);
		// ref.current = ref.current + 1;
	}
	return (
		<>
			<input type="text" ref={inputRef}></input>
			<div>{ref.current}</div>
			<button onClick={handleClick}>{count}</button>
		</>
	);
}
function Form() {
	return (
		<Panel title="Welcome">
			<Button>Sign up</Button>
			<Button>Log in</Button>
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

function Button({ children }) {
	const theme = useContext(ThemeContext);
	const className = "button-" + theme + " aaaa";
	return <button className={className}>{children}</button>;
}
