/*
 * @Author: yangdongxu
 * @Date: 2024-06-04 16:39:04
 * @LastEditors: guoshouying
 * @LastEditTime: 2025-11-08 13:19:46
 * @FilePath: \find_work_2024_year_first\react18-app-demo\src\App.js
 */

import { useState, useRef } from "react";
import CommentApp from "./components/comment";
import Example from "./components/Example";
import "./main.css";
import { Provider } from "react-redux";
import store from "./store";
import router from "./router";
import { RouterProvider } from "react-router-dom";
const count = 1;
const isLogin = false;
function getCount() {
  return count;
}
const obj = [
  {
    name: "张三",
    age: 18,
  },
  {
    name: "李四",
    age: 3,
  },
  {
    name: "王五",
    age: 4,
  },
];
const items = [1, 2, 3, 4, 5].map((item, index) => {
  return <li key={item}>{item}</li>;
});
function getArticles(articles) {
  if (articles === 0) {
    return <div>无图组件</div>;
  } else if (articles === 1) {
    return <div>单图组件</div>;
  }
  if (articles === 3) {
    return <div>三图组件</div>;
  }
}
console.log(items, "==items");
function handleClick(name, e) {
  console.log("点击事件", name, e);
}
function Button() {
  return <button>按钮组件</button>;
}
function A({ getADataFn }) {
  const msg = <span>我是A组件的数据{new Date() * 1}</span>;
  return (
    <div>
      我是A组件
      <button onClick={() => getADataFn(msg)}>A组件的数据按钮</button>
    </div>
  );
}
function B({ msgA }) {
  return (
    <div>
      我是B组件
      <span>{msgA}</span>
    </div>
  );
}
function App() {
  const inputRef = useRef(null);
  function geDomFn() {
    console.log(inputRef.current.value, "==inputRef.current");
  }

  const [num, setNum1] = useState(0);
  const [formData, changeFormData] = useState({
    name: "yang",
    age: 12,
  });
  function setFormData() {
    formData.name = "yang1";
    changeFormData({
      ...formData,
      name: "yang1",
    });
    console.log(formData);
  }
  function changeNum() {
    setNum1(num + 1);
  }
  const style = {
    color: "red",
    fontSize: "20px",
  };
  const [value, setValue] = useState("");
  function getMessage(msg) {
    console.log(msg, "===msg");
    setValue(msg + new Date() * 1);
  }
  const [msgA, setMsgA] = useState("");
  function getADataFn(msg) {
    console.log(" ", msg);
    setMsgA(msg);
  }
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
        <Example />
      </Provider>
      <A getADataFn={getADataFn} />
      <B msgA={msgA} />
      <input type="text" ref={inputRef} />
      <button onClick={geDomFn}>获取dom元素</button>
      <button onClick={(e) => getMessage("yang", e)}>yang</button>
      {value}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <CommentApp
        name="yang"
        isBool={true}
        isnumber={12}
        arr={[1, 2, 3]}
        obj={{ name: "yang", age: 12 }}
        cb={(data) => {
          console.log(data, "===data");
        }}
        jsx={<span style={{ color: "red" }}>我是jsx</span>}
        getMessage={getMessage}
      >
        <div>我是children属性在组件标签内的内容</div>
      </CommentApp>
    </div>
  );
}

export default App;
