/*
 * @Author: yangdongxu
 * @Date: 2024-06-04 16:39:04
 * @LastEditors: yangdongxu
 * @LastEditTime: 2025-02-10 21:05:06
 * @FilePath: \react18-app-demo\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';
import { RouterProvider } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
     <App />
  </Provider>
);
