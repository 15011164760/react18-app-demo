/*
 * @Author: yangdongxu
 * @Date: 2024-06-06 09:56:36
 * @LastEditors: yangdongxu
 * @LastEditTime: 2024-06-07 16:45:25
 * @FilePath: \vue3-projectd:\find_work_2024_year_first\react18-app-demo\src\components\demo.jsx
 */
import { useContext, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {increment, decrement,addToNum} from "../store/modules/countStore"
import crx from "./crx";

function useToggle() {
  const [show, setShow] = useState(true);
  function toggleShow() {
    setShow(!show);
  }
  return { show, toggleShow };
}
function Demo() {
    const {count}=useSelector(state => state.counter);
    const dispatch = useDispatch();

  const val = useContext(crx);
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
