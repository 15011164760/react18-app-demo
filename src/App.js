/*
 * @Author: yangdongxu
 * @Date: 2024-06-04 16:39:04
 * @LastEditors: yangdongxu
 * @LastEditTime: 2024-06-06 09:39:13
 * @FilePath: \vue3-projectd:\find_work_2024_year_first\react18-app-demo\src\App.js
 */
import { useState, useRef } from "react";
import CommentApp from "./components/comment";
import Example from "./components/Example";
import "./main.css";
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
  const msg = <span>我是A组件的数据{new Date()*1}</span>;
  return <div>我是A组件
    <button onClick={()=>getADataFn(msg)}>A组件的数据按钮</button>
  </div>;
}
function B({msgA}) {
  return <div>我是B组件
    <span>{msgA}</span>
  </div>;
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
    setValue(msg);
  }
  const [msgA, setMsgA] = useState('');
  function getADataFn(msg) {
    console.log(" ", msg);
    setMsgA(msg);
  }
  return (
    <div className="App">
      <Example />
      <A getADataFn={getADataFn} />
      <B msgA={msgA}/>
      <input type="text" ref={inputRef} />
      <button onClick={geDomFn}>获取dom元素</button>
      {value}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <CommentApp
        name="yang"
        isBool={false}
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
      <div style={{ background: "red", display: "none" }}>
        <div className="colorFont">我是className设置的文件导入的样式</div>
        <div style={style}>我还可以这样设置行内样式</div>
        <div style={{ color: "red", fontSize: "20px" }}>
          你好我是设置的行内样式
        </div>
        <button onClick={setFormData}>formData.name {formData.name}</button>
        <button onClick={changeNum}>{num}</button>
        <div>
          <Button></Button>
          <Button />
        </div>
        <button onClick={(e) => handleClick("android", e)}>按钮</button>
        <div>{getArticles(3)}</div>
        {/* {字符串} */}
        {"dsf"}
        {/* {变量} */}
        变量:{count}
        {/* {函数调用} */}
        函数调用:{getCount(1)}
        日期：{new Date().getDate()}
        {/* 调用对象 */}
        <div style={{ color: "red", fontSize: "20px" }} className={count}>
          我是style
        </div>
        <ul>
          {obj.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <div>{isLogin && <span>登录成功</span>}</div>
        <div>{isLogin ? <span>登录成功</span> : <span>登录失败</span>}</div>
      </div>
    </div>
  );
}

export default App;
