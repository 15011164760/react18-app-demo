/*
 * @Author: yangdongxu
 * @Date: 2024-06-06 10:41:53
 * @LastEditors: yangdongxu
 * @LastEditTime: 2024-06-07 08:26:27
 * @FilePath: \vue3-projectd:\find_work_2024_year_first\react18-app-demo\src\components\B.jsx
 */
import { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {getListApiFn} from "../store/modules/channelStore"
// const URL = "http://geek.itheima.net/v1_0/channels";
function B() {
    const dispatch = useDispatch();
    const {channelList}=useSelector(state=>state.channel)
    const [list] = useState([]);
    const [count, setCount] = useState(0);
    function changeCount(){
        setCount(count+1)
    }
    
  useEffect(() => {
    //   console.log("B组件渲染了",channelList);
    // async function getListFn() {
    // //   const data = await fetch(URL);
    // //   console.log(data);
    // //   data=data?.json();
    dispatch(getListApiFn())
    // }
    // getListFn();
  },[dispatch]);
  //数据变化就执行
//   useEffect(() => {
//     console.log("数据变化执行");
//   });
  //空数组 执行一次useEffect
//   useEffect(() => {
//     console.log("执行一次useEffect");
//   },[]);
  //指定依赖数据变化就执行
//   useEffect(() => {
//     console.log("根据传入数组依赖变化执行useEffect");
//   },[count]);
//   //清除副作用
//   useEffect(() => {
//     const timer=setInterval(()=>{
//         console.log("计时器执行");
//     },2000)
//     return ()=>{
//         clearInterval(timer)
//     }
//   },[count]);
  return <div style={{border:"1px solid blue",padding:"10px"}}>B组件:useEffect使用
    <ul style={{border:"1px solid red",padding:"10px"}}>
    {channelList.map(item=><span style={{border:"1px solid pink",padding:"5px"}} key={item.id}>{item.name} </span>)}
    </ul>
    <ul style={{border:"1px solid red",padding:"10px"}}>
    list.toString(){list.toString()}
    </ul>
   <button onClick={changeCount}>changeCount：{count}</button>
  </div>;
}
export default B;
