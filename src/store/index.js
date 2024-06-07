/*
 * @Author: yangdongxu
 * @Date: 2024-06-06 21:05:40
 * @LastEditors: yangdongxu
 * @LastEditTime: 2024-06-06 23:26:22
 * @FilePath: \vue3-projectd:\find_work_2024_year_first\react18-app-demo\src\store\index.js
 */
import counterReducer from './modules/countStore'
import channelReducer from './modules/channelStore'
import { configureStore } from '@reduxjs/toolkit'

 const store = configureStore({
    reducer: {
        counter: counterReducer,
        channel: channelReducer
    }
})
export default store