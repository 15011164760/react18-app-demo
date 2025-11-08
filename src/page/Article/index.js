/*
 * @Author: yangdongxu
 * @Date: 2024-06-12 10:02:56
 * @LastEditors: yangdongxu
 * @LastEditTime: 2024-07-11 10:13:48
 * @FilePath: \vue3-projectd:\find_work_2024_year_first\react18-app-demo\src\page\Article\index.js
 */
import { useSearchParams,useParams } from 'react-router-dom';
const Article = () => {
    //useSearchParams 获取参数 /article?id=123&name=张三 我现在求购一个二手电动车
    const [params] = useSearchParams();
    const id = params.get('id');
    const name = params.get('name');
    // /article/123/张三
   const useParam=useParams();
    return <div>我是文章页面
        <div>获取useSearchparams参数
            <div>id:{id}</div>
            <div>name:{name}</div>
        </div>
        <div>
            获取params参数
            <div>id:{useParam.id}</div>
            <div>name:{useParam.name}</div>
        </div>
    </div>
}
export default Article;//导出组件   