/*
 * @Author: yangdongxu
 * @Date: 2024-06-04 16:39:04
 * @LastEditors: yangdongxu
 * @LastEditTime: 2024-06-06 21:31:02
 * @FilePath: \vue3-projectd:\find_work_2024_year_first\react18-app-demo\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <App />
  </Provider>
);
