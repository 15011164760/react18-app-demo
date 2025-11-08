/*
 * @Author: yangdongxu
 * @Date: 2024-06-06 09:35:22
 * @LastEditors: yangdongxu
 * @LastEditTime: 2025-02-13 16:11:48
 * @FilePath: \react18-app-demo\src\components\Example.jsx
 */
import "./Example.css";
import crx from "./crx";
import Demo from "./Demo";
import B  from "./B";
import { useState } from "react";
function A() {
  return (
    <div>
      子组件A组件
      <Demo />
    </div>
  );
}

function Example() {
  
  const value = "   跨级组件Example中的数据";
  const [showB,setShowB] = useState(true);
  return (
    <div className="Example_container">
      <div>父组件Example</div>
      <crx.Provider value={value}>
        <A />
      </crx.Provider>
      {showB&&<B />}
      <button onClick={()=>setShowB(!showB)}>切换B组件显示</button>
    </div>
  );
}

export default Example;
