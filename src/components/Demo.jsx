/*
 * @Author: yangdongxu
 * @Date: 2024-06-06 09:56:36
 * @LastEditors: guoshouying
 * @LastEditTime: 2025-11-08 13:28:21
 * @FilePath: \find_work_2024_year_first\react18-app-demo\src\components\Demo.jsx
 */
// 导入React的必要hooks
import { useContext, useState } from "react";
// 导入Redux相关的hooks
import { useDispatch, useSelector } from "react-redux";
// 导入Redux action creators
import { increment, decrement, addToNum } from "../store/modules/countStore";
// 导入自定义组件
import crx from "./crx";

/**
 * 自定义Hook：useToggle
 * 用于切换显示状态
 * @returns {Object} 包含show状态和toggleShow函数
 */
function useToggle() {
  // 使用useState管理显示状态
  const [show, setShow] = useState(true);
  // 切换显示状态的函数
  function toggleShow() {
    setShow(!show);
  }
  // 返回显示状态和切换函数
  return { show, toggleShow };
}

/**
 * Demo组件
 * 使用了Redux和自定义hooks
 */
function Demo() {
  // 从Redux store中获取count状态
  const { count } = useSelector((state) => state.counter);
  // 获取dispatch函数用于触发action
  const dispatch = useDispatch();

  // 使用自定义context获取值
  const val = useContext(crx);
  // 使用自定义useToggle hook获取显示状态和切换函数
  const { show, toggleShow } = useToggle();
  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      孙子demo组件
      {val}
      <input type="text" />
      <div>
        {show && <div>切换显示内容</div>}
        <button onClick={() => toggleShow()}>切换按钮</button>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        {count}
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(addToNum(-10))}>-10</button>
        <button onClick={() => dispatch(addToNum(20))}>+20</button>
      </div>
    </div>
  );
}
export default Demo;
